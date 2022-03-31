import React from 'react';

function Buttons(props) {

    console.log(props.buttons)

    let earButtons = props.buttons.items.map(item => {
        return <button 
                key={item.id} 
                onClick={props.clicked}
                value={item.filename}
                name={props.buttons.directory}
                >{item.label}</button>
    });


    return (
        <div className="ear-button-container">
            <h2>Ears</h2>
        <div className="ear-buttons">
            {earButtons}
            </div>
        </div>
    )
}

export default Buttons;