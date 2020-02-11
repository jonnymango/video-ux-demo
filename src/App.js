import React from 'react';


import './static/sass/style.scss';


import Header from './components/Header';
import Row from './components/Row';



// some fake movie data
let movieData = [
  {
    title: "Stranger Things",
    image: "../images/stranger_things_rail.png",
    heroImage: "../images/Hero.png",
    logo: "../images/st_Logo.png",
    content: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
  },
  {
    title: "Dark",
    image: "../images/dark_rail.png",
    heroImage: "../images/dark_rail.png",
    logo: "../images/st_Logo.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
  },
  {
    title: "Silicon Valler",
    image: "../images/silicon_valley_rail.png",
    heroImage: "../images/silicon_valley_rail.png",
    logo: "../images/st_Logo.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
  },
  {
    title: "Brooklyn 99",
    image: "../images/b99_rail.png",
    heroImage: "../images/b99_rail.png",
    logo: "../images/st_Logo.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
  },
  {
    title: "Brooklyn 99",
    image: "../images/b99_rail.png",
    heroImage: "../images/dark_rail.png",
    logo: "../images/st_Logo.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
  }
]

function App() {
  return (
    <div className="App">
      <Header vars={movieData[0]} />
      <div className="container">
        
        <Row rowTitle="More like this" vars={movieData} />
      </div>
    </div>
  );
}

export default App;
