function main(){
  let firstValue = 200;
  let secVal = 300;

  function add(){
    let addVal = firstValue + secVal;
  console.log(addVal);
  
  }
 return add ;
}

// console.log(main());
let innerFunc = main();
// console.log(innerFunc);
innerFunc();
innerFunc();
innerFunc();
