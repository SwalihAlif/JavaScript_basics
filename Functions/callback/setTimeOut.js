function fetchData(callback) {
    console.log("Fetchin data...");

    setTimeout(() => {
        callback("Data fetched after 2 seconds");
    }, 2000)
}

fetchData((data) => {
    console.log(data)
})