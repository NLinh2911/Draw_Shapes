/***
 * function initDraw(param1, param2) return (xxx, yyyy)
 *
 * function drawLine(row, length, drawPoint) return string
 *
 * function drawPoint(row, col) return boolean. true draw + sign, false draw space
 */
let rows, cols;

function initDraw() {
  rows = 13;
  cols = 13;
}
/***
 *
 * @param row {Number}
 * @param col {Number}
 * @return {Boolean} True vẽ + False vẽ
 */
function drawAll() {
  return true;
}

function drawStar(rowIndex, colIndex) {
  if (rowIndex % 2 ===0) {
    return colIndex % 2 === 0;
  } else {
    return colIndex % 2 !== 0;
  }
}

function drawBox(rowIndex, colIndex, rows, length) {
  let thick = 3;
  return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick);
}

function drawCrossDown(rowIndex, colIndex) {
  return (rowIndex === colIndex);
}

//
function drawBox2 (rowIndex, colIndex, rows, length) {
  let thick = 3;
  return (rowIndex === 0 || rowIndex === rows - 1 || colIndex === 0 || colIndex === length - 1 ||(rowIndex === thick-1 && colIndex >= thick-1 && colIndex <= length-thick) || (rowIndex === rows - thick && colIndex >= thick - 1 && colIndex <= length - thick)||(rowIndex > thick-1 && rowIndex < rows - thick && (colIndex === thick -1 || colIndex === length - thick)) );
}

//
function drawCrossUp(rowIndex, colIndex, length) {
    return (rowIndex === length - (colIndex + 1));
}

function drawX (rowIndex, colIndex, length){
  return (rowIndex === colIndex) || (rowIndex === length - (colIndex + 1));
}
// drawDiamond only applies for even rows and cols
function drawDiamondEven (rowIndex, colIndex, rows, length) {
    if (rowIndex < rows/2 && colIndex < length/2) { // cạnh trên bên trái
        return (rowIndex === (length/2 - (colIndex + 1)));
    }
    else if (rowIndex < rows/2 && colIndex >= length/2) { // cạnh trên bên phải
        return (rowIndex === (colIndex - length/2));
    }
    else if (rowIndex >= rows/2 && colIndex >= length/2) { // cạnh dưới bên phải
        return (rowIndex === length - (colIndex - length/2 + 1));
    }
    else { // cạnh dưới bên trái
        return (rowIndex === (colIndex + length/2));
    }
}
// drawDiamondOdd only applies for odd rows and cols
function drawDiamondOdd (rowIndex, colIndex, rows, length) {
    if (rowIndex <= (rows - 1)/2){
        return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex));
    }
    else {
        return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)));
    }

}
function drawLine(rowIndex, cols, drawFunction) {
  let str = "";
  for (let colIndex = 0; colIndex < cols; colIndex++) {
      str = str.concat(drawFunction(rowIndex, colIndex, rows, cols) ? '+ ' : '  ');
  }
  return str;
}

function drawEverything() {
  //TODO: Nhập dữ liệu từ người dùng

  //TODO: validate dữ liệu nếu thấy bất hợp lý thì throw error hoặc thoát chương trình

  initDraw();

  for (let i = 0; i < rows; i++) {
    console.log(drawLine(i, cols, drawDiamondOdd));
  }
}

drawEverything();