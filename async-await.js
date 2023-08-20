/* Make asynchronous code look synchronous
While Promises are cleaner, they're not perfect
Can add bloat to code

async/await
Standard in mnay languages
Syntax closer to synchronous code
 */

function promiseTimeout(ms) {
    return new Promise((resolve,reject) => {     //Anything return a Promise works
        setTimeout(resolve,ms);
    });
}

async function simulateLongOperation(){ //Indicates function will have an await
    // console.log(`Start!!!`)
    await promiseTimeout(1000);         //"pause" while operation completes
    return 42;                          //Same as Promise.resolve(42)
}

// simulateLongOperation();


async function run(){
    const answer = await simulateLongOperation(); //Restrieves successful value
    console.log(answer);                          // Use try/catch
}

