function bitcoin(goldPerDays) {
    const priceBitcoin =  11949.16;
    const priceGold = 67.51;
    let totalBitcoinsBought = 0;
    let totalMoney = 0;
    day = 1;
    dayOfBuyingTheFirstBitcoin = Number.MAX_SAFE_INTEGER;

    while(goldPerDays.length > 0) {
        let goldInGrams = goldPerDays.shift();

        if(day % 3 === 0) {
            goldInGrams -= goldInGrams * 0.3;
        }

        totalMoney += goldInGrams * priceGold;

        if(totalMoney >= priceBitcoin) {
            let bitcoinBought = Math.floor(totalMoney / priceBitcoin);
            totalMoney -= bitcoinBought * priceBitcoin;
            totalBitcoinsBought += bitcoinBought;
            
            if(day < dayOfBuyingTheFirstBitcoin) {
                dayOfBuyingTheFirstBitcoin = day;
            }
        }

        day++;
    }

    console.log(`Bought bitcoins: ${totalBitcoinsBought}`);
    if (dayOfBuyingTheFirstBitcoin < Number.MAX_SAFE_INTEGER ) {
    console.log(`Day of the first purchased bitcoin: ${dayOfBuyingTheFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300]);
bitcoin([3124.15, 504.212, 2511.124]);