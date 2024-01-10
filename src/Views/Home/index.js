import React from 'react';
import Card from "../../Components/Card/index"
import profileimg from "./profile.jpeg"



function HomePage({ posts }) {



  return (

    
    <div className="home-page">
      <Card allCards={posts} 
      changeBTnText="like" 
      changeBTnText2="comment"
       changeBTnText3="share" 
       name="Syed Mehar Ali Shah" 
       date="1 Jan 2024"
       img={profileimg}
      />

    </div>

  

  );
}

export default HomePage;
