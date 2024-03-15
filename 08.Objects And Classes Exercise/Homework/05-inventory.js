function solve(arrayData) {

    const heroes = []

    for (const line of arrayData) {
        const [heroName, heroLevel, ...items] = line.split(' / ');

        heroes.push({ heroName, heroLevel: Number(heroLevel), items });
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel).forEach(hero => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items}`);
    })
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])