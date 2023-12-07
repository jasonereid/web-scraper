/*                      */
/* calculator functions */
/*                      */
// make sure functions run after the web scraper using async 
//

async function monthAvgCalc() {
    workingPrice = (((monthAvg) + currentPrice) /2);

    /* check by logging to console */
    console.log(monthAvg);
    console.log(currDate);
}

async function percentDrop() {
    let decrease = monthAvg - currentPrice;
    let dropPerc = (decrease / monthAvg) * 100;
}

async function executeCalcFunc() {
    currentPrice = quotes; // update currentPrice to scraped price
    await getQuotes(); // run the quotes function
    await monthAvgCalc();
    await percentDrop();
    console.log("Done with calc task");
    newString = quotes;
    console.log("my new string is " + newString);
}

executeCalcFunc();

/*                    */
/* end calc           */
/*                    */