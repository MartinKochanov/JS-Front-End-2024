function solve(arrayData) {
    const meetings = {};

    for (const line of arrayData) {
        const [day, personName] = line.split(' ');

        if(!meetings.hasOwnProperty(day)) {
            meetings[day] = personName;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);