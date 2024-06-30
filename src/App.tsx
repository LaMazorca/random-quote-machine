import { useState } from 'react'
import quotes from './assets/quotes.json'
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = (): string => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

function App() {

  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  return (
    <div className='background' style={{backgroundColor: randomColor}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor}}>
          <h2 id="text"><FaQuoteLeft size="30" style={{marginRight: "10px"}}/> {quote.quote} <FaQuoteRight size="30" style={{marginLeft: "10px"}}/></h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} target="_blank" rel="noreferrer" style={{backgroundColor: randomColor, marginRight: '10px' }}>
            <FaTwitter color='#fff'/>
          </a>
          <button id="new-quote" onClick={() => {
            setQuote(getRandomQuote());
            setRandomColor(getRandomColor());
          }} style={{backgroundColor: randomColor, color: '#fff'}}>New Quote</button>
        </div>
      </div>
      <div id='logo'>
        <p>by La Mazorca</p>
        <a href="https://github.com/LaMazorca" target='_blank'><img src="https://i.postimg.cc/WhDJYfXW/Logo-2-mazorca.png" alt="Logo de La Mazorca"/></a>
      </div>
    </div>
  )
}

export default App
