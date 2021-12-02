//Homework 1.12.21


//#region 1
// let a=prompt('enter a');
// let b=prompt('enter b');
// let sum = parseInt (a) + parseInt (b);

// console.log(sum)

// if(a==b){
//     let s=a*6
//     console.log(s)
// }

//#endregion

//#region 2
// let a=prompt('enter a');
// let b=prompt('enter b');

// if((Number(a)<0 && Number(b)>0) ||  (Number(a)>0 && Number(b)<0)){
    
//     alert("Yes, one is true and another is false")
// }
// else{
//     alert("No")
// }

//#endregion

//#region 3

// let width=prompt("enter a");
// let height=prompt("enter a");

// Area(width,height);

// function Area(a,b){
// let area=a*b;
// alert("Area based on given properties: "+area);
// }

//#endregion

//#region 4 
// var str = "";
// for (let i = 0; i < 5; i++) {
//     str += "*"
//     console.log(str);
// }
//#endregion

//#region 5
// let count=0;
// for (let i = 0; i < 1000; i++) {
//     if ((i%3==0) && (i%5==0)) {
//         count++
//     }
    
// }
// console.log("numbers from 1 to 1000 that can be divided 3 and 5: "+count)
//#endregion

//#region 6
let num=prompt("Enter some number, please");
let reverse=0;
while (num>0) {
    let lastNumber = num%10;
    reverse= (reverse*10) + lastNumber;
    num = (num-lastNumber)/10;
}

console.log("Reverse of the number: "+reverse);
//#endregion