const helper = require("./exercise_helper").exerciseFunctions


interface Summary {
    periodLength:number,
    trainingDays:number,
    success:boolean,
    rating:number,
    ratingDescription:string,
    target:number,
    average:number
}

const target = 2

const parseExerciseHours = (hours:Array<string>):Array<number> =>{
    let numbers:Array<number> = []
    for (let i = 2;i < 9; i++){
        numbers.push(Number(hours[i]))
    }
    return numbers
}

const calculateExercise = (hours:Array<number>):Summary =>{

        const periodLength = helper.periodLength(hours)
        const trainingDays = helper.trainingDays(hours)
        const totalHours = helper.totalHours(hours)
        const averageHours = totalHours/periodLength
        const success = helper.success(averageHours, target)
        const rating = helper.rating(averageHours, target)
        const ratingDescription = helper.ratingDescription(rating)

    return {
        periodLength: periodLength,
        trainingDays:trainingDays,
        success:success,
        rating: rating,
        ratingDescription:ratingDescription,
        target:target,
        average: averageHours
    }
}



try{
    const numbers:Array<number> = parseExerciseHours(process.argv)
    console.log(calculateExercise(numbers))
} catch(e){
    console.log(e.message)
}



