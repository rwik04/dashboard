import React from 'react';
import '../stylesheets/card.css'

function DetectionCount(props){
    return(
        <div class="card">
            <div class="card2">
                <div className="row row-card">
                    <h4>{props.card_name}</h4>
                </div>
                <div className="row row-card">
                    <div className="col col-card1">
                        <div className="col sub-col">
                            <span className="material-symbols-outlined" style={{fontSize: '60px', fontWeight:'bold', color: 'lightgreen'}}>
                            keyboard_arrow_up
                            </span>
                        </div>
                        <div className="col sub-col">
                            <h1>{props.card_num}</h1>
                        </div>
                    </div>
                    <div className="col col-card2">
                        <span class="material-symbols-outlined" style={{fontSize: '30px', color:'yellow', backgroundColor: 'rgb(0,12,37)', border:'15px solid rgb(0,12,37)', borderRadius: '60px'}}>
                        {props.card_icon}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetectionCount;