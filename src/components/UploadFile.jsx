import React, { useState, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

function UploadForm({setData}) {
  const [name, setName] = useState('');
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [valid, setValid] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const imgRef = useRef();
  const [submitState, updateSubmit] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = process.env.PUBLIC_URL + '/models'; // safer path
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
      } catch (err) {
        alert('Error loading models:', err);
      }
    };
    loadModels();
  }, []);

  const handleFileChange = async (e) => {
    if (!isModelLoaded) {
      alert('Please wait, model is still loading');
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageURL(url);
    setValid(null); // reset result
  };

  const handleImageLoad = async () => {
    if (!isModelLoaded || !imgRef.current) return;
    const detections = await faceapi.detectAllFaces(imgRef.current);
    setValid(detections.length > 0);
  };

  const getCard = (a) =>{
    a.preventDefault();
    updateSubmit(true);
    if(valid){
    setData({name,imageURL});
    }
  }

  

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label>Upload your image</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {imageURL && (
        <img 
          className = "new"
          ref={imgRef}
          src={imageURL}
          alt="Uploaded"
          onLoad={handleImageLoad}
          crossOrigin="anonymous"
          style={{ display: 'none' }}
        />
      )}

      <button type = "submit" onClick = {getCard}>Boost confidence</button>

      {submitState && valid !== null && (
        <p>{valid ? '': <h2>No face detected</h2>}</p>
      )}
    </form>
  );
}

export default UploadForm;
