import React from 'react';
import stars1 from '../assets/night/star-small.png';
import stars2 from '../assets/night/star-bi1.png';
import stars3 from '../assets/night/star-bi2.png';
import moonlight from '../assets/night/light.png';
import moon from '../assets/night/moon.png';
import nightcloud1 from '../assets/night/nightcloud1.png';
import nightcloud2 from '../assets/night/nightcloud2.png';
import nightcloud3 from '../assets/night/nightcloud3.png';
import planet from '../assets/night/planet.png';
import star from '../assets/night/realstar.png';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`


function NightPge(){
    
        const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

        return (
            <section id = "nightSection">
                <img class = "nightImg" id = "stars1" src = {stars1} alt= "stars"/>
                <img class = "nightImg" id = "stars2" src = {stars2} alt= "stars"/>
                <img class = "nightImg" id = "stars3" src = {stars3} alt= "stars"/>
                <img class = "nightImg" id = "moonlight" src = {moonlight} alt= "moonlight"/>
                <img class = "nightImg" id = "moon" src = {moon} alt= "moon"/>
                <img class = "nightImg" id = "nightcloud1" src = {nightcloud1} alt= "nightcloud"/>
                <img class = "nightImg" id = "nightcloud2" src = {nightcloud2} alt= "nightcloud"/>
                <img class = "nightImg" id = "nightcloud3" src = {nightcloud3} alt= "nightcloud"/>
                <img class = "nightImg" id = "planet" src = {planet} alt= "planet"/>
                <img class = "nightImg" id = "star" src = {star} alt= "star"/>

                <div id = "nameBox">
                    <div class = "moveTxtBox" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.p class = "startTxt" id = "txtgreet" style={{ transform: props.xy.interpolate(trans1) }}> Hello! I'm </animated.p>
                        <animated.p class = "startTxt" id = "txtname" style={{ transform: props.xy.interpolate(trans2) }}>Judith Gammelli</animated.p>
                        <animated.p class = "startTxt" id = "txtinfo" style={{ transform: props.xy.interpolate(trans3) }}>and this is my website...</animated.p>
                    </div>
                </div>
            </section>
        );
    
}


export default NightPge;