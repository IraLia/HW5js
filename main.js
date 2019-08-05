// Task1
function convert(amount){
    const uah = amount * 8;
    return `${uah} грн`;
}


// Task2
function reverse(str) {
    return str.split("").reverse().join("");
  }


// Task3
function printStairs(n) {
    for(let i=1; i<= n; i++){
        let str = '#'. repeat(i*2 -1)
        console.log(str);
    }
}


//task4
function sumRange(start, end) {
    let sum = 0;
    for(i = start; i <= end; i++)
        sum = sum + i;
    console.log(sum);
}


//task5
function min(a, b, c) {
if ( a < b && a < c){
    console.log(a);}
else if(b < a && b < c ){
    console.log(b);}
else {console.log(c);}
}


//task6
function printPyramid(n) {
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '#'. repeat(i*2 -1)
        console.log(str + str2);
    }
}


//task8
const cursorCheck = (str) => !!(str.match(/ironman/gi) || str.match(/cursor/gi) || str.match(/ostap/gi));


//task11
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];}
    console.log(arr[n])
}
