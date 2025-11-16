const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Task 10: Get all books using async callback function
function getAllBooksCallback(callback) {
    axios.get(`${BASE_URL}/`)
        .then(response => {
            callback(null, response.data);
        })
        .catch(error => {
            callback(error.message, null);
        });
}

// Task 11: Search by ISBN using Promises
function getBookByISBN(isbn) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/isbn/${isbn}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.message);
            });
    });
}

// Task 12: Search by Author using async/await
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Task 13: Search by Title using async/await
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Main execution function
async function runAllTests() {
    console.log("=" .repeat(60));
    console.log("BOOK SHOP API - ASYNC OPERATIONS TEST");
    console.log("=" .repeat(60));
    console.log("Make sure the server is running on http://localhost:5000\n");

    // Task 10: Callback
    console.log("=== Task 10: Get all books using ASYNC CALLBACK ===");
    getAllBooksCallback((error, data) => {
        if (error) {
            console.error("❌ Error:", error);
        } else {
            console.log("✅ Success! Retrieved", Object.keys(data).length, "books");
            console.log(JSON.stringify(data, null, 2));
        }
        console.log("\n");
    });

    // Wait for callback to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Task 11: Promises
    console.log("=== Task 11: Search by ISBN using PROMISES ===");
    getBookByISBN(1)
        .then(data => {
            console.log("✅ Success! Book found:");
            console.log(JSON.stringify(data, null, 2));
            console.log("\n");
        })
        .catch(error => {
            console.error("❌ Error:", error);
            console.log("\n");
        });

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Task 12: Async/Await - Author
    console.log("=== Task 12: Search by AUTHOR using ASYNC/AWAIT ===");
    try {
        const authorBooks = await getBooksByAuthor("Chinua Achebe");
        console.log("✅ Success! Books found:");
        console.log(JSON.stringify(authorBooks, null, 2));
    } catch (error) {
        console.error("❌ Error:", error);
    }
    console.log("\n");

    await new Promise(resolve => setTimeout(resolve, 500));

    // Task 13: Async/Await - Title
    console.log("=== Task 13: Search by TITLE using ASYNC/AWAIT ===");
    try {
        const titleBooks = await getBooksByTitle("Things Fall Apart");
        console.log("✅ Success! Books found:");
        console.log(JSON.stringify(titleBooks, null, 2));
    } catch (error) {
        console.error("❌ Error:", error);
    }
    console.log("\n");

    console.log("=" .repeat(60));
    console.log("ALL TESTS COMPLETED");
    console.log("=" .repeat(60));
}

// Check if server is running before starting tests
axios.get(`${BASE_URL}/`)
    .then(() => {
        console.log("✅ Server is running. Starting tests...\n");
        runAllTests();
    })
    .catch(() => {
        console.error("❌ ERROR: Server is not running!");
        console.error("Please start the server first with: npm start");
        console.error("Then run this script in a separate terminal with: node async_operations.js");
        process.exit(1);
    });
