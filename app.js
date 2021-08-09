// //nest loop
// for (let i =0; i < 10; i++){
//     for(let j=0; j < 5; j++){
//         console.log(i, j);
//     }
// }

// // loop though an array=
// let friends = ["Josh", "John", "Mike"];

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i].toUpperCase());
// }

//Guess Game

// let answer = Math.floor(Math.random()*100);

// let n1 = 0;
// let n2 = 99;
// let game = 1;

// while (game=1){
//     let guess = prompt(`請猜 ${n1} ~ ${n2}`);
//     if (guess > answer) {
//        n2 = guess ; 
//        alert("太大了,再一次"); 
//     } else if (guess < answer){
//        n1 = guess ;
//        alert("太小了,再一次"); 
//     } else if (guess == answer){
//        alert("你猜對了");
//        break; 
//     }
// }


//Reverse an array

const friends = ["Harry", "Ron", "Snap"];
const reversed_friends = [];

for (let i =2; i >= 0; i--){
    reversed_friends.push(friends[i])
}

console.log(reversed_friends)

//function
function findBiggest(arr) {
    if (arr.length == 0) {
        return undefined;
    }

    let biggestNumber = -1000000;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }

    return biggestNumber;
}

console.log (findBiggest([1, 2, 3, 4, 5, 999]));

//function part2

function addUpTo(n) {
    let result = 0;

    for (let i = 1; i <= n; i++){
        result += i;
    }

    return result
}

console.log(addUpTo(2542  ));
