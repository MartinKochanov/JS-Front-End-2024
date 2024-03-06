function solve(password) {

    let result = '';

    result += checkLength(password.length);
    result += onlyLettersAndDigits(password);
    result += twoDigitsMin(password);

    function checkLength(length) {
        return (length >= 6 && length <= 10) ? '' : 'Password must be between 6 and 10 characters\n';
    }

    function onlyLettersAndDigits(password) {
        return password.match(/^[a-zA-Z0-9]+$/) ? '' : 'Password must consist only of letters and digits\n';
    }

    function twoDigitsMin(password) {
        return password
            .split('')
            .filter(character => Number.isInteger(Number(character)))
            .length >= 2 ? '' : 'Password must have at least 2 digits\n';
    }

    console.log(!result ? 'Password is valid' : result.trim());

}


function solve2(password) {
    let checkLength = (password) => (password.length >= 6 && password.length <= 10);
    let onlyLettersAndDigits = (password) => password.match(/^[a-zA-Z0-9]+$/);
    let twoDigitsMin = (password) => password.split('').filter(character => Number.isInteger(Number(character))).length >= 2;

    let validations =
        [[checkLength, 'Password must be between 6 and 10 characters'],
        [onlyLettersAndDigits, 'Password must consist only of letters and digits'],
        [twoDigitsMin, 'Password must have at least 2 digits']
        ]

    let errors = validations.map(([validator, message]) => validator(password) ? '' : message)
        .filter(message => message);

    errors.forEach(message => console.log(message));

    if (errors.length === 0) {
        console.log('Password is valid');
    }
}

console.log('SOLVE 1\n');

solve2('logIn');
console.log('---------------')
solve2('MyPass123');
console.log('---------------')
solve2('Pa$s$s');

console.log('');
console.log('SOLVE2\n');

solve2('logIn');
console.log('---------------')
solve2('MyPass123');
console.log('---------------')
solve2('Pa$s$s');
