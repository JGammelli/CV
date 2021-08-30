import React, { Component } from 'react';
import angel from '../assets/day/angel.png';
import angel2 from '../assets/day/angel2.png';

import cloud from '../assets/day/cloud.png';
import cloud2 from '../assets/day/cloud2.png';
import cloud3 from '../assets/day/cloud3.png';
import cloud4 from '../assets/day/cloud4.png';
import cloud5 from '../assets/day/cloud5.png';

import sun from '../assets/day/sun.png';
import sunshine from '../assets/day/sunshine.png';


function DayPge(){
    
        return (
            <>
            <section id="daySection">
                <div class="aboutMe">
                    <h1>About me myself and I</h1>
                    <p>I am so cool u should always want to hire me</p>
                    <h2>Inpirational or goal or whatever</h2>
                </div>
                <img class = "dayImg" id = "sunshine" src = {sunshine} alt= "sunshine"/>
                <img class = "dayImg" id = "sun" src = {sun} alt= "sun"/>
                <img class = "dayImg" id = "cloud5" src = {cloud5} alt= "cloud"/>
                <img class = "dayImg" id = "cloud3" src = {cloud3} alt= "cloud"/>
                <img class = "dayImg" id = "cloud2" src = {cloud2} alt= "cloud"/>
            </section>

            <section id= "daySection2">
                <div class="education">
                    <h1>My knowledge and education</h1>
                    <p>I have studioed this and that bla bla bla which fsaf</p>
                    <h4>my strength and i can also do this and im good at this</h4>
                </div>

                <img class = "dayImg" id = "cloud" src = {cloud} alt= "cloud"/>
                <img class = "dayImg" id = "cloud4" src = {cloud4} alt= "cloud"/>
                <img class = "dayImg" id = "angel2" src = {angel2} alt= "angel"/>
                <img class = "dayImg" id = "angel" src = {angel} alt= "angel"/>
            </section>

            <section id= "daySection3">
            </section>
            </>
        );
    
}


export default DayPge;