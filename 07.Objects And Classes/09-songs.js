function solve(arrayData) {
    const songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const n = arrayData.shift();
    const typeList = arrayData.pop();

    for (let i = 0; i < n; i++) {
        const [playList, name, time] = arrayData[i].split('_');
        songs.push(new Song(playList, name, time));
    }

    if (typeList === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs
            .filter(song => song.typeList === typeList)
            .forEach(song => console.log(song.name));
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);