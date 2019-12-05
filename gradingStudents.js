function gradingStudents(grades) {
    let gradesStd = grades.splice(1, grades[0])
    let arr = []

    const greaterThanForty = (num) => {
        return num >= 38
    }
    const roundNum = (num) => {
        let num1 = 0;
        if (num % 5 >= 3) {
            num1 = num + (5 - (num % 5))
            return num1
        } else {
            return num
        }
    }

    gradesStd.map((num) => {
        if (greaterThanForty(num)) {
            arr.push(roundNum(num))
        } else {
            arr.push(num)
        }
    })
    return arr
}

console.log(gradingStudents([4, 73, 67, 38, 33]))