import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import '../stylesheets/chart.css'

function ChartBar(){
    return(
    <div className="card chart">
        <div className="card2 chart">
            <div className="row chart">
                <h2 style={{color:'white',fontWeight:'bold'}}>Last Week Tracks</h2>
            </div>
            <div className="row chart">
            <BarChart
            series={[
                { data: [4, 2, 5, 4, 1, 2, 6], stack: 'A', label: 'Rust' , color:'white'},
                { data: [2, 8, 1, 3, 1, 8, 9], stack: 'B', label: 'Dirt' },
                { data: [4, 2, 5, 4, 1, 2, 6], stack: 'C', label: 'Dent' },
                { data: [2, 8, 1, 3, 1, 8, 9], stack: 'D', label: 'Wear' },
            ]}
            barLabel={(item, context) => {
                if ((item.value ?? 0) > 10) {
                return 'High';
                }
                return context.bar.height < 60 ? null : item.value?.toString();
            }}
            width={600}
            height={290}
            />
            </div>
        </div>
    </div>
  );
}

export default ChartBar;