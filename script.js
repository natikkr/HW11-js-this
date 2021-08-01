let counter = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
   console.log( this.step );
    return this;
  }
}
counter.up();
counter.up();
console.log(counter.showStep()) 



  
function Calculator() {

  this.sum = function (a) {

    return function sum1 (b){
      return a + b;
    }
  }
   
 this.multiply = function  (a) {
    return function multiply1  (b){
    return a * b;
  }
}
  this.subtract = function (a) {
    return function subtract1 (b){
    return a - b;
  }
}

 this.divide = function (a) {
  return function divide1 (b){
    return a / b;
  }
}
}

let Calc = new Calculator();
console.log(Calc.sum(2)); 
console.log(Calc.sum(1)(2))