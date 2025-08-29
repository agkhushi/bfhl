// BFHL API Frontend JavaScript
class BFHLAPITester {
  constructor() {
    this.apiBaseUrl = ""; // Will be set based on current location
    this.init();
  }

  init() {
    this.setApiUrl();
    this.bindEvents();
    this.checkApiStatus();
  }

  setApiUrl() {
    // If running locally, use localhost, otherwise use current domain
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      this.apiBaseUrl = "http://localhost:3000";
    } else {
      this.apiBaseUrl = window.location.origin;
    }
  }

  bindEvents() {
    // Submit button
    document.getElementById("submitBtn").addEventListener("click", () => {
      this.testAPI();
    });

    // Quick test buttons
    document.querySelectorAll(".test-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.loadExample(e.target.dataset.example);
      });
    });

    // Enter key in textarea
    document.getElementById("dataInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        this.testAPI();
      }
    });
  }

  async checkApiStatus() {
    const statusIndicator = document.getElementById("statusIndicator");
    const statusDetails = document.getElementById("statusDetails");
    const statusDot = statusIndicator.querySelector(".status-dot");
    const statusText = statusIndicator.querySelector(".status-text");

    try {
      const response = await fetch(`${this.apiBaseUrl}/health`);
      if (response.ok) {
        const data = await response.json();
        statusDot.className = "status-dot online";
        statusText.textContent = "Online";
        statusDetails.innerHTML = `
                    <p>✅ API is running successfully</p>
                    <p><strong>Status:</strong> ${data.status}</p>
                    <p><strong>Last Check:</strong> ${new Date(
                      data.timestamp
                    ).toLocaleString()}</p>
                `;
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      statusDot.className = "status-dot offline";
      statusText.textContent = "Offline";
      statusDetails.innerHTML = `
                <p>❌ Unable to connect to API</p>
                <p><strong>Error:</strong> ${error.message}</p>
                <p><strong>URL:</strong> ${this.apiBaseUrl}/health</p>
            `;
    }
  }

  loadExample(exampleType) {
    const examples = {
      "example-a": ["a", "1", "334", "4", "R", "$"],
      "example-b": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
      "example-c": ["A", "ABcD", "DOE"],
    };

    const dataInput = document.getElementById("dataInput");
    dataInput.value = JSON.stringify(examples[exampleType], null, 2);

    // Update active button state
    document.querySelectorAll(".test-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  async testAPI() {
    const submitBtn = document.getElementById("submitBtn");
    const dataInput = document.getElementById("dataInput");
    const resultsSection = document.getElementById("resultsSection");
    const errorSection = document.getElementById("errorSection");

    // Hide previous results/errors
    resultsSection.style.display = "none";
    errorSection.style.display = "none";

    // Validate input
    let data;
    try {
      data = JSON.parse(dataInput.value.trim());
      if (!Array.isArray(data)) {
        throw new Error("Input must be an array");
      }
    } catch (error) {
      this.showError(`Invalid JSON format: ${error.message}`);
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="loading"></div> Testing...';

    try {
      const response = await fetch(`${this.apiBaseUrl}/bfhl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.is_success) {
        this.showResults(responseData, response.status);
      } else {
        this.showError(responseData.error || "API request failed");
      }
    } catch (error) {
      this.showError(`Network error: ${error.message}`);
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Test API';
    }
  }

  showResults(data, statusCode) {
    const resultsSection = document.getElementById("resultsSection");
    const errorSection = document.getElementById("errorSection");

    // Hide error section
    errorSection.style.display = "none";

    // Update status
    document.getElementById("responseStatus").textContent = "Success";
    document.getElementById("responseStatus").className = "status-badge";
    document.getElementById("statusCode").textContent = statusCode;

    // Update user info
    document.getElementById("userId").textContent = data.user_id || "-";
    document.getElementById("userEmail").textContent = data.email || "-";
    document.getElementById("rollNumber").textContent = data.roll_number || "-";

    // Update numbers
    document.getElementById("evenNumbers").textContent = this.formatArray(
      data.even_numbers
    );
    document.getElementById("oddNumbers").textContent = this.formatArray(
      data.odd_numbers
    );
    document.getElementById("sum").textContent = data.sum || "0";

    // Update text data
    document.getElementById("alphabets").textContent = this.formatArray(
      data.alphabets
    );
    document.getElementById("specialChars").textContent = this.formatArray(
      data.special_characters
    );
    document.getElementById("concatString").textContent =
      data.concat_string || "-";

    // Update raw response
    document.getElementById("rawResponse").textContent = JSON.stringify(
      data,
      null,
      2
    );

    // Show results
    resultsSection.style.display = "block";

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }

  showError(message) {
    const resultsSection = document.getElementById("resultsSection");
    const errorSection = document.getElementById("errorSection");
    const errorMessage = document.getElementById("errorMessage");

    // Hide results section
    resultsSection.style.display = "none";

    // Show error
    errorMessage.textContent = message;
    errorSection.style.display = "block";

    // Scroll to error
    errorSection.scrollIntoView({ behavior: "smooth" });
  }

  formatArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "None";
    }
    return arr.join(", ");
  }

  // Method to update API URL (useful for testing different endpoints)
  updateApiUrl(newUrl) {
    this.apiBaseUrl = newUrl;
    this.checkApiStatus();
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.bfhlTester = new BFHLAPITester();

  // Add some helpful tips
  console.log("🚀 BFHL API Tester loaded successfully!");
  console.log("💡 Tips:");
  console.log("   - Use Ctrl+Enter to submit from textarea");
  console.log("   - Click quick test buttons for examples");
  console.log("   - Check API status in the status card");
});

// Add some additional utility functions
window.BFHLUtils = {
  // Format data for display
  formatData: (data) => {
    if (Array.isArray(data)) {
      return data.join(", ");
    }
    return String(data);
  },

  // Validate JSON input
  validateJSON: (input) => {
    try {
      const parsed = JSON.parse(input);
      return { valid: true, data: parsed };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  },

  // Copy to clipboard
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    }
  },
};
