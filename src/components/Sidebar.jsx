import React from "react";
import 'C:/Users/ASUS/Desktop/project/dashboard/src/stylesheets/sidebar.css'
import {Link} from 'react-router-dom';

function Sidebar(props){
    return(
        <div className="container sidebar-container">
            <div className="row align-items-center">
                <div className="col-2 sidebar-icon">
                    <span className="material-symbols-outlined">
                        {props.icon}
                    </span>
                </div>
                <div className="col sidebar-text">
                    <span><a href={props.url} style={{color:"white", textDecoration:'none'}}>{props.name}</a></span>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
