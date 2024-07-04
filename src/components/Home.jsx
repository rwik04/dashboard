import React from 'react';
import '../stylesheets/home.css'
import DetectionCount from './Detection_Alert';
import ChartBar from './Chart.jsx'
import Piechart from './Pie.jsx';

function HomePage(){
    return(
        <div className="wrapper">
            <div className="row welcome">
                <h1 className='welcome-message'>Welcome, Admin</h1>
            </div>
            <div className="row cards">
                <div className="col lg-3 md-2 sm-1">
                    <DetectionCount card_name='New Detections' card_num='64' card_icon='warning'/>
                </div>
                <div className="col lg-3 md-2 sm-1">
                    <DetectionCount card_name='Total Defects Detected' card_num='1080' card_icon='add'/>
                </div>
                <div className="col lg-3 md-2 sm-1">
                    <DetectionCount card_name='Total Days Running' card_num='193+' card_icon='calendar_clock'/>
                </div>
            </div>
            <div className="row graphs">
                <div className="col lg-2 md-2 sm-1">
                    <ChartBar/>
                </div>
                <div className="col lg-2 md-2 sm-1">
                    <Piechart/>
                </div>
            </div>
        </div>

    )
};

export default HomePage;