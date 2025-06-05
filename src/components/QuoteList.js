import React, { useEffect } from 'react';

function RandomQuote({ setQuote }) {
  useEffect(() => {
    const quotes = [
        "You are more than what you think you are.",
        "You’ve already overcome so much — you can handle this too.",
        "You are allowed to be both a masterpiece and a work in progress.",
        "You don’t need permission to believe in yourself.",
        "You carry strength you haven't even discovered yet.",
        "You are not defined by your doubts — you are defined by your actions.",
        "You’re not behind; you’re just building something worth being proud of.",
        "You’re capable of far more than what you give yourself credit for.",
        "You have what it takes, even on the days you don’t feel it.",
        "You were never meant to fit in — you’re meant to stand out.",
        "You are becoming exactly who you’re meant to be.",
        "You don't have to be perfect to be powerful.",
        "You’ve done brave things before. You can do this too.",
        "You don’t just have potential — you have purpose.",
        "You were made for more than playing small."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [setQuote]);

  return null; 
}

export default RandomQuote;
