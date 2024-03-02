function piramid(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    let step = 1;

    while (base > 0) {

        if (base === 2 || base == 1) {
            totalGold += Math.pow(base, 2) * increment;
            break;
        }

        let outherLayer = (4 * base) - 4;
        totalStone += (Math.pow(base, 2) - outherLayer) * increment;

        if (step % 5 === 0) {
            totalLapis += outherLayer * increment;
        } else {
            totalMarble += outherLayer * increment;
        }

        base -= 2;
        step++;
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`)
    console.log(`Gold required: ${Math.ceil(totalGold)}`)
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`)

}

piramid(11, 1);
console.log('\n-----------------------\n');
piramid(11, 0.75);
console.log('\n-----------------------\n');
piramid(12, 1);
