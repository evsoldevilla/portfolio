import React from 'react';
import profilePic from '../img/profilePic.png';
import vba from '../img/VBA.png';
import python from '../img/Python.png';
import java from '../img/Java.png';
import node from '../img/Node.png';
import javasrcipt from '../img/JavaScript.png';
import sqlserver from '../img/SQL.png';
import mysql from '../img/MySQL.png';
import csharp from '../img/CSharp.png';
import reactwithredux from '../img/ReactwithRedux.png';
import './Profile.css';

const profile = props => {
    return (
        <div className="profile">
            <img className="mainpic" src={profilePic}/>
            <div className="movingimages">
                <img className="vba" src={vba}/>
                <img className="python" src={python}/>
                <img className="nodeimage" src={node}/>
                <img className="java" src={java}/>
                <img className="mysql" src={mysql}/>
                <img className="sqlserver" src={sqlserver}/>
                <img className="csharp" src={csharp}/>
            </div>
            <div className="text-block-slider">            
                <div className="slide1">
                    <h3>Profile Overview</h3>
                    <p>VBA Expert - I can say that as an accountant, this is one of the most important skill that I have as I can automate more than half of my work in whatever process that I handle.</p>
                </div>
                <div className="slide2">
                    <p>More than 15 years of accounting/finance experience with different line of businesses like retail, restaurants, services, manufacturing, oil and gas industry... </p>
                </div>
                <div className="slide3">
                    <p>Trainor/Coach for VBA, Advance Excel Formulas and Functions, MS Access, SAP, Processes and some other programming language...</p>
                </div>
                <div className="slide4">
                    <p>Now trying web and application development using Python, Java, Javascript, C#, SQL, PHP, HTML, CSS</p>
                </div>
                <div className="slide5">
                    <p>Now trying web and application development using Python, Java, Javascript, C#, SQL, PHP, HTML, CSS</p>
                </div>
            </div>
        </div>
    );
};

export default profile;
