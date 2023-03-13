import React from 'react';
import './CustomScore.css';
import NavBar from '../components/NavBar/NavBar';
import { GiFlyingFlag } from 'react-icons/gi'

class CustomScore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: '', chits: 0, metropolis: 0, merchant: 0, settlements: 0, longestRoad: 0, dragons: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }
            ],
            dragons: false,
            longestRoad: false,
            merchant: false,
            metropolis: false,
            chits: false
        };
    }

    // add player name
    handleNameChange = (event, index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].name = event.target.value;
        this.setState({ players: newPlayers });
    }

    // function to increase/decrease victory points
    handleScoreChange = (index, amount) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].victoryPoints += amount;
        newPlayers[index].totalVictoryPoints += amount;
        this.setState({ players: newPlayers });
    }

    // function to increase/decrease settlement points and stop the points going below 0 - speak to joel about getting this working
    handleSettlementChange = (index, amount) => {
        const newPlayers = [...this.state.players];
            newPlayers[index].settlements += amount;
            newPlayers[index].totalVictoryPoints += amount;
            this.setState({ players: newPlayers });
    }

    // function to increase/decrease city points and stop the points going below 0 - speak to joel about getting this working
    handleCityChange = (index, amountCity, amountPoints) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].cities += amountCity;
        newPlayers[index].totalVictoryPoints += amountPoints;
        this.setState({ players: newPlayers });
    }

    // function to increase/decrease dragon points
    handleDragonChange = (index, amount) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].dragons += amount;
        newPlayers[index].totalVictoryPoints += amount;
        this.setState({ players: newPlayers });
    }
    // function to increase/decrease chits points
    handleChitChange = (index, amount) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].chits += amount;
        newPlayers[index].totalVictoryPoints += amount;
        this.setState({ players: newPlayers });
    }

    // function to add two points to player that has longest road - speak to joel to get this working
    handleLongestRoadChange = (index) => {
        //this.setState({ longestRoad: event.target.checked });
        const newPlayers = [...this.state.players];
        newPlayers[index].longestRoad = !newPlayers[index].longestRoad;
        if (newPlayers[index].longestRoad) {
            newPlayers[index].totalVictoryPoints += 2;
        } else {
            newPlayers[index].totalVictoryPoints -= 2;
        }
        this.setState({ players: newPlayers });
    }


    // functions to add players
    handleAddPlayer = () => {
        const newPlayers = [...this.state.players];
        if (newPlayers.length === 6) {
            return
        } else {
            newPlayers.push({ name: '', chits: 0, metropolis: 0, merchant: 0, dragons: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 });
            this.setState({ players: newPlayers });
        }
    }
    // function to remove players. Remove single player and cap players minimum of 2 - speak to joel on how to get this to work
    handleRemovePlayer = (index) => {
        const newPlayers = [...this.state.players];
        if (newPlayers.length <= 2) {
            return
        } else {
            newPlayers.pop(index);
            this.setState({ players: newPlayers });
        }
    }

    // function to reset score
    handleReset = () => {
        const newPlayers = this.state.players.map(player => ({ name: player.name, chits: 0, metropolis: 0, merchant: 0, dragons: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }));
        this.setState({ players: newPlayers });
    }

    // checkbox functions for additional inclusions:
    handleCheckboxDragon = (event) => {
        this.setState({ dragons: event.target.checked });
    }
    handleCheckboxChit = (event) => {
        this.setState({ chits: event.target.checked });
    }
    handleCheckboxMetropolis = (event) => {
        this.setState({ metropolis: event.target.checked });
    }


    // checkbox functions for standard inclusions with fixed values
    handleLongestRoad = (event) => {
        this.setState({ longestRoad: event.target.checked });
    }
    handleMerchant = (event) => {
        this.setState({ merchant: event.target.checked });
    }

    render() {
        const { players, dragons, longestRoad, merchant, chits, metropolis } = this.state;
        const ScienceFlag = <GiFlyingFlag className='Flag' 
                        size='25px' color='green'
                        />
        const PoliticsFlag = <GiFlyingFlag className='Flag' 
        size='25px' color='blue'
        />
        const TradeFlag = <GiFlyingFlag className='Flag' 
        size='25px' color='yellow'
        />

        return (
            <div className="score-tracker">
                <NavBar />
                <label className='roadArmy'>
                    <input
                        type="checkbox"
                        checked={dragons}
                        onChange={this.handleCheckboxDragon}
                    />
                    Include Dragons
                </label>
                <label className='roadArmy'>
                    <input
                        type="checkbox"
                        checked={chits}
                        onChange={this.handleCheckboxChit}
                    />
                    Include Chits
                </label>
                <label className='roadArmy'>
                    <input
                        type="checkbox"
                        checked={metropolis}
                        onChange={this.handleCheckboxMetropolis}
                    />
                    Include Metroplis
                </label>
                <form>
                    <div className='all-players'>

                        {players.map((player, index) => (
                            <div className='player' key={index}><button className='stnBtn' onClick={() => this.handleRemovePlayer(1)}>Remove Player</button>
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
                                            <div className='count'>{player.settlements}</div>
                                        </div>
                                        <div className='scoreBtn'>
                                            <button
                                                className='score minus'
                                                type="button"
                                                onClick={() => this.handleSettlementChange(index, player.settlements > 0 ? -1 : 0)}
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
                                            <div className='count'>{player.cities}</div>
                                        </div>
                                        <div className='scoreBtn'>
                                            <button
                                                className='score minus'
                                                type="button"
                                                onClick={() => this.handleCityChange(index, -1, -2)}
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
                                    <div>
                                        <div className='titles-score'>
                                            <h4>Victory Points | </h4>
                                            <div className='count'>{player.victoryPoints}</div>
                                        </div>
                                        <div className='scoreBtn'>
                                            <button
                                                className='score minus'
                                                type="button"
                                                onClick={() => this.handleScoreChange(index, -1)}
                                            >
                                                -
                                            </button>
                                            <button
                                                className='score plus'
                                                type="button"
                                                onClick={() => this.handleScoreChange(index, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        {dragons && (
                                            <div className='titles-score'>
                                                <h4>Dragons | </h4>
                                                <div className='count'>{player.dragons}</div>
                                            </div>
                                        )}
                                        {dragons && (
                                            <button
                                                className='score minus'
                                                type="button"
                                                onClick={() => this.handleDragonChange(index, -1)}
                                            >
                                                -
                                            </button>
                                        )}
                                        {dragons && (
                                            <button
                                                className='score plus'
                                                type="button"
                                                onClick={() => this.handleDragonChange(index, 1)}
                                            >
                                                +
                                            </button>
                                        )}
                                        {dragons && (<hr />)}
                                        <div>
                                            {chits && (
                                                <div className='titles-score'>
                                                    <h4>Chits | </h4>
                                                    <div className='count'>{player.chits}</div>
                                                </div>
                                            )}
                                            {chits && (
                                                <button
                                                    className='score minus'
                                                    type="button"
                                                    onClick={() => this.handleChitChange(index, -1)}
                                                >
                                                    -
                                                </button>
                                            )}
                                            {chits && (
                                                <button
                                                    className='score plus'
                                                    type="button"
                                                    onClick={() => this.handleChitChange(index, 1)}
                                                >
                                                    +
                                                </button>
                                            )}
                                            {chits && (<hr />)}
                                        </div>
                                        {metropolis && (<div className='titles-score'>
                                            <h4>Metropolis</h4>
                                        </div>
                                        )}
                                        {metropolis && (<span className='roadArmy'>
                                            <label>
                                                {TradeFlag}
                                                <input
                                                    type="checkbox"
                                                    checked={player.longestRoad}
                                                    //onClick={this.handleLongestRoadChange }
                                                    onChange={this.handleLongestRoad}
                                                />
                                            </label>
                                            <div>
                                                <label>
                                                    {PoliticsFlag}
                                                    <input
                                                        type="checkbox"
                                                        checked={merchant}
                                                    // onChange={this.handleCheckboxArmy}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    {ScienceFlag}
                                                    <input
                                                        type="checkbox"
                                                        checked={merchant}
                                                    // onChange={this.handleCheckboxArmy}
                                                    />
                                                </label>
                                            </div>
                                        </span>
                                        )}
                                        {metropolis && (<hr />)}
                                        <span className='roadArmy'>
                                            <label>
                                                Longest road
                                                <input
                                                    type="checkbox"
                                                    checked={player.longestRoad}
                                                    //onClick={this.handleLongestRoadChange }
                                                    onChange= { () => {this.handleLongestRoadChange(index)}}
                                                />
                                            </label>
                                            <div>
                                                <label>
                                                    Merchant
                                                    <input
                                                        type="checkbox"
                                                        checked={merchant}
                                                    // onChange={this.handleCheckboxArmy}
                                                    />
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <h3>Victory Points</h3>
                                <div className='Totalscore'>{player.totalVictoryPoints}</div>
                            </div>
                        ))}
                    </div>
                    <div className='addRemoveReset'>
                        <button className='stnBtn' type="button" onClick={this.handleAddPlayer}>Add Player</button>
                        <button className='stnBtn' type="button" onClick={this.handleReset}>Reset Scores</button>
                        <button className='stnBtn' onClick={() => this.handleRemovePlayer(1)}>Remove Player</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomScore;