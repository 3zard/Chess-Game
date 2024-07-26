class PlayerBase {
    constructor(name, whiteSide, game) {
        if (new.target === Player) {
            throw new Error("Cannot instantiate abstract class Player")
        }
        this.name = name
        this.whiteSide = whiteSide
        this.game = game
    }
    
    isWhiteSide() {}
    joinGame(game) {}
    createRoom() {}
    startGame() {}
    resign() {}
    makeDraw() {}
    sendMessage(message) {}
}
