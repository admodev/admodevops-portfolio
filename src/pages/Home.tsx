import * as React from "react";

// styles
import './styles/home.css';

// images
import uno from '../assets/images/uno.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <main>
          <div className="panelsOuterContainer">
            <div className="panelsInnerContainer">
              {/* Panel One Start */}
              <div className="panel">
                <h1>Who am i?</h1>
                <p>I am an engineer from Buenos Aires, Argentina. I like to build amazing projects, I enjoy working on large size projects as well as little ones too, i can make your dream come true if you let me do so,
                with the help of my knowledge and experience i can make your project come to life.</p>
              </div>
              <div className="panel">
                <img src={uno} className="panelImage" />
              </div>
            </div>
            {/* Panel One End */}
            {/* Panel Two Start */}
            <div className="panelsInnerContainer">
              {/* Panel One Start */}
              <div className="panel">
                <img src={uno} className="panelImage" />
              </div>
              <div className="panel">
                <h1>Who am i?</h1>
                <p>I am an engineer from Buenos Aires, Argentina. I like to build amazing projects, I enjoy working on large size projects as well as little ones too, i can make your dream come true if you let me do so,
                with the help of my knowledge and experience i can make your project come to life.</p>
              </div>
            </div>
            {/* Panel Two End */}
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
