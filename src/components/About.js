import React from "react";
import "./about.css"
import html_css from '../resources/html-css.svg';
import js from '../resources/js.svg';
import java from '../resources/java.svg';
import python from '../resources/python.svg';
import php from '../resources/php.svg';
import psql from '../resources/psql.svg';
import react from '../resources/react.svg';
import vue from '../resources/vue.svg';
import flask from '../resources/flask.svg';
import wp from '../resources/wp.svg';
import ps from '../resources/ps.svg';
import il from '../resources/il.svg';


function About() {

    const skillSet = [{
        name: "HTML / CSS",
        knowledge: "Excellent",
        img: html_css,
        procentage: "skill-set-bar procent90"
    },{
        name: "JavaScript",
        knowledge: "Very Good",
        img: js,
        procentage: "skill-set-bar procent80"
    },{
        name: "Java",
        knowledge: "Good",
        img: java,
        procentage: "skill-set-bar procent70"
    },{
        name: "Python",
        knowledge: "Good",
        img: python,
        procentage: "skill-set-bar procent70"
    },{
        name: "PHP",
        knowledge: "Good",
        img: php,
        procentage: "skill-set-bar procent70"
    },{
        name: "PostgreSQL",
        knowledge: "Fair",
        img: psql,
        procentage: "skill-set-bar procent60"
    },{
        name: "React.js",
        knowledge: "Very Good",
        img: react,
        procentage: "skill-set-bar procent80"
    },{
        name: "Vue.js",
        knowledge: "Good",
        img: vue,
        procentage: "skill-set-bar procent70"
    },{
        name: "Flask",
        knowledge: "Fair",
        img: flask,
        procentage: "skill-set-bar procent60"
    },{
        name: "WordPress",
        knowledge: "Fair",
        img: wp,
        procentage: "skill-set-bar procent50"
    },{
        name: "Photoshop",
        knowledge: "Fair",
        img: ps,
        procentage: "skill-set-bar procent50"
    },{
        name: "Illustrator",
        knowledge: "Fair",
        img: il,
        procentage: "skill-set-bar procent50"
    }];

    const column1 = skillSet.slice(0, 6)
    const column2 = skillSet.slice(6, 12)

    // Generate Skill Column
    const column = (col) => {
        return(
            col.map((item, index) => {
                return(
                    <li className="skill-set-item" key={index}>
                        <div className="skill-set-icon">
                            <img src={item.img} alt={item.name}/>
                        </div>
                        <div className="skill-set-detail">
                            <div className="skill-set-title">
                                <div className="skill-name">{item.name}</div>
                                <div className="skill-procentage">{item.knowledge}</div>
                            </div>
                            <div className={item.procentage}/>
                        </div>
                    </li>
                )
            })
        )
    }

    return(
        <section id="about">
            <h2>About Me</h2>
            <div className="flex">
                <div className="about-content">
                    <p>I am an enthusiastic and dedicated Software Developer with excellent interpersonal and problem-solving skills as well as great analytic and planning ability. 
                        My collaborative mindset and passion for coding makes me a reliable and adaptable teammate, who is keen to step out of his comfort zone and constantly keep learning. 
                        I have a strong interest in innovative software engineering projects that require creativity, attention to detail, and both abstract and strategic thinking.
                    </p>
                </div>
                <div className="skill-set-container">
                    <div className="skill-set-header"><h2>Skill set</h2></div>
                    <div className="skill-set-content">
                        <ul className="skill-set-list">
                            {column(column1)}
                        </ul>
                        <ul className="skill-set-list">
                            {column(column2)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;