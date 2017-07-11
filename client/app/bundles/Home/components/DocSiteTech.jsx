import React from 'react';
import './DocSiteTech.scss';

const DocSiteTech = () => (
  <div className="doc-site-tech">
    <div className="card">
      <img width={'100%'} src="https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png" alt="CSS Modules" />
      <div className="container">
        <h4>CSS Modules</h4>
        <p>Terra uses CSS modules ensuring all class names are scoped locally by default.</p>
      </div>
    </div>
    <div className="card">
      <img width={'100%'} src="https://facebook.github.io/react/img/logo.svg" alt="ReactJS" />
      <div className="container">
        <h4>React</h4>
        <p>All Terra components are created using React making composition easy for consuming applications.</p>
      </div>
    </div>
    <div className="card">
      <img width={'100%'} src="https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" alt="Webpack" />
      <div className="container">
        <h4>Webpack</h4>
        <p>Terra uses webpack to bundle both css and js. Import a component in js and it is automatically styled.</p>
      </div>
    </div>
  </div>
  );

export default DocSiteTech;
