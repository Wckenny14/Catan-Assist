import React from 'react';
import './CustomScore.css';
import NavBar from '../components/NavBar/NavBar';
import { GiFlyingFlag } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'
import About from '../components/about/About';

class CustomScore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: '', chits: 0, metropolis: 0, metropolisT: 0, metropolisS: 0, merchant: 0, settlements: 0, longestRoad: 0, dragons: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }
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

    // function to increase/decrease settlement points
    handleSettlementChange = (index, amount) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].settlements += amount;
        newPlayers[index].totalVictoryPoints += amount;
        this.setState({ players: newPlayers });
    }

    // function to increase/decrease city points 
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
    }

    // function to add 1 points to player that has the merchant
    handleMerchantChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].merchant = !newPlayers[index].merchant;
        if (newPlayers[index].merchant) {
            newPlayers[index].totalVictoryPoints += 1;
        } else {
            newPlayers[index].totalVictoryPoints -= 1;
        }
        this.setState({ players: newPlayers });
    }

    // Update player scores by 2 when player has metropolis
    handleMetropolisTradeChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].metropolisT = !newPlayers[index].metropolisT;
        if (newPlayers[index].metropolisT) {
            newPlayers[index].totalVictoryPoints += 2;
        } else {
            newPlayers[index].totalVictoryPoints -= 2;
        }
        this.setState({ players: newPlayers });
    }
    handleMetropolisScienceChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].metropolisS = !newPlayers[index].metropolisS;
        if (newPlayers[index].metropolisS) {
            newPlayers[index].totalVictoryPoints += 2;
        } else {
            newPlayers[index].totalVictoryPoints -= 2;
        }
        this.setState({ players: newPlayers });
    }
    handleMetropolisPoliticsChange = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].metropolis = !newPlayers[index].metropolis;
        if (newPlayers[index].metropolis) {
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
            newPlayers.push({ name: '', chits: 0, metropolis: 0, metropolisT: 0, metropolisS: 0, merchant: 0, dragons: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 });
            this.setState({ players: newPlayers });
        }
    }

    // Remove a player
    handleRemovePlayer = (index) => {
        const newPlayers = [...this.state.players];
        console.log(newPlayers)
        if (newPlayers.length <= 2) {
            return
        } else {
            newPlayers.splice(index, 1);
            this.setState({ players: newPlayers });
        }
    }

    // function to reset score
    handleReset = () => {
        const newPlayers = this.state.players.map(player => ({ name: player.name="", chits: 0, metropolis: 0, metropolisT: 0, metropolisS: 0, merchant: 0, dragons: 0, longestRoad: 0, settlements: 0, cities: 0, victoryPoints: 0, totalVictoryPoints: 0 }));
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
    handleCheckboxMerchant = (event) => {
        this.setState({ merchant: event.target.checked });
    }
    handleCheckboxCity = (event) => {
        this.setState({ city: event.target.checked });
    }
    handleCheckboxVP = (event) => {
        this.setState({ victoryPoints: event.target.checked });
    }
    handleCheckboxLongestRoad = (event) => {
        this.setState({ longestRoad: event.target.checked });
    }
    handleCheckboxSettlement = (event) => {
        this.setState({ settlement: event.target.checked });
    }

    // checkbox functions for standard inclusions with fixed values
    handleLongestRoad = (event) => {
        this.setState({ longestRoad: event.target.checked });
    }
    handleMerchant = (event) => {
        this.setState({ merchant: event.target.checked });
    }

    render() {
        const { players, dragons, longestRoad, merchant, chits, metropolisT, metropolis, metropolisS, city, settlement, victoryPoints } = this.state;
        const ScienceFlag = <GiFlyingFlag className='Flag' size='25px' color='green' />
        const PoliticsFlag = <GiFlyingFlag className='Flag' size='25px' color='blue' />
        const TradeFlag = <GiFlyingFlag className='Flag' size='25px' color='yellow' />
        const Closebox = <FaRegWindowClose className='closeTag' size='30px' color='var(--catanRed-color)' />

        return (
            <div className="score-tracker">
                <NavBar />
                <h2 className='selection-title'>Select Inclusions</h2>
                <div className='custom-selection'>
                    <label className='inclusions'>
                    Dragons
                        <input
                            type="checkbox"
                            checked={dragons}
                            onChange={this.handleCheckboxDragon}
                        />
                        
                    </label>
                    <label className='inclusions'>
                    Chits
                        <input
                            type="checkbox"
                            checked={chits}
                            onChange={this.handleCheckboxChit}
                        />
                    </label>
                    <label className='inclusions'>
                    Longest Trade Route
                        <input
                            type="checkbox"
                            checked={longestRoad}
                            onChange={this.handleCheckboxLongestRoad}
                        />
                        
                    </label>
                    <label className='inclusions'>
                        Merchant
                        <input
                            type="checkbox"
                            checked={merchant}
                            onChange={this.handleCheckboxMerchant}
                        />
                    </label>
                    <label className='inclusions'>
                        Metroplis
                        <input
                            type="checkbox"
                            checked={metropolis}
                            onChange={this.handleCheckboxMetropolis}
                        />
                    </label>
                    <label className='inclusions'>
                        Cities
                        <input
                            type="checkbox"
                            checked={city}
                            onChange={this.handleCheckboxCity}
                        />
                    </label>
                    <label className='inclusions'>
                        Settlements
                        <input
                            type="checkbox"
                            checked={settlement}
                            onChange={this.handleCheckboxSettlement}
                        />
                    </label>
                    <label className='inclusions'>
                        Victory Points
                        <input
                            type="checkbox"
                            checked={victoryPoints}
                            onChange={this.handleCheckboxVP}
                        />
                    </label>
                </div>
                <form>
                    <div className='all-players'>

                        {players.map((player, index) => (
                            <div className='player' key={index}>
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
                                        {settlement && (
                                            <div className='titles-score'>
                                                <h4>Settlements | </h4>
                                                <div className='count'>{player.settlements}</div>
                                            </div>
                                        )}
                                        <div className='scoreBtn'>
                                            {settlement && (
                                                <button
                                                    className='score minus'
                                                    type="button"
                                                    onClick={() => this.handleSettlementChange(index, player.settlements > 0 ? -1 : 0)}
                                                >
                                                    -
                                                </button>
                                            )}
                                            {settlement && (
                                                <button
                                                    className='score plus'
                                                    type="button"
                                                    onClick={() => this.handleSettlementChange(index, 1)}
                                                >
                                                    +
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {settlement && (<hr />)}
                                    <div>
                                        {city && (
                                            <div className='titles-score'>
                                                <h4>Cities | </h4>
                                                <div className='count'>{player.cities}</div>
                                            </div>
                                        )}
                                        <div className='scoreBtn'>
                                            {city && (
                                                <button
                                                    className='score minus'
                                                    type="button"
                                                    onClick={() => { player.cities > 0 && this.handleCityChange(index, -1, player.cities > 0 ? -2 : 0)}}
                                                >
                                                    -
                                                </button>
                                            )}
                                            {city && (
                                                <button
                                                    className='score plus'
                                                    type="button"
                                                    onClick={() => this.handleCityChange(index, 1, 2)}
                                                >
                                                    +
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {city && (<hr />)}
                                    <div>
                                        {victoryPoints && (
                                            <div className='titles-score'>
                                                <h4>Victory Points | </h4>
                                                <div className='count'>{player.victoryPoints}</div>
                                            </div>
                                        )}
                                        <div className='scoreBtn'>
                                            {victoryPoints && (<button
                                                className='score minus'
                                                type="button"
                                                onClick={() => {this.handleScoreChange(index, player.victoryPoints > 0 ? -1 : 0)}}
                                            >
                                                -
                                            </button>
                                            )}
                                            {victoryPoints && (<button
                                                className='score plus'
                                                type="button"
                                                onClick={() => this.handleScoreChange(index, 1)}
                                            >
                                                +
                                            </button>
                                            )}
                                        </div>
                                    </div>
                                    {victoryPoints && ( <hr />)}
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
                                                onClick={() => {player.dragons > 0 && this.handleDragonChange(index, player.dragons > 0 ? -1 : 0)}}
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
                                                    onClick={() => {player.chits > 0 && this.handleChitChange(index, player.chits > 0 ? -1 : 0)}}
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
                                                    checked={player.metropolisT}
                                                    onChange={() => { this.handleMetropolisTradeChange(index) }}
                                                />
                                            </label>
                                            <div>
                                                <label>
                                                    {PoliticsFlag}
                                                    <input
                                                        type="checkbox"
                                                        checked={player.metropolis}
                                                        onChange={() => { this.handleMetropolisPoliticsChange(index) }}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    {ScienceFlag}
                                                    <input
                                                        type="checkbox"
                                                        checked={player.metropolisS}
                                                        onChange={() => { this.handleMetropolisScienceChange(index) }}
                                                    />
                                                </label>
                                            </div>
                                        </span>
                                        )}
                                        {metropolis && (<hr />)}
                                        <span className='roadArmy'>
                                            {longestRoad && (<label>
                                                Longest Trade Route
                                                <input
                                                    type="checkbox"
                                                    checked={player.longestRoad}
                                                    onChange={() => { this.handleLongestRoadChange(index) }}
                                                />
                                            </label>
                                            )}
                                            {merchant && (<label>
                                                Merchant
                                                <input
                                                    type="checkbox"
                                                    checked={player.merchant}
                                                    onChange={() => { this.handleMerchantChange(index) }}
                                                />
                                            </label>
                                            )}
                                        </span>
                                        {longestRoad || merchant && (<hr />)}
                                    </div>
                                </div>
                                <h3 className='totalVP'>Victory Points</h3>
                                <div className='Totalscore'>{player.totalVictoryPoints}</div>
                            </div>
                        ))}
                    </div>
                    <div className='addRemoveReset'>
                        <button className='stnBtn' type="button" onClick={this.handleAddPlayer}>Add Player</button>
                        <button className='stnBtn' type="button" onClick={this.handleReset}>Reset Scores</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomScore;