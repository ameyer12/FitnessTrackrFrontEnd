import React from 'react';
import "./home.css";

const Home = () => {
    return (
      <div>
        <div className="homepage">
          <h1>MAKE EVERY WORKOUT COUNT</h1>
          <p>Take the first step toward leading a healthier life by planning your health and fitness success</p>
        </div>
        <div id="carousel-images" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.postimg.cc/rmC19sLZ/pexels-victor-freitas-841130.jpg" class="d-block w-100" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img src="https://i.postimg.cc/W47zWkhZ/pexels-li-sun-2294361.jpg" class="d-block w-100" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img src="https://i.postimg.cc/rmC19sLZ/pexels-victor-freitas-841130.jpg" class="d-block w-100" alt="Third slide"/>
            </div>
          </div>
        </div>
        <div></div>
        <div className='homepage-spacing-div'></div>
      </div>
    );
  }

export default Home

