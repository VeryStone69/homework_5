
//--Exercise 4------------------------------------------

// == variant 1
function result1() {
    let xi = document.getElementById(`valueX`).value;
    let yi = document.getElementById(`valueY`).value;

    let arrX = xi.split(`;`);
    let arrY = yi.split(`;`);

    let arrXnumber = arrX.map(Number);
    let arrYnumber = arrY.map(Number);

    let resultArrX = arrXnumber.reduce((sum, current) => sum + current, 0);
    let resultArrY = arrYnumber.reduce((sum, current) => sum + current, 0);

    let c = (resultArrX + resultArrY) / 2;
    let cNumber = c.toFixed(4);

    let divShow = document.getElementById(`show`);
    divShow.innerHTML = `<p>Сумма элементов массивов: ${cNumber}</p>`;



}

// == variant 2
function result2() {
    let xi = document.getElementById(`valueX`).value;
    let yi = document.getElementById(`valueY`).value;

    let arrX = xi.split(`;`);
    let arrY = yi.split(`;`);

    let arrXiYi= arrX.concat(arrY);

    let arrXiYxiNumber = arrXiYi.map(Number);

    let resultArrXY = arrXiYxiNumber.reduce((sum, current) => sum + current, 0);

    let c = resultArrXY / 2;
    let cNumber = c.toFixed(4);

    let divShow = document.getElementById(`show`);
    divShow.innerHTML = `<p>Сумма элементов массивов: ${cNumber}</p>`;

}