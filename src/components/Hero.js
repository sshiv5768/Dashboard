import React from "react";
import "../style/Hero.css";
import heroImg from '../images/hero-bg-img.png'

const Content = () => {
  return (
    <section className="hero-container">
        <div className="hero" style={{ backgroundImage: `url(${heroImg})`}}>
      <h2> Socialize with the Community</h2>{" "}
      <p> Discover Awesome Community Events Happing near You! </p>{" "}
      {/* Add any additional content or components for your hero section */}{" "}
    </div>
    </section>
    
  );
};

export default Content;

// import React from "react";
// import '../style/Header.css'

// const Content = ()=>{
//     return (
//         <div>

//         </div>
//     )

// }

// export default Content;
