let monthAvg = 100;
let workingPrice = 0;
let decrease = 0;
let dropPerc = 0;
const currDate = new Date();
let currentPrice = 97;

function monthAvgCalc() {
    workingPrice = (((monthAvg) + currentPrice) /2);
    document.getElementById("previousAvg").innerHTML = monthAvg;
    document.getElementById("priceToday").innerHTML = currentPrice;
    document.getElementById("avgPrice").innerHTML = workingPrice;
    document.getElementById("todaysDate").innerHTML = currDate;
    /* check by logging to console */
    console.log(monthAvg);
    console.log(currDate);
}

function percentDrop() {
    let decrease = monthAvg - currentPrice;
    let dropPerc = (decrease / monthAvg) * 100;
    document.getElementById("dropPerc").innerHTML = dropPerc;
}


monthAvgCalc();
percentDrop();