function login(array) {
    const username = array.shift();
    const password = username.split('').reverse().join('');
    let logged = false;
    let counter = 0;

        for (const word of array) {

            if (word !== password) {
                if(counter === 3) {
                    console.log(`User ${username} blocked!`);
                    return;
                }
                console.log('Incorrect password. Try again.')
                
            } else {
                console.log(`User ${username} logged in.`)
                logged = true;
                return;
            }
            counter ++;
        }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])