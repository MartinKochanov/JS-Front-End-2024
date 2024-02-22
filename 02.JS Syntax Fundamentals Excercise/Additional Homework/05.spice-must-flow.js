function mining(yield) {

    let days = 0;
    let totalYieldExtracted = 0;
    let yieldExtractedPerDay = 0;

    while (yield >= 100) {
        yieldExtractedPerDay = yield - 26;
        totalYieldExtracted += yieldExtractedPerDay
        yield -= 10;
        days++;
    }

    totalYieldExtracted -= 26;

    if (totalYieldExtracted < 0) {
        totalYieldExtracted = 0;
    }

    console.log(days);
    console.log(totalYieldExtracted);
}