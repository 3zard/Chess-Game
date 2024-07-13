class Player {
    constructor(name, color ) {
        if (new.target === Player) {
            throw new Error("Cannot instantiate abstract class Player")
        }
        this.name = name
        this.color = color
    }
    makeMove(piece, position) {
        
    }
}
