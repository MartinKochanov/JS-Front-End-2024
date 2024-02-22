function solve(fightsLost, pricePerHelmet, pricePerSword, pricePerShield, pricePerArmor) {

    let helmetsTotalPrice = Math.floor(fightsLost / 2) * pricePerHelmet;
    let swordsTotlaPrice = Math.floor(fightsLost / 3) * pricePerSword;
    let shieldsTotalPrice = Math.floor(fightsLost / 6) * pricePerShield;
    let armorsTotalPrice = Math.floor(fightsLost / 12) * pricePerArmor;

    let expenses = helmetsTotalPrice + swordsTotlaPrice + shieldsTotalPrice + armorsTotalPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}


solve(7,2,3,4,5);
solve(23,12.50,21.50,40,200);