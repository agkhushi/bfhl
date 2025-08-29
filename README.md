# BFHL API - VIT Full Stack Question Paper

A REST API built with Node.js and Express that processes arrays and returns categorized data according to VIT's Full Stack Question Paper specifications.

## 🎯 Objective

Build and host a REST API (Method: POST) that takes in an array and returns:

1. Status
2. User ID
3. Email ID
4. College Roll Number
5. Array for even numbers
6. Array for odd numbers
7. Array for alphabets, converted to uppercase
8. Array for special characters
9. Sum of numbers
10. Concatenation of all alphabetical characters in reverse order with alternating caps

## 🚀 Features

- **POST endpoint** at `/bfhl`
- **Input validation** with proper error handling
- **Data categorization** (numbers, alphabets, special characters)
- **String conversion** for all numeric outputs
- **Alternating caps** concatenation in reverse order
- **Comprehensive error handling** with appropriate HTTP status codes
- **CORS enabled** for cross-origin requests
- **Security headers** with Helmet
- **Health check** endpoint

## 🛠️ Tech Stack

- **Node.js** with Express.js
- **CORS** for cross-origin requests
- **Helmet** for security headers
- **Nodemon** for development

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd bfhl-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

4. **Access the API**
   - Base URL: `http://localhost:3000`
   - Main endpoint: `POST http://localhost:3000/bfhl`
   - Health check: `GET http://localhost:3000/health`

## 📡 API Endpoints

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

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Testing Examples

### Example A

**Input:** `["a", "1", "334", "4", "R", "$"]`
**Expected Output:** Numbers as strings, alphabets uppercase, special chars, sum "339", concat "Ra"

### Example B

**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
**Expected Output:** Even numbers ["2", "4", "92"], odd numbers ["5"], alphabets ["A", "Y", "B"], sum "103", concat "ByA"

### Example C

**Input:** `["A", "ABcD", "DOE"]`
**Expected Output:** No numbers, alphabets ["A", "ABCD", "DOE"], sum "0", concat "EoDdCbAa"

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts to deploy

### Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect Node.js and deploy
3. Set environment variables if needed

### Render

1. Create new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

## 📝 Important Notes

- **Numbers are returned as strings** in all arrays and sum field
- **User ID format:** `{full_name_ddmmyyyy}` (lowercase)
- **HTTP 200** status for successful requests
- **Proper error handling** with appropriate status codes
- **Input validation** ensures data integrity

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

## 📄 License

MIT License - feel free to use this project for your VIT Full Stack Question Paper submission.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the error logs
2. Verify your input format
3. Ensure all dependencies are installed
4. Check the health endpoint

---

**Good luck with your VIT Full Stack Question Paper submission! 🎓✨**
