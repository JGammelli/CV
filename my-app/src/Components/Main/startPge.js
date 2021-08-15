import React, { Component } from 'react';
import img from './start.gif';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`


function StartPge(){
    
        const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

        return (
            < >
                <img id = "startGif" src = {img} alt= "gif"/>
                <div id = "StartTxtBox">
                    <div class = "moveTxtBox" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.p class = "startTxt" id = "txtgreet" style={{ transform: props.xy.interpolate(trans1) }}> Hello! I'm </animated.p>
                        <animated.p class = "startTxt" id = "txtname" style={{ transform: props.xy.interpolate(trans2) }}>Judith Gammelli</animated.p>
                        <animated.p class = "startTxt" id = "txtinfo" style={{ transform: props.xy.interpolate(trans3) }}>and this is my website...</animated.p>
                    </div>
                </div>
            </>
        );
    
}


export default StartPge;