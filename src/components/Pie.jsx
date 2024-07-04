import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../stylesheets/chart.css'

const data = [
  { id: 0, value: 10, label: 'Rust' ,color:'white'},
  { id: 1, value: 15, label: 'Dent' },
  { id: 2, value: 20, label: 'Dirt' },
  { id: 3, value: 5,  label: 'Wear' }
];

export default function Piechart() {
  return (
    <div className="card chart">
        <div className="card2 chart">
            <div className="row chart">
                <h2 style={{color:'white',fontWeight:'bold'}}>Defect Categories</h2>
            </div>
            <div className="row chart">
                <PieChart
                series={[
                    {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={250}
                />
            </div>
        </div>
    </div>
    
  );
}