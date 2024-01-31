import React, { useState, useEffect, useMemo } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { csvParse } from 'd3';

// Downsampling function
const downsample = (data, samples) => {
  let downsampled = [];
  const totalPoints = data.length;
  const every = Math.ceil(totalPoints / samples);
  
  for (let i = 0; i < totalPoints; i += every) {
    downsampled.push(data[i]);
  }
  return downsampled;
};

const Graph = ({ aggregationType }) => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const csvUrl = `${process.env.PUBLIC_URL}/dataset.csv`;
      const response = await fetch(csvUrl);
      const csvString = await response.text();
      return csvString;
    };

    fetchCSVData().then(csvString => {
      const tempData = csvParse(csvString, d => ({
        date: new Date(d.Timestamp),
        year: new Date(d.Timestamp).getFullYear(),
        month: new Date(d.Timestamp).getMonth() + 1,
        profit: parseFloat(d['Profit Percentage'])
      }));

      // Downsampling for large datasets
      const downsampledData = downsample(tempData, 1000); // Adjust the number of samples based on performance
      setRawData(downsampledData);
    });
  }, []);

  // Memoize processed data
  const processedData = useMemo(() => {
    let chartData = [];

    if (aggregationType === 'yearly') {
      // Yearly aggregation
      let yearlyData = {};
      rawData.forEach(d => {
        yearlyData[d.year] = yearlyData[d.year] || { profit: 0, count: 0 };
        yearlyData[d.year].profit += d.profit;
        yearlyData[d.year].count++;
      });

      chartData = Object.keys(yearlyData).map(year => ({
        timestamp: year,
        profit: yearlyData[year].profit / yearlyData[year].count
      }));
    } 
    // else if (!isNaN(parseInt(aggregationType))) {
    //   // Specific year data
    //   chartData = rawData
    //     .filter(d => d.year === parseInt(aggregationType))
    //     .map(d => ({
    //       timestamp: d.date.getMonth() + 1,
    //       profit: d.profit
    //     }));
    // }
    else if (!isNaN(parseInt(aggregationType))) {
        // Specific year data aggregation
        let monthlyData = {};
        rawData.filter(d => d.year === parseInt(aggregationType)).forEach(d => {
          const monthKey = d.month;
          monthlyData[monthKey] = monthlyData[monthKey] || { profit: 0, count: 0 };
          monthlyData[monthKey].profit += d.profit;
          monthlyData[monthKey].count++;
        });
        
        chartData = Object.keys(monthlyData).map(month => ({
          timestamp: month,
          profit: monthlyData[month].profit / monthlyData[month].count
        }));
      }

    chartData.sort((a, b) => a.timestamp - b.timestamp);
    console.log(chartData);
    return chartData;
  }, [rawData, aggregationType]);

  return (
    <LineChart
      xAxis={[{ type: 'number', data: processedData.map(d => d.timestamp.toString()) }]}
      series={[{ data: processedData.map(d => d.profit) }]}
      width={500}
      height={300}
    />
  );
};

export default Graph;
