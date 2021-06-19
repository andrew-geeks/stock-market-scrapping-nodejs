const puppeteer=require("puppeteer");

//fetching-nifty
async function niftyData(url){
    console.log("fetching nifty-values...");
    const browser=await puppeteer.launch();
    const page=await browser.newPage();
    await page.goto(url);
    var last_niftyval=await page.evaluate(function(){
        
        var value=document.querySelector("#ind_glb_currvalue2").textContent;
        return(value);
    });

    var nifty_chge_val=await page.evaluate(function(){
        var value=document.querySelector("#ind_glb_chng2").textContent;
        return(value);
    });
    
    var nifty_chge_perc=await page.evaluate(function(){
        var value=document.querySelector("#ind_glb_perchng2").textContent;
        return(value);
    });

    var updated=await page.evaluate(function(){
        var value=document.querySelector("#sp_asOnDate").textContent;
        return(value);
    });

    console.log("\nLast nifty value: "+last_niftyval);
    console.log("Change value: "+nifty_chge_val);
    console.log("Change %: "+nifty_chge_perc+"%");
    console.log("Updated "+updated);

    await browser.close();
}


//fetching-sensex
async function sensexData(url){

    console.log("fetching sensex-values...");
    const browser=await puppeteer.launch();
    const page=await browser.newPage();
    await page.goto(url);
    var last_sensexval=await page.evaluate(function(){
        
        var value=document.querySelector("#ind_glb_currvalue1").textContent;
        return(value);
    });

    var sensex_chge_val=await page.evaluate(function(){
        var value=document.querySelector("#ind_glb_chng1").textContent;
        return(value);
    });
    
    var sensex_chge_perc=await page.evaluate(function(){
        var value=document.querySelector("#ind_glb_perchng1").textContent;
        return(value);
    });

    var updated=await page.evaluate(function(){
        var value=document.querySelector("#sp_asOnDate").textContent;
        return(value);
    });

    console.log("\nLast sensex value: "+last_sensexval);
    console.log("Change value: "+sensex_chge_val);
    console.log("Change %: "+sensex_chge_perc+"%");
    console.log("Updated "+updated);

    await browser.close();

}





niftyData("https://www.moneycontrol.com/indian-indices/nifty-50-9.html");
sensexData("https://www.moneycontrol.com/indian-indices/s&p-bse-sensex-4.html");



// DATA FROM : https://www.moneycontrol.com

