function solve(fruit, weightInGrams, pricePerKg) {
    let weight = weightInGrams / 1000;
    let money = weight * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('banana', 2500, 1.80);