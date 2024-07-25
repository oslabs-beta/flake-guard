import React from 'react';
import '../../../styles/styles.css';
// import NavBarHeading from '../nav-bar';
import logo from '../../assets/logo.png';
import Header from '../nav-bar';
import Advantages from './Advantages';
import download from '../../assets/download.png';
import Footer from '../footer';
import {Link} from 'react-router-dom';
import '../../../styles/landingPage.css';

const Landing = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="landing-page-container">
        <div className="left-landing">
          <h1>Save Thousands of Debugging Hours</h1>
          <div className="left-landing-text">
            <p>
              Flake Guard is a free, open-source, software that allows developers to automatically run Jest testing files to detect, report, and manage flaky tests in development.
            </p>
            <p>
              By identifying and handling these inconsistent tests, Flake Guard
              helps maintain test reliability.
            </p>
            <button className="npm-button">
              <Link to="https://www.npmjs.com/package/flake-guard">
                <span className="npm-link">Install npm package </span>
                <img
                  src={download}
                  alt="download-icon"
                  style={{width: '18px', marginLeft: '10px'}}
                />
              </Link>
            </button>
            <p className="p-tag-with-link" style={{fontSize: '16px'}}>
              To learn more about FlakeGuard, click{' '}
              <a
                href="https://medium.com/"
                style={{textDecoration: 'underline'}}
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        {/* <div className="right-landing">PLACEHOLDER (graph)</div> */}
      </div>
      {/* <div style={{textAlign: 'center', backgroundColor: 'yellow'}}>
        PLACEHOLDER (extra info)
      </div> */}
      <Advantages />
      <Footer />
    </>
  );
};

export default Landing;
