// import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import CountdownRenderer from './components/CountdownRenderer/index.component';
import './App.scss';

function App() {
  return (
    <div className="countdown-app">

      <div className="header">
        <a href='/' className="logo">
          <img src="/assets/img/logo.svg" alt="logo" />
          <h2>FINANCE</h2>
        </a>

        <nav className="header-links">
          <ul>
            <li>
              <a href="##">Home</a>
            </li>
            <li>
              <a href="##">Features</a>
            </li>
            <li>
              <a href="##">FAQ</a>
            </li>
            <li>
              <a href="##">Team</a>
            </li>
            <li>
              <a href="##">Github</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <Countdown 
        date={'2021-05-20T00:00:00'}
        intervalDelay={0}
        precision={3}
        renderer={CountdownRenderer}
      />

      <div className="about-swirge-launch">
        <div className="about-swirge-launch-text">
          <h4>Swirge Finance Launch</h4>
          <p>
            Swirge Finance is a Swirge subsidiary focused on building decentralized 
            financial products on the blockchain like a Multi-chain yield optimizer and 
            staking platform operating on Binance Smart Chain and 
            ( Avalanche and Huobi Eco Chain ).
          </p>
          <button className='button'>Learn More</button>
        </div>
        <div className="about-swirge-launch-image">
          <img src="/assets/img/about-swirge.svg" alt="swirge-graph" />
        </div>
      </div>
      
      <div className="socials">
        <a href="##">
          <img src="/assets/img/facebook.png" alt="facebook"/>
        </a>
        <a href="##">
          <img src="/assets/img/twitter.png" alt="twitter"/>
        </a>
        <a href="##">
          <img src="/assets/img/telegram.png" alt="telegram"/>
        </a>
      </div>
    </div>
  );
}

export default App;
