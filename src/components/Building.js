import React from "react";
import './building.css';

function Building() {

    return(
        <section id="building">
            <h2>
                Building
            </h2>
            <div id="building-container">
                <div id="roof-container">
                    <div className="chimney-background"></div>
                    <div id="chimney">
                        <div id="chi-1"></div>
                        <div id="chi-2"></div>
                        <div id="chi-3"></div>
                        <div id="chi-4">
                            <div className="chi-pipe"></div>
                            <div className="chi-pipe"></div>
                        </div>
                    </div>
                    <div className="roof"></div>
                    
                </div>
                <div id="wall-container" className="brick flex">
                    <div className="level-container flex container">
                        <div className="window-container container">
                            <div className="window-animation"></div>
                        </div>
                        <div className="window-container container">
                            <div className="window-story"></div>
                        </div>
                    </div>
                    <div className="level-container flex container">
                        <div className="window-container container">
                            <div className="window-animation"></div>
                        </div>
                        <div className="window-container container">
                            <div className="window-story"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Building;