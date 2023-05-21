const readline = require('readline-sync')

const input = readline.question

while(true){
    let Num1 = input('Enter the First Number : ');
    let Num2 = input('Enter the Second Number : ');
    let sym = input('Enter the Operator(+ or - or * or / or & or | or ^ or << or >> or >>>) : ');

    let calculator= {
        num1 : parseInt(Num1),
        num2 : parseInt(Num2),
        operator : sym,
        calculation: function() {
            if(this.operator === '+'){
                console.log(this.num1,'+',this.num2,'=',this.num1 + this.num2);
            }
            else if(this.operator === '-'){
                console.log(this.num1,'-',this.num2,'=',this.num1 - this.num2);
            }
            else if(this.operator === '*'){
                console.log(this.num1,'*',this.num2,'=',this.num1 * this.num2);
            }
            else if(this.operator === '/'){
                console.log(this.num1,'/',this.num2,'=',this.num1 / this.num2);
            }
            else if(this.operator === '&'){
                console.log(this.num1,'&',this.num2,'=',this.num1 & this.num2);
            }
            else if(this.operator === '|'){
                console.log(this.num1,'|',this.num2,'=',this.num1 | this.num2);
            }
            else if(this.operator === '^'){
                console.log(this.num1,'^',this.num2,'=',this.num1 ^ this.num2);
            }
            else if(this.operator === '<<'){
                console.log(this.num1,'<<',this.num2,'=',this.num1 << this.num2);
            }
            else if(this.operator === '>>'){
                console.log(this.num1,'>>',this.num2,'=',this.num1 >> this.num2);
            }
            else{
                console.log(this.num1,'>>>',this.num2,'=',this.num1 >>> this.num2);
            }
        }
    };

    calculator.calculation();

    if(input('Press q to exit the program or Press any key except q if you want to continue.') === 'q'){
        break;
    }
}



