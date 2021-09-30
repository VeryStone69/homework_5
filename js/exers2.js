
//--- Exercise 2 ---  Write a function that returns the last element  ---

let arr = [1,2,4,545,54545,3,4,"This is last element...really"];

    // == variant 1
// function lastElement() {
//     for (i = 0; i <= arr.length; i++) {
//         if (i == ((arr.length) - 1)) {
//             return arr[i];
//         }
//     }
// }
// alert("Последний элемент массива " + lastElement());


    // == variant 2
function lastElement1() {
    arr.reverse();
}

lastElement1();
alert("Последний элемент массива : " + arr[0]);