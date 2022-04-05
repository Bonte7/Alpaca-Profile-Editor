import React from 'react';

function ButtonList(props) {

    let test = props.buttons.find(button => {
        return button.name === props.featureCategory;
    })

    

    return (
        <div>
            {test ? <h2>{props.featureCategory}</h2> : null}
            <div className="features">
            {test ? test.items.map(item => {
                return (
                    <button 
                        onClick={props.onClick} 
                        name={props.featureCategory.toLowerCase()}
                        value={item}
                        key={item}
                    >{item}</button>
                )
            }) : null}
            </div>
        </div>
    )
}

export default ButtonList;