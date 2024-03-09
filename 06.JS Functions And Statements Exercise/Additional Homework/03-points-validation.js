function solve(coordinates) {

    const validate = (x1, y1, x2 = 0, y2 = 0) => {

        let result = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));

        return Number.isInteger(result) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    console.log(validate(coordinates[0], coordinates[1]));
    console.log(validate(coordinates[2], coordinates[3]));
    console.log(validate(coordinates[0], coordinates[1], coordinates[2],coordinates[3]));
}
solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);