import React, { Component } from 'react';
import img from './start.gif';

class StartPge extends Component {
    render(){
        return (
            < >
                <img id = "startGif" src = {img} alt= "gif"/>
                <h1 id= "startTxt">Hello! I'm Judith Gammelli and this is my website. </h1>
            </>
        );
    }
}

export default StartPge;