

const exerciseFunctions = {

    periodLength  (hours:Array<number>):number {
        return hours.length
    },
    trainingDays (hours:Array<number>):number {
        return hours.reduce((total, hour) =>{
            if (hour !== 0){
                total++
            }
            return total
        })
    },
    totalHours (hours:Array<number>):number {
        const total = hours.reduce((total, hour) =>{
        total = total + hour
        return total
        })
        return total
    },

    success  (averageHours:number, target:number):boolean {
        return averageHours >= target
    },

    rating (averageHours:number, target:number):number {
        if (exerciseFunctions.success(averageHours, target)){
            return 3
        }else if(averageHours > target/2){
            return 2
        }else{
            return 1
        }
    },

    ratingDescription  (rating:number):string {
        if (rating ===3){
            return "Smashed it, well done!"
        }else if(rating ===2){
            return "Didn't hit your target, but good effort!"
        }else{
            return "Boo! try again next week!"
        }
    }
}
module.exports = {exerciseFunctions}