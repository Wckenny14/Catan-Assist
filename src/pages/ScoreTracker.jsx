import React from 'react';
import './ScoreTracker.css';
import NavBar from '../components/NavBar/NavBar';
import { FaRegWindowClose } from 'react-icons/fa'
import About from '../components/about/About';

class ScoreTracker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: '', settlements: 0, longestRoad: 0, army: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }
            ],
            longestRoad: false,
            army: false,
        };
    };

    // add player name
    handleNameChange = (event, index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].name = event.target.value;
        this.setState({ players: newPlayers });
    };

    // function to increase/decrease settlement points
    handleSettlementChange = (index, amount) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].settlements += amount;
        newPlayers[index].totalVictoryPoints += amount;
        this.setState({ players: newPlayers });
    };

    // function to increase/decrease city points 
    handleCityChange = (index, amountCity, amountPoints) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].cities += amountCity;
        newPlayers[index].totalVictoryPoints += amountPoints;
        this.setState({ players: newPlayers });
    };

    // function to add two points to player that has longest road
    handleLongestRoadChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].longestRoad = !newPlayers[index].longestRoad;
        if (newPlayers[index].longestRoad) {
            newPlayers[index].totalVictoryPoints += 2;
        } else {
            newPlayers[index].totalVictoryPoints -= 2;
        }
        this.setState({ players: newPlayers });
    };

    handleLargestArmyChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].army = !newPlayers[index].army;
        if (newPlayers[index].army) {
            newPlayers[index].totalVictoryPoints += 2;
        } else {
            newPlayers[index].totalVictoryPoints -= 2;
        }
        this.setState({ players: newPlayers });
    };

    // functions to add players
    handleAddPlayer = () => {
        const newPlayers = [...this.state.players];
        if (newPlayers.length === 6) {
            return
        } else {
            newPlayers.push({ name: '', army: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 });
            this.setState({ players: newPlayers });
        } 
    };

    // Remove a player
    handleRemovePlayer = (index) => {
        const newPlayers = [...this.state.players];
        console.log(newPlayers)
        if (newPlayers.length <= 2) {
            return
        } else {
            newPlayers.splice(index, 1);
            this.setState({ players: newPlayers });
        };
    };

    // function to reset score
    handleReset = () => {
        const newPlayers = this.state.players.map(player => ({ name: player.name, army: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }));
        this.setState({ players: newPlayers });
    };

    render() {
        const { players } = this.state;
        const Closebox = <FaRegWindowClose className='closeTag' size='30px' color='var(--catanRed-color)' />

        return (
            <div className="score-tracker">
            <NavBar />
            <div className="container">
                <form>
                <div className='all-players'>
                    {players.map((player, index) => (
                        <div  className='player' key={index}>
                        <button type='button' className='removePlayer' onClick={() => this.handleRemovePlayer(index)}>{Closebox}</button>
                            <input
                                className='playerName'
                                type="text"
                                placeholder={`Player ${index + 1}`}
                                value={player.name}
                                onChange={(event) => this.handleNameChange(event, index)}
                            />
                            <div>
                            <div>
                                <div className='titles-score'>
                                    <h4>Settlements | </h4>                                   
                                    <div className='count'>
                                        {player.settlements}
                                    </div>
                                </div>
                                
                                <div className='scoreBtn'>
                                    <button
                                        
                                        className='score minus'
                                        type="button"
                                        onClick={() => { player.settlements > 0 && this.handleSettlementChange(index, player.settlements > 0 ? -1 : 0)}}
                                    >
                                        -
                                    </button>
                                    <button
                                        className='score plus'
                                        type="button"
                                        onClick={() => this.handleSettlementChange(index, 1)}
                                        >
                                        +
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className='titles-score'>
                                    <h4>Cities | </h4>                                   
                                    <div className='count'>
                                        {player.cities}
                                    </div>
                                </div>
                                <div className='scoreBtn'>
                                    <button
                                        className='score minus'
                                        type="button"
                                        onClick={() => { player.cities > 0 && this.handleCityChange(index, -1, player.cities > 0 ? -2 : 0)}}
                                        >
                                        -
                                    </button>
                                    <button
                                        className='score plus'
                                        type="button"
                                        onClick={() => this.handleCityChange(index, 1, 2)}
                                        >
                                        +
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <span className='roadArmy'>
                                <label>
                                    Longest road
                                    <input
                                        type="checkbox"
                                        checked={player.longestRoad}
                                        onChange={() => { this.handleLongestRoadChange(index) }}
                                        />
                                </label>
                                <div>
                                    <label>
                                        Largest Army
                                        <input
                                            type="checkbox"
                                            checked={player.army}
                                            onChange={() => {this.handleLargestArmyChange(index)}}
                                            />
                                    </label>
                                </div>
                            </span>
                            </div>
                            <h3 className='totalVP'>Victory Points</h3>
                            <div className='Totalscore'>
                                {player.totalVictoryPoints}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className='addRemoveReset'>
                        <button 
                            className='stnBtn' 
                            type="button" 
                            onClick={this.handleAddPlayer}
                            >
                            Add Player
                        </button>
                        <button 
                            className='stnBtn' 
                            type="button" 
                            onClick={this.handleReset}
                            >
                            Reset Scores
                        </button>
                    </div>
                </form>
                </div>
                <About />
            </div>
        );
    }
}

export default ScoreTracker;