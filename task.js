// const numbers =[10, 20, 30, 41,50,3,5,7, 55, 65];
//  let number = [];

//  function array (numbers){
//     for(let num of numbers){
//         if(num % 2 === 1){
//             console.log(num)
//              number.push(num);
//         }
//     }
//     return number;
//  }
//    const jamai= array(numbers)
//     console.log(jamai)

const array = [];
for (let i = 1; i < 10; i += 2) {
    console.log(i)
    array.push(i)
}
console.log(array)

let i = 1;
while (i < 10) {
    console.log(i);
    i += 2;
}

const taka = 0;
if (taka > 1000) {
    console.log("you will take a one col drink free");
    if (taka > 500) {
        console.log("You will take a ice-cream");
    }
}
else {
    console.log('you will take free furites')
}
