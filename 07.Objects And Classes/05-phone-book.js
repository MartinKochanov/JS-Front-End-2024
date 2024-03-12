function solve(arrayData) {
    const phoneBook = {};
    for (const line of arrayData) {
        const [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);