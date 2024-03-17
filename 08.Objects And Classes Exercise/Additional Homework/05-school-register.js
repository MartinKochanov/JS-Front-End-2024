function solve(arrayData) {

    const register = {};

    for (const line of arrayData) {
        let [studentNameString, gradeString, averageScoreString] = line.split(', ');

        const name = studentNameString.split(': ')[1];
        const grade = gradeString.split(': ')[1];
        const averageScore = Number(averageScoreString.split(': ')[1]);

        if (!register.hasOwnProperty(grade) && averageScore >= 3) {
            register[grade] = { students: [], averageScores: []};
        }
        if (averageScore >= 3) {
            register[grade].students.push(name);
            register[grade].averageScores.push(averageScore);
        }
    }

    for (const grade in register) {
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${register[grade].students.join(', ')}`);
        console.log(`Average annual score from last year: ${(register[grade].averageScores.reduce((acc, num) => acc + num, 0) / register[grade].students.length).toFixed(2)}`);
        console.log('');
    }

}

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])