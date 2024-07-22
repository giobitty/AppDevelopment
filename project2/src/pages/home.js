import React from 'react';
import '../styles/styles.css';
import visualDam from '../styles/img/dam.webp'
const Home = () => {
  return (
    <>
      <div>
        <h1 className='headtitle'>BEAVERS BUSINESS LLC</h1>
      </div>
      <div className='imgPdiv'>
      <img src={visualDam} alt="beavers biulding a dam" />
      <p className='homeparag'>
      With pride, we have been serving the community since 2004. As a family-owned business, we are dedicated to providing top-notch plumbing services with a personal touch. At Beavers Plumbing, we value quality, reliability, and affordability, ensuring that each job is done right the first time. Our commitment to excellence reflects our deep-rooted values and passion for what we do. Trust us to bring the expertise and care of a family business to every project, no matter the size.<hr />
      <span><i>"Why did the Beavers start a plumbing business?
      Because they were experts at making everything flow smoothly!"</i></span>
      </p>
      </div>
      
    </>
  );
};

export default Home;
