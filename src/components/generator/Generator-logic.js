class GeneratorLogic {

    constructor(hexes, numbers, ports, desert, robber) {
        this.hexes = hexes
        this.numbers = numbers
        this.ports = ports
        this.boardHexes = []
        this.boardNumbers = []
        this.boardPorts = []
        this.desert = desert
        this.robber = robber
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    makeMap() {
        this.allocateHexes()
        this.allocateNumbers()
        this.allocatePorts()
    }

    allocateHexes() {
        this.boardHexes = this.hexes
        this.shuffle(this.boardHexes)
        return this.boardHexes
    }

    allocateNumbers() {
        this.boardNumbers = this.numbers
        this.shuffle(this.boardNumbers)

        var robberIndex = this.boardHexes.indexOf(this.desert)
        this.boardNumbers.splice(robberIndex, 0, this.robber)

        return this.boardNumbers
    }

    allocatePorts() {
        this.boardPorts = this.ports
        this.shuffle(this.boardPorts)
        return this.boardPorts
    }

}

export default GeneratorLogic