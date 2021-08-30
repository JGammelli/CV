import React, { Component } from 'react';
import angel from '../assets/sea/angel.png';
import cliffs from '../assets/sea/cliffs.png';


function SeaPge(){
    
        return (
            
            <>
            <section id="seaSection">
                <img class = "seaImg" id = "angel" src = {angel} alt= "angel"/>
                <img class = "seaImg" id = "cliffs" src = {cliffs} alt= "cliffs"/>
            </section>

            </>
        );
    
}


export default SeaPge;