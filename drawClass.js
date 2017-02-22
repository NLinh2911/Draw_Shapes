/*
 * Created by Linh Ngo in 22/02/2017
 */

// Create a class

exports.drawClass = class {
    /*
     * Constructor
     */
    constructor (rows, cols, thick, shape) {
        this.rows = rows;
        this.cols = cols;
        this.thick = thick;
        this.shape = shape;
    }

    /***
     * @param row {Number}
     * @param col {Number}
     * @return {Boolean} True vẽ + False vẽ
     */

    drawAll() {
        return true;
    }

    drawStar (rowIndex, colIndex) {
        if (rowIndex % 2 ===0) {
            return colIndex % 2 === 0;
        } else {
            return colIndex % 2 !== 0;
        }
    }
    // Hàm in hình hộp có độ dày = thick
    drawBox (rowIndex, colIndex, rows, length, thick) {
        return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick);
    }

    // Hàm in hình hộp chứa 1 hình hộp bên trong
    drawBox2 (rowIndex, colIndex, rows, length, thick) {
        return (rowIndex === 0 || rowIndex === rows - 1 || colIndex === 0 || colIndex === length - 1 ||(rowIndex === thick-1 && colIndex >= thick-1 && colIndex <= length-thick) || (rowIndex === rows - thick && colIndex >= thick - 1 && colIndex <= length - thick)||(rowIndex > thick-1 && rowIndex < rows - thick && (colIndex === thick -1 || colIndex === length - thick)) );
    }
    // Hàm in đường chéo từ trên xuống dưới
    drawCrossDown(rowIndex, colIndex) {
        return (rowIndex === colIndex);
    }
    // Hàm in đường chéo từ dưới lên trên
    drawCrossUp (rowIndex, colIndex, length) {
        return (rowIndex === length - (colIndex + 1));
    }
    // Hàm in 1 chữ X
    drawX (rowIndex, colIndex, length) {
        return (rowIndex === colIndex) || (rowIndex === length - (colIndex + 1));
    }
    // Hàm in 3 đường chạy chéo
    drawCrosses (rowIndex, colIndex) {
        return (rowIndex === colIndex || rowIndex === colIndex-1 || rowIndex === colIndex-2);
    }

    // Hàm in hình con thoi khi rows và cols là số chẵn
    drawDiamondEven (rowIndex, colIndex, rows, length) {
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

    // Hàm in hình con thoi khi rows và cols là số lẻ
    drawDiamondOdd (rowIndex, colIndex, rows, length) {
        if (rowIndex <= (rows - 1)/2){
            return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex));
        }
        else {
            return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)));
        }
    }
    // Hàm in hình con thoi khi rows và cols là số lẻ và nằm trong hình box
    drawDiamondBox (rowIndex, colIndex, rows, length) {
        if (rowIndex === 0 || rowIndex === rows-1 || colIndex === 0 || colIndex === length - 1) {
            return true;
        }
        else if (rowIndex <= (rows - 1)/2){
            return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex));
        }
        else if (rowIndex > (rows - 1)/2) {
            return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)));
        }
    }
    // Hàm in 2 hình con thoi lẻ lồng vào nhau, hình nhỏ cách hình to 2 hàng
    drawDiamondOdd2 (rowIndex, colIndex, rows, length) {
        if (rowIndex < 3){
            return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex));
        }
        else if (rowIndex <= (rows - 1)/2 && rowIndex >= 3) {
            return ((colIndex === (length-1)/2 - rowIndex)|| (colIndex === (length-1)/2 + rowIndex) || (colIndex === (length-1)/2 - rowIndex + 3) || (colIndex === (length-1)/2 + rowIndex -3));
        }
        else if (rowIndex > (rows - 1)/2 && rowIndex <= (rows-1) - 3) {
            return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)) || (colIndex === (length-1)/2 - (rows - 1 - rowIndex) + 3 )|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex) - 3));
        }
        else {
            return ((colIndex === (length-1)/2 - (rows - 1 - rowIndex))|| (colIndex === (length-1)/2 + (rows - 1 - rowIndex)));
        }
    }
    // Hàm vẽ từng dòng
    drawLine (rowIndex, cols, drawFunction) {
        let str = "";
        for (let colIndex = 0; colIndex < cols; colIndex++) {
            str = str.concat(drawFunction(rowIndex, colIndex, this.rows, this.cols, this.thick) ? '+ ' : '  ');
        }
        return str;
    }
    // Hàm tổng hợp loop qua tất cả các dòng
    // In tất cả 7 hình
    drawEverything () {
        let result ='';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawBox2));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawCrossUp));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawX));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawCrosses));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawDiamondOdd));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawDiamondBox));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawDiamondOdd2));
            result += '\n';
        }
        return result;
    }

    drawEverything2 () {
        let result ='';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawBox2));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawCrossUp));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawX));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawCrosses));
            result += '\n';
        }
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawDiamondEven));
            result += '\n';
        }
        return result;
    }
};

//const newDraw = new drawClass(3,3);
//newDraw.drawEverything();