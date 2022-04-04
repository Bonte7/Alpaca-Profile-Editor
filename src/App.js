import AlpacaProfile from './components/AlpacaProfile';
import alpacaConfig from './AlpacaConfig';
import React, {useState} from 'react';
import Buttons from './components/Buttons';
import ButtonList from './components/ButtonList';

function App() {

  //alpaca image state
  const [alpacaFeatures, setAlpacaFeatures] = useState(
    {
      ears: "default",
      eyes: "default",
      hair: "default",
      leg: "default",
      mouth: "default",
      neck: "default",
      accessories: "default"
    }
  )

  //alpaca feature buttons state
  const [featureButtons, setFeatureButtons] = useState("");


  /*this function gets a random number based on each categorie's item array length 
  then sets the state of the alpaca image randomly*/
  function randomize() {

    let randomEar = Math.floor(Math.random() * alpacaConfig[1].items.length)
    let randomEyes = Math.floor(Math.random() * alpacaConfig[2].items.length)
    let randomHair = Math.floor(Math.random() * alpacaConfig[0].items.length)
    let randomLeg = Math.floor(Math.random() * alpacaConfig[5].items.length)
    let randomMouth = Math.floor(Math.random() * alpacaConfig[3].items.length)
    let randomNeck = Math.floor(Math.random() * alpacaConfig[4].items.length)
    let randomAccessory = Math.floor(Math.random() * alpacaConfig[6].items.length)

    setAlpacaFeatures(prevAlpacaFeatures => {
      return {
        ...prevAlpacaFeatures,
        ears: alpacaConfig[1].items[randomEar],
        eyes: alpacaConfig[2].items[randomEyes],
        hair: alpacaConfig[0].items[randomHair],
        leg: alpacaConfig[5].items[randomLeg],
        mouth: alpacaConfig[3].items[randomMouth],
        neck: alpacaConfig[4].items[randomNeck],
        accessories: alpacaConfig[6].items[randomAccessory]
      }
    })
  }



  //global button click handler used for feature buttons.
  function handleButtonClick(event) {

    setAlpacaFeatures(prevAlpacaFeatures => {
      return {
        ...prevAlpacaFeatures,
        [event.target.name]: event.target.value
      }
    })
  }

  //handle category button clicks to conditionally render the feature buttons
  function categoryButtonClick(event) {
    setFeatureButtons(event.target.name);
  }


  return (
    <div className="container">
      <div>
      <AlpacaProfile 
        ears={alpacaFeatures.ears}
        eyes={alpacaFeatures.eyes}
        hair={alpacaFeatures.hair}
        leg={alpacaFeatures.leg}
        mouth={alpacaFeatures.mouth}
        neck={alpacaFeatures.neck}
        accessories={alpacaFeatures.accessories}
        nose={"/images/nose.png"}
      />
      <button className="randomize" onClick={randomize}>Randomzie</button>
      </div>

      <section>
      <div className="category-buttons">
        <Buttons
          buttons={alpacaConfig}
          onClick={categoryButtonClick}
        />
      </div>

      <div className="feature-buttons">
        <ButtonList
          buttons={alpacaConfig}
          featureCategory={featureButtons}
          onClick={handleButtonClick}
        />
      </div>
      </section>
    </div>
  );
}

export default App;
