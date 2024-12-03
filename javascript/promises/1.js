const fetchData = new Promise((resolve, reject) => {
    const data = "Fetched Data";
    setTimeout(() => {
        if (data) {
            resolve(data); // Successful operation
        } else {
            reject("No data available"); // Simulate failure
        }
    }, 2000);
});

fetchData
    .then((data) => {
        console.log("Success:", data); // Output: Success: Fetched Data
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operation completed."); // Always runs
    });
