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
        let dis = (length - 1)/2;
        return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex)) ||(colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex));
    }
    // Hàm in hình con thoi khi rows và cols là số lẻ và nằm trong hình box
    drawDiamondBox (rowIndex, colIndex, rows, length) {
        let dis = (length - 1)/2;
        if (rowIndex === 0 || rowIndex === rows-1 || colIndex === 0 || colIndex === length - 1) {
            return true;
        }
        return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex)) ||(colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex));
    }
    // Hàm in 2 hình con thoi lẻ lồng vào nhau, hình nhỏ cách hình to 2 hàng
    drawDiamondOdd2 (rowIndex, colIndex, rows, length, thick) {
        let dis = (length - 1)/2;
        if (rowIndex < thick){
            return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex));
        }
        else if (rowIndex <= (rows - 1)/2 && rowIndex >= thick) {
            return ((colIndex === dis - rowIndex)|| (colIndex === dis + rowIndex) || (colIndex === dis - rowIndex + thick) || (colIndex === dis + rowIndex -thick));
        }
        else if (rowIndex > (rows - 1)/2 && rowIndex <= (rows-1) - thick) {
            return ((colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex)) || (colIndex === dis - (rows - 1 - rowIndex) + thick )|| (colIndex === dis + (rows - 1 - rowIndex) - thick));
        }
        else {
            return ((colIndex === dis - (rows - 1 - rowIndex))|| (colIndex === dis + (rows - 1 - rowIndex)));
        }
    }
    
    // Hàm vẽ hình box có chứa 1 box nhỏ ở trung tâm và 4 box ở 4 góc 
    drawCornerBox (rowIndex, colIndex, rows, length, thick) {
        if (rowIndex === 0 || rowIndex === rows-1 || colIndex === 0 || colIndex === length - 1) { // Vẽ hình vuông bọc bên ngoài
            return true;
        }
        if (rowIndex >= (rows-thick)/2 && rowIndex <= (rows-thick)/2 + (thick-1)) { // vẽ hình vuông nhỏ bên trong size = tham số thick
            return ((rowIndex === (rows-thick)/2 && colIndex >= (length-thick)/2 && colIndex <= (length-thick)/2 + (thick-1)) || (rowIndex === (rows-thick)/2 + (thick-1) && colIndex >= (length-thick)/2 && colIndex <= (length-thick)/2 + (thick-1)) || (colIndex === (length-thick)/2) || (colIndex === (length-thick)/2 +(thick-1)));   
        }
        // Vẽ bốn góc
        return (((rowIndex === thick - 1 || rowIndex === rows - thick ) && (colIndex <= thick - 1 || colIndex >= length - thick)) || ((colIndex === thick - 1 || colIndex === length - thick ) && (rowIndex <= thick - 1 || rowIndex >= rows - thick)));
    }
    // Hàm vẽ zig zag với 4 đường lên - xuống - lên - xuống 
    // Phải chọn cols = 4*rows để hình cân
    drawZigZag (rowIndex, colIndex, rows, length) {
        let lines = 4
        // (length/lines) = rows
        if (colIndex < rows) { 
            return (rowIndex === (rows - (colIndex + 1)));
        }
        else if (colIndex >= rows && colIndex < rows*2) { 
            return (rowIndex === colIndex - rows);
        }
        else if (colIndex >= rows*2 && colIndex < rows*3) { 
            return (rowIndex === rows*3 - (colIndex + 1));
        }
        else { 
            return (rowIndex === colIndex - rows*3);
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
    // In tất cả 8 hình, chạy khi tham số rows and cols là lẻ
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
        result += '\n';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawCornerBox));
            result += '\n';
        }
        return result;
    }
    // Chạy khi tham số rows và cols là chẵn
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
    // Chạy khi in hình zig zag
    drawEverything3 () {
        let result ='';
        for (let i = 0; i < this.rows; i++) {
            result += (this.drawLine(i, this.cols, this.drawZigZag));
            result += '\n';
        }
        return result;
    }
};

//const newDraw = new drawClass(3,3);
//newDraw.drawEverything();