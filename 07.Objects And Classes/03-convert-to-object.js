function solve(jsonData) {
    const object = JSON.parse(jsonData);

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');