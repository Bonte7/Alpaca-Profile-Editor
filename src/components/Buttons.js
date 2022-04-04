import React from 'react';

function Buttons(props) {

    let buttonCategories = props.buttons.map(button => {
        return (
            <button 
                onClick={props.onClick} 
                key={button.id}
                name={button.name}
            >{button.name}</button>
        )
    });


    return (
        <div>
            <h2 className="category-title">Categories</h2>
            <div className="category-buttons-list">
                {buttonCategories}
            </div>
        </div>
    )
}

export default Buttons;