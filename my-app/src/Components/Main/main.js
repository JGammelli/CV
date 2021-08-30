import React, { Component } from 'react';
import NightPge from './nightPge.js';
import DayPge from './dayPge.js';
import SeaPge from './seaPge.js';
import SunsetPge from './sunsetPge.js';

class Main extends Component {
    render(){
        
        return (
            <>
            <header>Menu</header>
            <NightPge/>
            <DayPge/>
            <SunsetPge/>
            <SeaPge/>
            </>
        );
    }
}

export default Main;