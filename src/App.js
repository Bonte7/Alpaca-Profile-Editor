import AlpacaProfile from './components/AlpacaProfile';
import alpacaConfig from './AlpacaConfig';
import React, {useState} from 'react';
import EarButtons from './components/EarButtons';

function App() {

  //const alpacaFeatures = alpacaConfig.map()

  const [alpacaFeatures, setAlpacaFeatures] = useState(
    {
      ears: alpacaConfig[1].items[0].filename,
      eyes: alpacaConfig[2].items[0].filename,
      hair: alpacaConfig[3].items[0].filename,
      leg: alpacaConfig[4].items[0].filename,
      mouth: alpacaConfig[5].items[0].filename,
      neck: alpacaConfig[6].items[0].filename,
      accessories: alpacaConfig[7].items[0].filename,
      nose: alpacaConfig[8].items[0].filename
    }
  )

  function randomize() {

    let randomEar = Math.floor(Math.random() * alpacaConfig[1].items.length)
    let randomEyes = Math.floor(Math.random() * alpacaConfig[2].items.length)
    let randomHair = Math.floor(Math.random() * alpacaConfig[3].items.length)
    let randomLeg = Math.floor(Math.random() * alpacaConfig[4].items.length)
    let randomMouth = Math.floor(Math.random() * alpacaConfig[5].items.length)
    let randomAccessory = Math.floor(Math.random() * alpacaConfig[7].items.length)

    setAlpacaFeatures(prevAlpacaFeatures => {
      return {
        ...prevAlpacaFeatures,
        ears: alpacaConfig[1].items[randomEar].filename,
        eyes: alpacaConfig[2].items[randomEyes].filename,
        hair: alpacaConfig[3].items[randomHair].filename,
        leg: alpacaConfig[4].items[randomLeg].filename,
        mouth: alpacaConfig[5].items[randomMouth].filename,
        accessories: alpacaConfig[7].items[randomAccessory].filename
      }
    })
  }

  function handleButtonClick(event) {

    setAlpacaFeatures(prevAlpacaFeatures => {
      return {
        ...prevAlpacaFeatures,
        [event.target.name]: event.target.value
      }
    })
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
        nose={alpacaFeatures.nose}
      />
      <button className="randomize" onClick={randomize}>Randomzie</button>
      </div>

      <div className="buttons">
        <EarButtons
          buttons={alpacaConfig[1]}
          clicked={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default App;
