import React, { useState } from "react";
import styles from "./Growth.module.scss";
import { LineChart } from '@mui/x-charts/LineChart';
import Graph from "../graph/Graph";
import { MenuItem, TextField } from "@mui/material";
const timePeriod = [
  {
    label:"Yearly",
    value: "yearly"
  },
  {
    label:"2016",
    value: "2016",
  },
  {
    label:"2017",
    value: "2017",
  },
  {
    label:"2018",
    value: "2018",
  },
]
const Growth = () => {
  const [data, setdata] = useState('yearly')
  return (
    <div className={styles.growth}>
      <div className={styles.heading}>
        <div className={styles.headingText}>Growth</div>
        <div className={styles.headingSubText}>
          <TextField select value={data} onChange={(e)=>setdata(e.target.value)} size="small"
          >
            {timePeriod.map(options => (
              <MenuItem key={options.value} value={options.value}>{options.label}</MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className={styles.chart}>
        <Graph aggregationType={data}/>
      </div>
    </div>
  );
};

export default Growth;
