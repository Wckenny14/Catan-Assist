import GeneratorLogic from '../Generator-logic.js'
import './generator.css'

function TextGenerator() {

    let hexes = ["wheat", "wheat", "wheat", "wheat", "ore", "ore", "ore", "brick", "brick", "brick", "sheep", "sheep", "sheep", "sheep", "lumber", "lumber", "lumber", "lumber", "desert"]

    let numbers = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

    let ports = ["sheep", "lumber", "ore", "wheat", "three", "three", "three", "three"]

    let generator = new GeneratorLogic(hexes, numbers, ports, "desert", "robber")
    generator.makeMap()

    return (
        <div className="Generator-Text">
            <p>Hit refresh to generate a new map.</p>
            <br></br>
            <br></br>

            <div id="row_one">
                <p>
                    {generator.boardHexes[0]} [{generator.boardNumbers[0]}],
                    {generator.boardHexes[1]} [{generator.boardNumbers[1]}],
                    {generator.boardHexes[2]} [{generator.boardNumbers[2]}]
                </p>
            </div>

            <div id="row_two">
                <p>
                    {generator.boardHexes[3]} [{generator.boardNumbers[3]}],
                    {generator.boardHexes[4]} [{generator.boardNumbers[4]}],
                    {generator.boardHexes[5]} [{generator.boardNumbers[5]}],
                    {generator.boardHexes[6]} [{generator.boardNumbers[6]}]
                </p>
            </div>

            <div id="row_three">
                <p>
                    {generator.boardHexes[7]} [{generator.boardNumbers[7]}],
                    {generator.boardHexes[8]} [{generator.boardNumbers[8]}],
                    {generator.boardHexes[9]} [{generator.boardNumbers[9]}],
                    {generator.boardHexes[10]} [{generator.boardNumbers[10]}],
                    {generator.boardHexes[11]} [{generator.boardNumbers[11]}]
                </p>
            </div>

            <div id="row_four">
                <p>
                    {generator.boardHexes[12]} [{generator.boardNumbers[12]}],
                    {generator.boardHexes[13]} [{generator.boardNumbers[13]}],
                    {generator.boardHexes[14]} [{generator.boardNumbers[14]}],
                    {generator.boardHexes[15]} [{generator.boardNumbers[15]}]
                </p>
            </div>

            <div id="row_five">
                <p>
                    {generator.boardHexes[16]} [{generator.boardNumbers[16]}],
                    {generator.boardHexes[17]} [{generator.boardNumbers[17]}],
                    {generator.boardHexes[18]} [{generator.boardNumbers[18]}]
                </p>
            </div>
            <br></br>
        </div>
    )
}

export default TextGenerator;