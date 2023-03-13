import NavBar from "../components/NavBar/NavBar";
import About from "../components/about/About";
import { NavLink } from "react-router-dom";
import Score1 from '../img/score1.png';
import Score2 from '../img/score2.png';
import catanMap from '../img/catanMap.png'
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="ImageLinks">
                <div className="hpBoxes">
                    <h2>Board Generator</h2>
                    <NavLink to="/mapGenerator">
                        <img src={catanMap} alt="logo" className="HomeImages" />
                    </NavLink>
                </div>
                <div className="hpBoxes">
                    <h2>Score Tracker</h2>
                    <NavLink to="/standardScore">
                        <img src={Score1} alt="Victory Point" className="HomeImages" />
                    </NavLink>
                </div>
                <div className="hpBoxes">
                    <h2>Custom Score Tracker</h2>
                    <NavLink to="/customScore">
                        <img src={Score2} alt="2 Victory Points" className="HomeImages" />
                    </NavLink>
                </div>
            </div>
            <About className=""/>
        </div>
    );
}

export default Home;