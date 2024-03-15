function solve(arrayData) {

    const movies = [];

    class Movie {

        name = null;
        director = null;
        date = null;

        setDirector(director) {
            this.director = director;
        }

        setDate(date) {
            this.date = date;
        }

        setName(name) {
            this.name = name;
        }
    }


    for (let line of arrayData) {

        const movie = new Movie();

        if (line.includes('addMovie')) {
            line = line.replace('addMovie ', '');
            movie.setName(line);
            movies.push(movie);
        }

        if (line.includes('directedBy')) {

            line = line.replace(' directedBy ', ',');
            const movieName = line.split(',')[0];
            const director = line.split(',')[1];

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.setDirector(director);
                }
            });
        }

        if (line.includes('onDate')) {
            line = line.replace(' onDate ', ',');
            const movieName = line.split(',')[0];
            const date = line.split(',')[1];

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.setDate(date);
                }
            });
        }
    }

    movies.filter(movie => movie.name !== null)
        .filter(movie => movie.director !== null)
        .filter(movie => movie.date !== null)
        .forEach(movie => console.log(JSON.stringify(movie)));

}

solve(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
console.log('');