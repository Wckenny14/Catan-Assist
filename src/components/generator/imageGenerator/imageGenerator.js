import GeneratorLogic from '../Generator-logic.js'
import React from 'react'
import './imageGenerator.css'

import wheatImp from './hexes/wheat.png'
import brickImp from './hexes/brick.png'
import desertImp from './hexes/desert.png'
import lumberImp from './hexes/lumber.png'
import oreImp from './hexes/ore.png'
import sheepImp from './hexes/sheep.png'

import twoImp from './numbers/two.png'
import threeImp from './numbers/three.png'
import fourImp from './numbers/four.png'
import fiveImp from './numbers/five.png'
import sixImp from './numbers/six.png'
import eightImp from './numbers/eight.png'
import nineImp from './numbers/nine.png'
import tenImp from './numbers/ten.png'
import elevenImp from './numbers/eleven.png'
import twelveImp from './numbers/twelve.png'
import robberImp from './numbers/robber.png'

import threePortImp from './ports/three_port.png'
import sheepPortImp from './ports/sheep_port.png'
import lumberPortImp from './ports/lumber_port.png'
import orePortImp from './ports/ore_port.png'
import wheatPortImp from './ports/wheat_port.png'
import brickPortImp from './ports/brick_port.png'

function ImageGenerator() {
    let wheat = <img src={wheatImp} alt="wheat" className="hex" />
    let brick = <img src={brickImp} alt="brick" className="hex" />
    let desert = <img src={desertImp} alt="desert" className="hex" />
    let lumber = <img src={lumberImp} alt="lumber" className="hex" />
    let ore = <img src={oreImp} alt="ore" className="hex" />
    let sheep = <img src={sheepImp} alt="sheep" className="hex" />

    let two = <img src={twoImp} alt="two" className="number_img" />
    let three = <img src={threeImp} alt="three" className="number_img" />
    let four = <img src={fourImp} alt="four" className="number_img" />
    let five = <img src={fiveImp} alt="five" className="number_img" />
    let six = <img src={sixImp} alt="six" className="number_img" />
    let eight = <img src={eightImp} alt="eight" className="number_img" />
    let nine = <img src={nineImp} alt="nine" className="number_img" />
    let ten = <img src={tenImp} alt="ten" className="number_img" />
    let eleven = <img src={elevenImp} alt="eleven" className="number_img" />
    let twelve = <img src={twelveImp} alt="twelve" className="number_img" />
    let robber = <img src={robberImp} alt="robber" className="number_img" />

    let threePort = <img src={threePortImp} alt="three to one port" className="port_img" />
    let sheepPort = <img src={sheepPortImp} alt="sheep port" className="port_img" />
    let lumberPort = <img src={lumberPortImp} alt="lumber port" className="port_img" />
    let orePort = <img src={orePortImp} alt="ore port" className="port_img" />
    let wheatPort = <img src={wheatPortImp} alt="wheat port" className="port_img" />
    let brickPort = <img src={brickPortImp} alt="brick port" className="port_img" />

    let hexes = [wheat, wheat, wheat, ore, ore, ore, brick, brick, brick, brick, sheep, sheep, sheep, sheep, lumber, lumber, lumber, lumber, desert]

    let num_imgs = [five, two, six, three, eight, ten, nine, twelve, eleven, four, eight, ten, nine, four, five, six, three, eleven]

    let ports = [brickPort, sheepPort, lumberPort, orePort, wheatPort, threePort, threePort, threePort, threePort]

    let generator = new GeneratorLogic(hexes, num_imgs, ports, desert, robber)
    generator.makeMap()

    return (
        <div className="Generator-images">
            <div className="generate-button">
                <button className='map' onClick={() => window.location.reload(false)}>Generate Map</button>
            </div>

            <br></br><br></br><br></br><br></br><br></br>

            <div id="board">
                <div className="row" id="row_one">
                    <span className="hex-parent">
                        <span className="ports" id="port_one">{generator.boardPorts[0]} </span>
                        {generator.boardHexes[0]}
                        {generator.boardNumbers[0]}
                    </span>
                    <span className="hex-parent">
                        <span className="ports" id="port_two">{generator.boardPorts[1]} </span>
                        {generator.boardHexes[1]}
                        {generator.boardNumbers[1]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[2]}
                        {generator.boardNumbers[2]}
                    </span>
                </div>

                <div className="row" id="row_two">
                    <span className="hex-parent">
                        <span className="ports" id="port_three">{generator.boardPorts[2]} </span>
                        {generator.boardHexes[3]}
                        {generator.boardNumbers[3]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[4]}
                        {generator.boardNumbers[4]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[5]}
                        {generator.boardNumbers[5]}
                    </span>
                    <span className="hex-parent">
                        <span className="ports" id="port_four">{generator.boardPorts[3]} </span>
                        {generator.boardHexes[6]}
                        {generator.boardNumbers[6]}
                    </span>
                </div>

                <div className="row" id="row_three">
                    <span className="hex-parent">
                        {generator.boardHexes[7]}
                        {generator.boardNumbers[7]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[8]}
                        {generator.boardNumbers[8]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[9]}
                        {generator.boardNumbers[9]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[10]}
                        {generator.boardNumbers[10]}
                    </span>
                    <span className="hex-parent">
                        <span className="ports" id="port_five">{generator.boardPorts[4]} </span>
                        {generator.boardHexes[11]}
                        {generator.boardNumbers[11]}
                    </span>
                </div>

                <div className="row" id="row_four">
                    <span className="hex-parent">
                        <span className="ports" id="port_six">{generator.boardPorts[5]} </span>
                        {generator.boardHexes[12]}
                        {generator.boardNumbers[12]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[13]}
                        {generator.boardNumbers[13]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[14]}
                        {generator.boardNumbers[14]}
                    </span>
                    <span className="hex-parent">
                        <span className="ports" id="port_seven">{generator.boardPorts[6]} </span>
                        {generator.boardHexes[15]}
                        {generator.boardNumbers[15]}
                    </span>
                </div>

                <div className="row" id="row_five">
                    <span className="hex-parent">
                        <span className="ports" id="port_eight">{generator.boardPorts[7]} </span>
                        {generator.boardHexes[16]}
                        {generator.boardNumbers[16]}
                    </span>
                    <span className="hex-parent">
                        <span className="ports" id="port_nine">{generator.boardPorts[8]} </span>
                        {generator.boardHexes[17]}
                        {generator.boardNumbers[17]}
                    </span>
                    <span className="hex-parent">
                        {generator.boardHexes[18]}
                        {generator.boardNumbers[18]}
                    </span>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default ImageGenerator;