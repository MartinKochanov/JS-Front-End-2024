function calculate(numberOfPeople, typeOfGroup, day) {

    let price;
    let singlePrice;

    switch(typeOfGroup) {
        case 'Students':
            if(day === 'Friday') {
                singlePrice = 8.45;
            } else if (day === 'Saturday') {
                singlePrice = 9.80;
            } else if (day === 'Sunday') {
                singlePrice = 10.46;
            }

            price = numberOfPeople * singlePrice;

            if(numberOfPeople >= 30) {
                price -= price * 0.15;
            }
        break;

        case 'Business':
            if(day === 'Friday') {
                singlePrice = 10.90;
            } else if (day === 'Saturday') {
                singlePrice = 15.60;
            } else if (day === 'Sunday') {
                singlePrice = 16;
            }
            price = numberOfPeople * singlePrice;

            if(numberOfPeople >= 100) {
                price -= 10 * singlePrice; 
            }
        break;

        case 'Regular':
            if(day === 'Friday') {
                singlePrice = 15;
            } else if (day === 'Saturday') {
                singlePrice = 20;
            } else if (day === 'Sunday') {
                singlePrice = 22.50;
            }
            price = numberOfPeople * singlePrice;

            if(numberOfPeople >= 10 && numberOfPeople <= 20) {
                price -= price * 0.05;
            }
        break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

calculate(30, 'Students', 'Sunday');