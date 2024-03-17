require('dotenv').config();


main();

console.log(process.env.msgGreeting);


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function main() {
    console.log("Before sleep");
    //await sleep(10000); 
    await makeLoop(1000);
    
    await makeLoop(1500);
    console.log("After sleep");
}

async function makeLoop(ms) {
    let counter = 1;
    while (1) {
        await sleep(ms);
        console.log(counter++)
    }


    
}
