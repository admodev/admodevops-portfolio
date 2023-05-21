import * as React from "react";

// styles
import './styles/home.css';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <main>
          <div className="panelsOuterContainer">
            <div className="panelsInnerContainer">
              <div className="panel">
                <h1>Who am i?</h1>
                <p>I am an engineer from Buenos Aires, Argentina. I like to build amazing projects, I enjoy working on large size projects as well as little ones too, i can make your dream come true if you let me do so,
                with the help of my knowledge and experience i can make your project come to life.</p>
              </div>
              <div className="panel">
                <h1>Who am i?</h1>
                <p>I am an engineer from Buenos Aires, Argentina. I like to build amazing projects, I enjoy working on large size projects as well as little ones too, i can make your dream come true if you let me do so,
                with the help of my knowledge and experience i can make your project come to life.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
