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

  this.read = function() {
    this.num1 = +prompt('a?', 0);
    this.num2 = +prompt('b?', 0);
  };
  
 this.sum = function(){
    return this.num1 + this.num2;
  }
  
  this.multiply = function() {
    return this.num1 * this.num2;
  }
  
  this.subtract = function() {
    return this.num1 - this.num2;
  }
  
  this.divide = function() {
    return this.num1 / this.num2;
  }
}
let Calc = new Calculator();
Calc.read();

console.log( "Sum=" + Calc.sum() );
console.log( "Mul=" + Calc.multiply() );
console.log( "Subtr=" + Calc.subtract() ); 
console.log( "Div=" + Calc.divide() );

