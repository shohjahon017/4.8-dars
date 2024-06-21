//Asosiy metodlarga oid masalar

//1-masala

// let arr = [1, 2, 3, 5, 6, 9];
// function lengthElement(arr) {
//   return arr.length;
// }
// console.log(lengthElement(arr));

//2-masala
// let arr = [1, 2, 3, 5, 6, 9];
// function toStringElement(arr) {
//   let res = arr.toString();
//   return res;
// }
// console.log(toStringElement(arr));

//3-masala
// let arr = [1, 2, 3, 5, 6, 9];
// function joinElement(arr) {
//   let res = arr.join(", ");
//   return res;
// }
// console.log(joinElement(arr));

//4-masala
// let arr = [1, 2, 3, 4, 8, 9, 10];
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }
// console.log(addElement(arr, 12));

//5-masala
// let arr = [5, 3, 9, 15, 6, 77, 55];
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(removeElement(arr));

//6-masala
// let arr = [44, 52, 6, 5, 88, 9];
// function removefirstElement(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(removefirstElement(arr));

//7-masala
// let arr = [2, 5, 6, 8, 3, 4, 7];
// function addFirstElement(arr, element) {
//   arr.unshift(element);
//   return arr;
// }
// console.log(addFirstElement(arr, 1));

//8-masala

// let arr1 = [25, 3, 6, 5, 6, 9];
// let arr2 = [25, 4, 56, 8, 63, 45];
// function unifyTwoelement(arr1, arr2) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// console.log(unifyTwoelement(arr1, arr2));

//9-masala
// let arr = [2, 6, 8, 9, 4, 0];
// function spliceElement(arr) {
//   arr.splice(1, 3, 5, 10);
//   return arr;
// }
// console.log(spliceElement(arr));

//10-masala
// let arr = [5, 6, 8, 99, 4, 7];
// function sliceElement(arr) {
//   let res = arr.slice(1, 4);
//   return res;
// }
// console.log(sliceElement(arr));

//11-masala
// let arr = ["matiz", "gentra", "cobalt"];
// function lengthElement(arr) {
//   let res = arr.length;
//   return res;
// }
// console.log(lengthElement(arr));

//12-masala
// let arr = [1, 5, 3, 6, 5];
// function toStringElement(arr) {
//   let res = arr.toString();
//   return res;
// }
// console.log(toStringElement(arr));

//13-masala
// let arr = [1, 5, 36, 8, 9];
// function joinElement(arr) {
//   let res = arr.join("");
//   return res;
// }
// console.log(joinElement(arr));

//14-masala
// let arr = [1, 2, 3, 4, 8,15 , 14];
// function addElement(arr, element1, element2) {
//   arr.push(element1, element2);
//   return arr;
// }
// console.log(addElement(arr, 12, 14));

//15-masala
// let arr = [15, 14, 6, 8, 9, 4];
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(removeElement(arr));

//16-masala
// let arr = [15, 54, 68, 9, 84];
// function removefirstElement(arr) {
//   arr.shift();
//   return arr;
// }
// console.log(removefirstElement(arr));

//17-masala
// let arr = [14, 5, 65, 48, 75, 95, 72];
// function addFirstElement(arr, element) {
//   arr.unshift(element);
//   return arr;
// }
// console.log(addFirstElement(arr, 156));

//18-masala
// let arr1 = [15, 15, 659, 25, 14];
// let arr2 = [52, 41, 59];
// let arr3 = [25, 15, 76, 85];
// function mergeElement(arr1, arr2, arr3) {
//   let res = arr1.concat(arr2, arr3)
//   return res;
// }
// console.log(mergeElement(arr1, arr2, arr3));

//19-masala
// let arr = [85, 9, 58, 25, 95, 45];
// function spliceElement(arr) {
//   arr.splice(1, 1);
//   return arr;
// }
// console.log(spliceElement(arr));

//20-masala
// let arr = [14, 545, 6, 58, 5218, 5];
// function sliceElement(arr) {
//   let res = arr.slice(2, arr.length);
//   return res;
// }
// console.log(sliceElement(arr));

//Search metodlariga oid masalalar.

//1-masala
// let arr = [12, 13, 14, 15, 18, 20];
// function findElement(arr) {
//   let res = arr.includes(12);
//   return res;
// }
// console.log(findElement(arr));

//2-masala
// let arr = [1, 2, 5, 6, 8, 9];
// function findIndexElement(arr) {
//   let res = arr.indexOf(2);

//   return res;
// }
// console.log(findIndexElement(arr));

//3-masala
// let arr = [1, 2, 3, 5, 6, 7, 8, 5];
// function findLastIndexElement(arr) {
//   let res = arr.lastIndexOf(5);
//   return res;
// }
// console.log(findLastIndexElement(arr));

//4-masala
// let arr = [3, 2, 10, 5, 4, 6, 7, 20];

// let result = arr.find(function (value, index, ar) {
//   return value > 5;
// });

// console.log(result);

//5-masala
// let arr = [3, 2, 10, 20, 14, 1, 9, 21];
// let result = arr.findIndex(function (value, index) {
//   return index > 5;
// });
// console.log(result);

//6-masala

// let arr = ["Gentra", "Malibu", "BMW"];
// function findElement(arr) {
//   let res = arr.includes("Gentra");
//   return res;
// }
// console.log(findElement(arr));

//7-masala
// let arr = [1, 3, 4, 11, 10, 8, 9];
// function findIndexElement(arr) {
//   let res = arr.indexOf(10);
//   return res;
// }
// console.log(findIndexElement(arr));

//8-masala
// let arr = [1, 4, 59, 15, 75, 32];
// function findLastIndexElement(arr) {
//   let res = arr.lastIndexOf(15);
//   return res;
// }
// console.log(findLastIndexElement(arr));

//9-masala
// let arr = [3, 2, 10, 155, 4, 641, 71, 20];
// let result = arr.find(function (value, index, ar) {
//   return value > 100;
// });
// console.log(result);

//10-masala
// let arr = [14, 15, 6, 51, 13];
// let result = arr.find(function (value, index, ar) {
//   return index < 50;
// });
// console.log(result);
