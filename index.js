import puppeteer from "puppeteer";

/* set all the variables */

let monthAvg = 300;
let workingPrice = 0;
let decrease = 0;
let dropPerc = 0;
const currDate = new Date();
let currentPrice = 0;
let quote = 0;
let title = "";
let quotes = 0;
let newString = " ";
let todaysPrice = 0.00;
let quoteStr = "999";
var timeout = 1000000; // 1000000ms = 1000 seconds

//
// start the web scraper
// 

const getQuotes = async() => {
    const browser = await puppeteer.launch({
        headless: "new", // runs headless - change to false if you need to open up a browser 
        defaultViewport: null, // viewport size will be full width x height
    });

    const page = await browser.newPage(); // opens new page

    await page.goto("https://www.amazon.com/Evenflo-Xplore-Stroller-All-Terrain-Adventurer/dp/B0876T55JJ/", { // opens url
        waitUntil: "domcontentloaded", // waits for content to load
    }); 

    // grab the data
    quotes = await page.evaluate(() => {
        // get the product price from url
        // use the ID #attach-base-product-price and grab the value
        quote = document.querySelector("#attach-base-product-price").value;
        title = document.querySelector("#productTitle").value;
        
        quoteArr = (Array.from(quote));
        quoteStr = quoteArr.join('');
        return quoteStr;
        return title;
    });

    // display price
    console.log("This is the price " + quotes);
    function transData() {
        console.log(quotes);
        console.log(title);
        todaysPrice = parseFloat(quotes);
        console.log(todaysPrice);

        // do math here
        if (todaysPrice > monthAvg) {
            console.log("The price is higher")
        }
        else {
            console.log("The price is lower")
            decrease = (((monthAvg-todaysPrice)/monthAvg) * 100)
            console.log(parseFloat(decrease).toFixed(2) + "%")
        }
    }
    await transData(); 
    await browser.close();
    console.log("Web scrape completed");


};

getQuotes();
