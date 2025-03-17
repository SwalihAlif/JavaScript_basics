function convertDateToString(dates) {
    let converted = dates.map(date => date.toDateString());
    return converted;
}

const dates = [new Date(2023, 0, 1), new Date(2024, 0, 1)];

console.log(convertDateToString(dates));