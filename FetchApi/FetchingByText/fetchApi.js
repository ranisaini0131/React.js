document.getElementById('btn').addEventListener("click", makeRequest);

//=============================using Promises==============

//===========================With error
// function makeRequest() {
//     console.log("button clicked")
//     //fetch takes dataPath as argument and returns a promise to handle it we use then
//     fetch('data1.txt').then((res) => {
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         return res.text() // this text also returns a promise
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })
// }



// function makeRequest() {
//     console.log("button clicked")
//     //fetch takes dataPath as argument and returns a promise to handle it we use then 
//     fetch('data.txt').then((res) => {
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         return res.text() // this text also returns a promise
//     }).then((data) => {
//         console.log(data)
//         document.getElementById("divdata").innerHTML = data
//     }).catch((error) => {
//         console.log(error)
//     })
// }





//==========================Using Async Await

let makeRequest = async () => {
    console.log("Button clicked");
    let data = await fetch("data.txt")
    console.log(data)
}

















//fetch Api me reject sirf network error me hoga......404 n all me nhi
//in case of any other error rather than network then check ok attribute 