// Calls to databases and other external services can take a while. We need to ensure the application doesn't cease all operations while those complete. By using promises we can allow for better thread management and ensure our application stays responsive and has better performance.

function promiseTimeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms);
    });
}
promiseTimeout(2000)
    .then(() => {
        console.log('Done!!!');
        return promiseTimeout(1000);
    }).then(() => {
         console.log('Also done!!!');
         return Promise.resolve(42);
    }).then((result) => {
        console.log(result);
    }).catch(() => {
        console.log('Error!');
    });

