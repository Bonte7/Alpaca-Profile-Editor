import React from 'react';

function AlpacaProfile(props) {

//possibly map over a prop with all the images from the alpacaConfig or object

//let background = `images/backgrounds/${props.background}.png`
let accessory = `images/accessories/${props.accessories}.png`
let ears = `images/ears/${props.ears}.png`
let eyes = `images/eyes/${props.eyes}.png`
let hair = `images/hair/${props.hair}.png`
let leg = `images/leg/${props.leg}.png`
let mouth = `images/mouth/${props.mouth}.png`
let neck = `images/neck/${props.neck}.png`
let nose = `images/${props.nose}.png`


    return(
        <div className="alpaca-frame">
            <img className="neck" src={neck} alt="neck"/>
            <img className="nose" src={nose} alt="nose"/>
            <img className="mouth" src={mouth} alt="mouth"/>
            <img className="leg" src={leg} alt="leg"/>
            <img className="ears" src={ears} alt="ears"/>
            <img className="hair" src={hair} alt="hair"/> 
            <img className="accessory" src={accessory} alt="accessory"/>
            <img className="eyes" src={eyes} alt="eyes"/>
            
        </div>
    );
}

export default AlpacaProfile;