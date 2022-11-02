//async and await

// const getTodos = async () => {

//     const response = await fetch('test.json');
    
//     if(response.status !== 200){
//         throw new Error('cannot fetch the error');
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;

// };

// getTodos()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected', err));


// using fetch api

// fetch('test.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('rejected', err);
// });



// using xmlhttprequest

// const getTodos = (url) => {
    
// return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data);
//         } else if(request.readyState == 4){
//             reject('error getting resource');
//         }
//         }); 
//     request.open('GET', url)
//     request.send();
//     });


// };

// getTodos('test.json').then((data) => {
//     console.log("promise resolved:", data);
//     return getTodos('https://jsonplaceholder.typicode.com/todos/1')
// }).then(data => {
//     console.log("promise 2 resolved", data);
// }).catch(err => {
//     console.log("promise rejected:", err);
// });

// getTodos('test.json',(err,data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // resolve('some data');
//         reject('some error');
//     });
// }

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })