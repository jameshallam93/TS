
interface BmiValues {
    height:number,
    weight:number
}

const parseBmiValues = (values: Array<string>):BmiValues =>{
    const height = Number(process.argv[2])
    const weight = Number(process.argv[3])
    if (!isNaN(height) && !isNaN(weight)){
        return {
            height:height,
            weight: weight
        }
    }else{
        throw new Error("Please enter height (cm) and weight (kg) as numbers")
    }
}

const calculateBmi = (height:number, weight:number):string =>{
    console.log(`Height: ${height}, weight: ${weight}`)
    if (height === 0 || weight === 0){
        throw new Error("Cannot have 0 height or weight")
    }
    const bmi = weight / (height*height)
    if (bmi > 30){
        return "Obese( > 30)"
    }else if (bmi >25){
        return "Overweight (> 25)"
    }else if (bmi >18.5){
        return "Healthy weight (18.5-25)"
    }else{
        return "Underweight (< 18.5)"
    }
}

try{
const {height, weight} = parseBmiValues(process.argv)
console.log(calculateBmi(height, weight));

}catch(e){
    console.log(e.message);
    
}


