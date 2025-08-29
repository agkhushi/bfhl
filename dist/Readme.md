# BFHL API Frontend - Dist Folder

This folder contains the built frontend application for testing the BFHL API.

## 🚀 Quick Start

### Option 1: Serve with Python (Recommended)

```bash
# Navigate to this folder
cd dist

# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

### Option 2: Serve with Node.js

```bash
# Install serve globally
npm install -g serve

# Serve the folder
serve -s . -l 8080
```

### Option 3: Use Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌐 Access the Application

Once served, open your browser and go to:

- **Local:** `http://localhost:8080`
- **Network:** `http://your-ip:8080`

## ⚙️ Configuration

The frontend automatically detects the API URL:

- **Local development:** Uses `http://localhost:3001` (when running on localhost)
- **Production:** Uses the current domain (when deployed)

## 🧪 Testing

1. **API Status:** Check if the API is running
2. **Input Array:** Enter your JSON array in the textarea
3. **Quick Tests:** Use the example buttons for predefined test cases
4. **Submit:** Click "Test API" to send the request

## 📱 Features

- ✅ Real-time API status monitoring
- ✅ JSON array input with validation
- ✅ Quick test examples (A, B, C)
- ✅ Beautiful results display
- ✅ Responsive design for all devices
- ✅ Error handling and user feedback

## 🔧 Troubleshooting

If you see "API Offline":

1. Make sure your BFHL API server is running
2. Check if the API is accessible at the expected URL
3. Verify CORS settings on the API server

## 📁 Files

- `index.html` - Main application HTML
- `styles.css` - Application styling
- `script.js` - Application logic and API integration
