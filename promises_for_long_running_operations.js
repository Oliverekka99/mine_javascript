/* Promises for long running operations
Calls to databases and other external services can take a while. We need to ensure the application doesn't cease all operations while those complete. By using promises we can allow for better thread management and ensure our application stays responsive and has better performance.

*/
// function callback(){
//     console.log('Time completed');
// }
// setTimeout(callback,3000); //wait 3 seconds

// Cascading becomes an issue
// longRunningOperation(() => {
//     anotherLongRunningOperations(() => {
//         yetAnother(() => {
//             oneMore(() => {
//                 lastOne(() => {
//                     console.log('Where are we?');
//                 });
//             });
//         });
//     });
// });

/* Enter promises
Common development pattern
Cleaner version of callbacks
Recent versions of javaScript have built-in Promise object
Long running operations typically return a Promise
*/

// Promise
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
promiseTimeout(2000)
    .then(() => {
        console.log('done');
        return Promise.resolve(42);
    })
    .then((response) => {
        console.log(response);
    })
    .catch(() => {
        console.log('cool error handling');
    });


    