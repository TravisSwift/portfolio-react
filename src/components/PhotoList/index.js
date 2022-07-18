 

import React, { useState } from 'react';
// import Modal from '../Modal';

 

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Project Voyager',
      category: 'gallery',
      description: 'Space Enthuisast website using HTML, CSS, Javascript, and Bootstrap',
      link: "https://travisswift.github.io/Project-1-Team-Voyager/"
    
    },

    {
      name: 'AD&D Charcter Generator',
      category: 'gallery',
      description: 'A character generator for Advanced Dungeons and Dragons Fifth Edition',
      link: "https://secure-temple-11568.herokuapp.com/"
    },


    {
      name: 'Note Taker App',
      category: 'gallery',
      description: 'A simple note taking app',
      link: "https://salty-shelf-71006.herokuapp.com/notes" 
      
    },
    {

    name: 'Super Awesome Video Game Ecommerce Store',
    category: 'gallery',
    description: 'A MERN Fullstack Ecommerce Store',
    link: "https://safe-badlands-22208.herokuapp.com/"
    },

    // {
      // name: 'Portfolio made with Tailwind CSS',
      // category: 'gallery',
      // description: 'A portfiolio website using Tailwind CSS',
      // link: "https://travisswift.github.io/tailwind-portfolio/index.html" 
      
    // },

    
    
  ]);


  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <a href={image.link}> 
          <img
            src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            
            key={image.name}
          />

          {/* <p>{image.description}</p> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;