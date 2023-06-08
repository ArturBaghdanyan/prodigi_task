const gameBoard = document.querySelector("#chess");

const startPieces = [
  rook, knight, bishop, queen, king, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  rook, knight, bishop, queen, king, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
];

function drawChessBoard() {
  startPieces.forEach((item, i) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = item;
    square.classList.add('beige');
    gameBoard.append(square);
    const row = Math.floor((63 - i) / 8 ) + 1
    if( row % 2 === 0 ) {
      square.classList.add(i % 2 === 0 ? 'beige' : 'brown')
    } else {
      square.classList.add(i % 2 === 0 ? 'brown' : 'beige')
    }
  })
}
drawChessBoard();
