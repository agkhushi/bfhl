const axios = require("axios");

const BASE_URL = "http://localhost:3001";

// Test all examples from the question paper
async function testExamples() {
  console.log("🧪 Testing BFHL API with Question Paper Examples\n");

  const examples = [
    {
      name: "Example A",
      data: ["a", "1", "334", "4", "R", "$"],
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
      data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
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
      data: ["A", "ABcD", "DOE"],
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

  for (const example of examples) {
    console.log(`--- Testing ${example.name} ---`);
    console.log(`Input: ${JSON.stringify(example.data)}`);

    try {
      const response = await axios.post(`${BASE_URL}/bfhl`, {
        data: example.data,
      });

      console.log(`✅ Status: ${response.status}`);
      console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);

      // Check if all required fields are present
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

      // Validate expected values
      let allTestsPassed = true;
      for (const [key, expectedValue] of Object.entries(example.expected)) {
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
      console.log(`❌ Error: ${error.response?.data?.error || error.message}`);
    }

    console.log("");
  }

  console.log("🎉 Testing completed!");
}

// Run tests
testExamples().catch(console.error);
