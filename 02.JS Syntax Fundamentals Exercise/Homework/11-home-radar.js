function solve(speed, zone) {

    let limit = 0;
    let difference;
    switch (zone) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed > limit) {
        difference = function () {
            if (speed - limit <= 0) {
                return;
            } else if (speed - limit <= 20) {
                return 'speeding';
            } else if (speed - limit <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }();
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${difference}`);
    } else {

    console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
