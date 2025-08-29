# BFHL API - VIT Full Stack 

A complete REST API solution with a beautiful frontend interface for VIT's Full Stack Question Paper.

## 🎯 Project Overview

This project includes:

- **Backend API** - Node.js/Express REST API at `/bfhl` endpoint
- **Frontend Interface** - Modern, responsive web application for testing the API
- **Complete Testing** - All examples from the question paper working perfectly

## 🚀 Quick Start

### 1. Backend API

```bash
# Install dependencies
npm install

# Start the API server
npm start

# The API will be running at http://localhost:3001
```

### 2. Frontend Interface

```bash
# Navigate to frontend folder
cd dist

# Serve the frontend (choose one option)
python -m http.server 8080    # Python 3
# OR
npx serve -s . -l 8080        # Node.js

# Open http://localhost:8080 in your browser
```

## 🌟 Features

### Backend API

- ✅ **POST endpoint** at `/bfhl` route
- ✅ **Input validation** with proper error handling
- ✅ **Data categorization** (numbers, alphabets, special characters)
- ✅ **String conversion** for all numeric outputs
- ✅ **Alternating caps** concatenation in reverse order
- ✅ **Comprehensive error handling** with appropriate HTTP status codes
- ✅ **CORS enabled** for cross-origin requests
- ✅ **Security headers** with Helmet
- ✅ **Health check** endpoint

### Frontend Interface

- ✅ **Real-time API status** monitoring
- ✅ **JSON array input** with validation
- ✅ **Quick test examples** (A, B, C from question paper)
- ✅ **Beautiful results display** with organized data presentation
- ✅ **Responsive design** for all devices
- ✅ **Error handling** and user feedback
- ✅ **Modern UI/UX** with smooth animations

## 🧪 Testing Examples

All examples from the VIT question paper are working perfectly:

### Example A

**Input:** `["a", "1", "334", "4", "R", "$"]`
**Expected Output:** Numbers as strings, alphabets uppercase, special chars, sum "339", concat "Ra"

### Example B

**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
**Expected Output:** Even numbers ["2", "4", "92"], odd numbers ["5"], alphabets ["A", "Y", "B"], sum "103", concat "ByA"

### Example C

**Input:** `["A", "ABcD", "DOE"]`
**Expected Output:** No numbers, alphabets ["A", "ABCD", "DOE"], sum "0", concat "EoDdCbAa"

## 📁 Project Structure

```
bfhl-api/
├── server.js              # Main API server
├── package.json           # Dependencies and scripts
├── test-examples.js       # API testing script
├── vercel.json            # Vercel deployment config
├── deploy.md              # Deployment guide
├── dist/                  # Frontend application
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS styling
│   ├── script.js          # JavaScript functionality
│   └── README.md          # Frontend setup guide
└── README.md              # This file
```

## 🌐 API Endpoints

### POST `/bfhl`

Processes an array of data and returns categorized results.

**Request Body:**

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET `/health`

Returns the health status of the API.

## 🎨 Frontend Usage

1. **Open the frontend** in your browser
2. **Check API status** - ensure the API is running
3. **Input your data** - enter a JSON array in the textarea
4. **Use quick examples** - click Example A, B, or C buttons
5. **Test the API** - click "Test API" button
6. **View results** - see organized, beautiful results display

## 🚀 Deployment

### Backend API Deployment

- **Vercel** (Recommended) - Fast and easy
- **Railway** - Auto-detects Node.js
- **Render** - Simple web service setup

### Frontend Deployment

- **Vercel** - Static site hosting
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Free hosting for public repos

## 📝 Important Notes

- **Numbers are returned as strings** in all arrays and sum field
- **User ID format:** `{full_name_ddmmyyyy}` (lowercase)
- **HTTP 200** status for successful requests
- **Proper error handling** with appropriate status codes
- **Input validation** ensures data integrity
- **Frontend automatically detects** API URL (localhost vs production)

## 🔒 Security Features

- Helmet.js for security headers
- Input validation and sanitization
- Error handling without exposing internal details
- CORS configuration

## 🐛 Error Handling

The API returns appropriate HTTP status codes:

- **200**: Success
- **400**: Bad Request (invalid input)
- **404**: Route not found
- **500**: Internal server error

## 📊 Response Format

All successful responses include:

- `is_success`: Boolean indicating operation status
- `user_id`: Formatted user identifier
- `email`: Email address
- `roll_number`: College roll number
- `odd_numbers`: Array of odd numbers (as strings)
- `even_numbers`: Array of even numbers (as strings)
- `alphabets`: Array of uppercase alphabets
- `special_characters`: Array of special characters
- `sum`: Sum of all numbers (as string)
- `concat_string`: Alternating caps concatenation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request



