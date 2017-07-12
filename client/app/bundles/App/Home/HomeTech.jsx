import React from 'react';
import imgWebpack from './assets/webpack.svg';
import imgReact from './assets/react.svg';
import imgCssModules from './assets/css-modules.png';
import './HomeTech.scss';

const HomeTech = () => (
  <div className="home-tech">
    <div className="home-card">
      <img width={'100%'} src={imgCssModules} alt="CSS Modules" />
      <div className="home-container">
        <h4>CSS Modules</h4>
        <p>Terra uses CSS modules ensuring all class names are scoped locally by default.</p>
      </div>
    </div>
    <div className="home-card">
      <img width={'100%'} src={imgReact} alt="ReactJS" />
      <div className="home-container">
        <h4>React</h4>
        <p>All Terra components are created using React making composition easy for consuming applications.</p>
      </div>
    </div>
    <div className="home-card">
      <img width={'100%'} src={imgWebpack} alt="Webpack" />
      <div className="home-container">
        <h4>Webpack</h4>
        <p>Terra uses webpack to bundle both css and js. Import a component in js and it is automatically styled.</p>
      </div>
    </div>
  </div>
  );

export default HomeTech;
