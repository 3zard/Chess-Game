class PieceBase {
  constructor(name, color, position) {
    if (new.target === PieceBase) {
      throw new Error("Cannot instantiate abstract class PiecesBase");
    }
    this.name = name;
    this.color = color;
    this.position = position;
  }
  isPossibleMove() {}
  move(piece, newPosition) {}
}
