function CardGenerator({ Data, quote }) {
    return (
      <div className="App-card-section">
        <div className="App-card">
          <img className="App-avatar" src={Data.imageURL} alt="avatar" />
          <div className="App-text">
            <h2>{Data.name}</h2>
            <p className="App-quote">“{quote}”</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardGenerator;
  