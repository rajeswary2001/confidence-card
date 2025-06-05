import './App.css';
import UploadForm from "./components/UploadFile";
import CardGenerator from './components/ConfidenceCard';
import RandomQuote from './components/QuoteList';
import React,{useState} from "react";

function App() {

  const [Data, setData] = useState({name:'',imageURL:null});
  const [quote,setQuote] = useState('');
  


  return (
    <div className="App App-container">
    <div className="App-section App-form-section">
      <h2>Input Form Section</h2>
      <UploadForm setData={setData} />
      <RandomQuote setQuote={setQuote} />
    </div>

    {Data.name && Data.imageURL && (
      <div className="App-section">
        <h2>Confidence-boosting Card Section</h2>
        <CardGenerator Data={Data} quote={quote} />
      </div>
    )}
  </div>
);

    
}

export default App;
