import React, {useState } from 'react';
import './App.css';
import { SelectSign } from './components/SelectSign.jsx';
import { SelectTimeframe } from './components/SelectTimeframe';
import { Horoscope } from './components/Horoscope.jsx';

function App() {
  const [SelectedSign, setselectedSign]= useState([null]);
  const [
    SelectedTimeframe, 
    setSelectedTimeframe,
  ] =useState(null);

  const restart = () => {
    setselectedSign(null);
    setSelectedTimeframe(null);
  };

return (
    <div className="App">
      <h1>The Horoscope App</h1>
      {!SelectedSign && (
      <SelectSign onSignSelected={setselectedSign} />
      )}
      {SelectedSign && !SelectedTimeframe &&  (
      <SelectTimeframe 
      onTimeframeSelected={setSelectedTimeframe}
       />
      )}
      {SelectedSign && SelectedTimeframe && (
      <Horoscope
      sign={SelectedSign} 
      timeframe={SelectedTimeframe}
      />
      )}
      <button onClick={restart}>Restart</button>
      </div>
)
}     
export default App;
