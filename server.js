const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Utility functions
function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecialCharacter(str) {
  return /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(str);
}

function processData(data) {
  try {
    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let allAlphabets = "";

    // Process each item in the input array
    data.forEach((item) => {
      if (isNumber(item)) {
        const num = parseInt(item);
        if (num % 2 === 0) {
          evenNumbers.push(item.toString()); // Keep as string
        } else {
          oddNumbers.push(item.toString()); // Keep as string
        }
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
        allAlphabets += item;
      } else if (isSpecialCharacter(item)) {
        specialCharacters.push(item);
      }
    });

    // Create concatenated string with alternating caps in reverse order
    let concatString = "";
    const reversedAlphabets = allAlphabets.split("").reverse();
    reversedAlphabets.forEach((char, index) => {
      if (index % 2 === 0) {
        concatString += char.toUpperCase();
      } else {
        concatString += char.toLowerCase();
      }
    });

    return {
      is_success: true,
      user_id: "khushi_agarwal_21112003",
      email: "mailkhushiag.21@gmail.com",
      roll_number: "22BCE11221",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum.toString(), // Return sum as string
      concat_string: concatString,
    };
  } catch (error) {
    return {
      is_success: false,
      error: "Error processing data",
    };
  }
}

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// API routes
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Input must be an array in 'data' field",
      });
    }

    // Process the data
    const result = processData(data);

    if (result.is_success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    console.error("Error in /bfhl endpoint:", error);
    res.status(500).json({
      is_success: false,
      error: "Internal server error",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Catch-all route - serve frontend for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).json({
    is_success: false,
    error: "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 BFHL API server running on port ${PORT}`);
  console.log(`📡 POST endpoint: http://localhost:${PORT}/bfhl`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
