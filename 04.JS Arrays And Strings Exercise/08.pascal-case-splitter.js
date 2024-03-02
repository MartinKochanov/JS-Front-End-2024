function solve(text) {
    const words = text.match(/[A-Z\d*][a-z]*/g).join(', ')

  console.log(words);
}

solve('Spl2itMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');