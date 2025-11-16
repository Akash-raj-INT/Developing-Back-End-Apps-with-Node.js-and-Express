markdown
# 📚 Book Shop REST API Project

Complete implementation of a Book Shop API with authentication and async operations.

## 📁 Project Structure
bookshop-api/
├── index.js                 # Main server file
├── package.json             # Dependencies and scripts
├── async_operations.js      # Tasks 10-13 (Async methods)
├── README.md               # This file
└── router/
├── booksdb.js          # Book database
├── general.js          # Public routes (Tasks 1-6)
└── auth_users.js       # Authenticated routes (Tasks 7-9)


## 🚀 Quick Start

### 1. Create Project Structure
```bash
mkdir bookshop-api
cd bookshop-api
mkdir router


### 2. Create All Files

Copy the code for each file from the artifacts provided, or use the file contents below.

### 3. Install Dependencies
```bash
npm install


### 4. Start the Server
```bash
npm start

You should see: `Server is running on port 5000`

### 5. Test Async Operations (Optional)
Open a **NEW terminal** window:
```bash
npm test


## 📋 API Endpoints Reference

### General Users (No Authentication Required)

#### Task 1: Get All Books
- **Method:** GET
- **URL:** `http://localhost:5000/`
- **Screenshot:** `1-getallbooks.png`

#### Task 2: Get Book by ISBN
- **Method:** GET
- **URL:** `http://localhost:5000/isbn/1`
- **Screenshot:** `2-getdetailsISBN.png`

#### Task 3: Get Books by Author
- **Method:** GET
- **URL:** `http://localhost:5000/author/Chinua Achebe`
- **Screenshot:** `3-getbooksbyauthor.png`

#### Task 4: Get Books by Title
- **Method:** GET
- **URL:** `http://localhost:5000/title/Things Fall Apart`
- **Screenshot:** `4-getbooksbytitle.png`

#### Task 5: Get Book Reviews
- **Method:** GET
- **URL:** `http://localhost:5000/review/1`
- **Screenshot:** `5-getbookreview.png`

#### Task 6: Register New User
- **Method:** POST
- **URL:** `http://localhost:5000/register`
- **Body (JSON):**
```json
{
"username": "testuser",
"password": "password123"
}

- **Screenshot:** `6-register.png`

### Authenticated Users (Login Required)

#### Task 7: Login
- **Method:** POST
- **URL:** `http://localhost:5000/customer/login`
- **Body (JSON):**
```json
{
"username": "testuser",
"password": "password123"
}

- **Screenshot:** `7-login.png`

#### Task 8: Add/Modify Review
- **Method:** PUT
- **URL:** `http://localhost:5000/customer/auth/review/1?review=Excellent book!`
- **Note:** Must be logged in first
- **Screenshot:** `8-reviewadded.png`

#### Task 9: Delete Review
- **Method:** DELETE
- **URL:** `http://localhost:5000/customer/auth/review/1`
- **Note:** Must be logged in first
- **Screenshot:** `9-deletereview.png`

## 🔧 Testing with Postman

### Step 1: Download Postman
Visit: https://www.postman.com/downloads/

### Step 2: Create New Request
1. Click "New" → "HTTP Request"
2. Select method (GET, POST, PUT, DELETE)
3. Enter URL
4. For POST requests, go to "Body" → "raw" → "JSON"

### Step 3: Test Tasks 1-6 (Public)
Just enter URL and send request

### Step 4: Test Task 7 (Login)
1. POST to `/customer/login` with credentials
2. Postman automatically saves the session cookie

### Step 5: Test Tasks 8-9 (Authenticated)
1. After login, the session is saved
2. Send PUT/DELETE requests directly
3. If you get "User not logged in", login again

## 💻 Testing with curl (Alternative)
```bash
