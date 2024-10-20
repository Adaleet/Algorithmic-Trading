// src/index.ts

// Example function to display a message
const displayMessage = (message: string) => {
    console.log(message);
};

// Display a welcome message
displayMessage("Hello, welcome to the Algorithmic Trading App!");

// Example of fetching some dummy data (can be replaced with real API requests)
async function fetchData() {
    const data = [
        { time: "2024-01-01", price: 100 },
        { time: "2024-01-02", price: 105 },
        { time: "2024-01-03", price: 103 }
    ];
    console.log("Fetched data:", data);
}

// Call the function to fetch data
fetchData();
