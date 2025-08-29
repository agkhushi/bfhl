# 🚀 Frontend Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Fastest)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy from dist folder**

   ```bash
   cd dist
   vercel
   ```

3. **Follow prompts:**

   - Link to existing project: No
   - Project name: bfhl-frontend (or default)
   - Directory: ./ (current directory)
   - Override settings: No

4. **Your frontend will be live at:**
   ```
   https://your-project-name.vercel.app
   ```

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the entire `dist` folder to the deploy area
4. Your site will be live instantly with a random URL
5. Customize the URL in site settings

### Option 3: GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: Deploy from a branch
4. Branch: main (or master)
5. Folder: /dist
6. Save and wait for deployment

### Option 4: Surge.sh (Simple)

```bash
# Install surge globally
npm install -g surge

# Deploy from dist folder
cd dist
surge

# Follow prompts to set custom domain
```

## 🔧 Configuration After Deployment

### Update API URL (if needed)

If your API is hosted on a different domain, you may need to update the frontend configuration:

1. **Open the deployed frontend**
2. **Open browser console** (F12)
3. **Update API URL:**
   ```javascript
   window.bfhlTester.updateApiUrl("https://your-api-domain.com");
   ```

### CORS Issues

If you encounter CORS issues:

1. Ensure your API has CORS enabled
2. Check that the API domain is allowed
3. Verify the API is accessible from the frontend domain

## 🧪 Testing Your Deployed Frontend

1. **Open your deployed frontend URL**
2. **Check API Status** - should show "Online" if API is accessible
3. **Test with examples:**
   - Click "Example A" button
   - Click "Test API" button
   - Verify results are displayed correctly

## 📱 Features to Test

- ✅ **API Status Monitoring** - Shows real-time connection status
- ✅ **Array Input** - Textarea accepts JSON arrays
- ✅ **Quick Examples** - A, B, C buttons load predefined data
- ✅ **API Testing** - Submit button sends requests
- ✅ **Results Display** - Beautiful, organized results
- ✅ **Error Handling** - Shows errors gracefully
- ✅ **Responsive Design** - Works on all devices

## 🎯 Success Checklist

Before submitting:

- [ ] Frontend is deployed and accessible
- [ ] API status shows "Online"
- [ ] All example buttons work (A, B, C)
- [ ] Array input accepts JSON data
- [ ] Submit button works correctly
- [ ] Results are displayed properly
- [ ] Error handling works
- [ ] Responsive design works on mobile

## 🔗 Integration with Your API

The frontend will automatically:

- **Detect localhost** → Use `http://localhost:3001` for API
- **Detect production** → Use current domain for API
- **Show real-time status** of API connectivity
- **Handle API errors** gracefully
- **Display results** in organized format

## 💡 Tips for Best Results

1. **Deploy frontend first** to get the URL
2. **Deploy API second** and ensure it's accessible
3. **Test both together** to ensure communication works
4. **Use the same domain** if possible to avoid CORS issues
5. **Test all examples** to ensure full functionality



