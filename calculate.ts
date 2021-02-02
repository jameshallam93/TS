type Operation = ("multiply"|"divide"|"add")

interface NumberValues  {
    value1:number,
    value2:number,
    operation:Operation
}

const establishOperation =(operation:string):Operation =>{
    switch (operation){
    case "multiply":
        return "multiply";
    case "add":
        return "add";
    case "divide":
        return "divide";
    default:
        throw new Error("incorrect operator")
}}

const parseValues = (values: Array<string>):NumberValues =>{
    if (values.length < 5){
        throw new Error("not enough arguments")
    }else if (values.length > 5){
        throw new Error("too many arguments")
    }
    const value1 = Number(values[2])
    const value2 = Number(values[3])
    if (!isNaN(value1) && !isNaN(value2)){
        return {value1: value1,
            value2: value2,
            operation: establishOperation(values[4])}
    } else {
        throw new Error("Arguments provided were not numbers")
    }
}
const calculate = (num1:number, num2:number, op:Operation):number =>{
    switch (op){
        case "multiply":
            return num1*num2;
        case "add":
            return num1+num2;
        case "divide":
            if(num2 === 0){
                throw new Error("Can't divide by 0")
            }
            return num1/num2
        default:
            throw new Error("invalid operation provided")
    }
}
try{
const {value1, value2, operation} = parseValues(process.argv)
console.log(calculate(value1, value2, operation))
}catch(e){
    console.log(e.message);

}

