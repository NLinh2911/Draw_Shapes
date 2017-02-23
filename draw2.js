/***
 * function initDraw(param1, param2) return (xxx, yyyy)
 *
 * function drawLine(row, length, drawPoint) return string
 *
 * function drawPoint(row, col) return boolean. true draw + sign, false draw space
 */
let rows, cols;

function initDraw() {
    rows = 8;
    cols = 8;
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
// drawDiamond only applies for odd rows and cols
function drawDiamond (rowIndex, colIndex, rows, length) {
    if (rowIndex <= (rows - 1)/2){
        return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex));
    }
    else {
        return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)));
    }

}
function   drawDiamondOdd2 (rowIndex, colIndex, rows, length) {
    let thick = 3;
    let dis = (length-1)/2;
        if (rowIndex < thick){
            return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex));
        }
        else if ( rowIndex >= thick && rowIndex <= (rows-1) - thick) {
            return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex) || (colIndex === dis - rowIndex + thick) || (colIndex === dis + rowIndex -thick)|| (colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex)) || (colIndex === dis - (rows - 1 - rowIndex) + thick )|| (colIndex === dis + (rows - 1 - rowIndex) - thick));
        }
        else {
            return ((colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex)));
        }
    }
 function  drawDiamondOdd (rowIndex, colIndex, rows, length) {
            return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex)) ||(colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex));
        }
function drawCornerBox (rowIndex, colIndex, rows, length) {
    let thick = 11;
    if (rowIndex === 0 || rowIndex === rows-1 || colIndex === 0 || colIndex === length - 1) { // Vẽ hình vuông bọc bên ngoài
            return true;
    }
    if (rowIndex >= (rows-thick)/2 && rowIndex <= (rows-thick)/2 + (thick-1)) { // vẽ hình vuông nhỏ bên trong size = tham số thick
        return ((rowIndex === (rows-thick)/2 && colIndex >= (length-thick)/2 && colIndex <= (length-thick)/2 + (thick-1)) || (rowIndex === (rows-thick)/2 + (thick-1) && colIndex >= (length-thick)/2 && colIndex <= (length-thick)/2 + (thick-1)) || (colIndex === (length-thick)/2) || (colIndex === (length-thick)/2 +(thick-1)));   
    }
    // Vẽ bốn góc
    return (((rowIndex === thick - 1 || rowIndex === rows - thick ) && (colIndex <= thick - 1 || colIndex >= length - thick)) || ((colIndex === thick - 1 || colIndex === length - thick ) && (rowIndex <= thick - 1 || rowIndex >= rows - thick)));
}
// Hàm vẽ hình cánh bướm
function drawFly (rowIndex, colIndex, rows, length) {
    return (rowIndex <= rows/2 && (colIndex<=rowIndex || colIndex >= length - 1 -rowIndex)) ||
    (rowIndex > rows/2 && (colIndex <= length -1 - rowIndex || colIndex >= rowIndex));
}

//
function  drawZigZag (rowIndex, colIndex, rows, length) {
        let lines = 4
        if (colIndex < length/lines) { 
            return (rowIndex === (length/lines - (colIndex + 1)));
        }
        else if (colIndex >= length/lines && colIndex < (length/lines)*2) { 
            return (rowIndex === colIndex - (length/lines));
        }
        else if (colIndex >= (length/lines)*2 && colIndex < (length/lines)*3) { 
            return (rowIndex === (length/lines)*3 - (colIndex + 1));
        }
        else { 
            return (rowIndex === colIndex - (length/lines)*3);
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
        console.log(drawLine(i, cols, drawFly));
    }
}

drawEverything();