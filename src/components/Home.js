import React from "react";
import './home.css';
import home_background from '../resources/home_background.jpg';

function Home() {

    return(
        <section id="home">
            <div className="home-intro">
                <h2>
                    Hi. I'm Matt Harlos.
                    <br/> I'm a full-stack software developer.
                </h2>
            </div>
            <div className="home-background">
                <img id="home-background" src={home_background} alt="home-background" />
            </div>
            
        
        </section>
    )
}

export default Home;