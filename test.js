const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// Test data from the question paper examples
const testCases = [
  {
    name: "Example A",
    input: ["a", "1", "334", "4", "R", "$"],
    expected: {
      odd_numbers: ["1"],
      even_numbers: ["334", "4"],
      alphabets: ["A", "R"],
      special_characters: ["$"],
      sum: "339",
      concat_string: "Ra",
    },
  },
  {
    name: "Example B",
    input: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
    expected: {
      odd_numbers: ["5"],
      even_numbers: ["2", "4", "92"],
      alphabets: ["A", "Y", "B"],
      special_characters: ["&", "-", "*"],
      sum: "103",
      concat_string: "ByA",
    },
  },
  {
    name: "Example C",
    input: ["A", "ABcD", "DOE"],
    expected: {
      odd_numbers: [],
      even_numbers: [],
      alphabets: ["A", "ABCD", "DOE"],
      special_characters: [],
      sum: "0",
      concat_string: "EoDdCbAa",
    },
  },
];

async function testAPI() {
  console.log("🧪 Testing BFHL API...\n");

  try {
    // Test health endpoint
    console.log("1. Testing health endpoint...");
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log("✅ Health check passed:", healthResponse.data);

    // Test root endpoint
    console.log("\n2. Testing root endpoint...");
    const rootResponse = await axios.get(`${BASE_URL}/`);
    console.log("✅ Root endpoint passed:", rootResponse.data);

    // Test all examples
    console.log("\n3. Testing all examples...\n");

    for (const testCase of testCases) {
      console.log(`--- Testing ${testCase.name} ---`);
      console.log(`Input: ${JSON.stringify(testCase.input)}`);

      try {
        const response = await axios.post(`${BASE_URL}/bfhl`, {
          data: testCase.input,
        });

        console.log(`✅ Status: ${response.status}`);
        console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);

        // Validate response structure
        const requiredFields = [
          "is_success",
          "user_id",
          "email",
          "roll_number",
          "odd_numbers",
          "even_numbers",
          "alphabets",
          "special_characters",
          "sum",
          "concat_string",
        ];

        const missingFields = requiredFields.filter(
          (field) => !(field in response.data)
        );

        if (missingFields.length > 0) {
          console.log(`❌ Missing fields: ${missingFields.join(", ")}`);
        } else {
          console.log("✅ All required fields present");
        }

        // Validate specific expected values
        let allTestsPassed = true;
        for (const [key, expectedValue] of Object.entries(testCase.expected)) {
          if (
            JSON.stringify(response.data[key]) !== JSON.stringify(expectedValue)
          ) {
            console.log(
              `❌ ${key}: Expected ${JSON.stringify(
                expectedValue
              )}, Got ${JSON.stringify(response.data[key])}`
            );
            allTestsPassed = false;
          }
        }

        if (allTestsPassed) {
          console.log("✅ All expected values match!");
        }
      } catch (error) {
        console.log(
          `❌ Error testing ${testCase.name}:`,
          error.response?.data || error.message
        );
      }

      console.log("");
    }

    // Test error handling
    console.log("4. Testing error handling...");

    try {
      await axios.post(`${BASE_URL}/bfhl`, {});
      console.log("❌ Should have rejected empty request");
    } catch (error) {
      if (error.response?.status === 400) {
        console.log("✅ Properly rejected invalid request");
      } else {
        console.log("❌ Unexpected error response:", error.response?.status);
      }
    }

    try {
      await axios.post(`${BASE_URL}/bfhl`, { data: "not an array" });
      console.log("❌ Should have rejected non-array data");
    } catch (error) {
      if (error.response?.status === 400) {
        console.log("✅ Properly rejected non-array data");
      } else {
        console.log("❌ Unexpected error response:", error.response?.status);
      }
    }

    console.log("\n🎉 API testing completed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    if (error.code === "ECONNREFUSED") {
      console.log("💡 Make sure the server is running on port 3000");
      console.log("   Run: npm start");
    }
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testAPI();
}

module.exports = { testAPI };
