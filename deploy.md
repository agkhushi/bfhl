# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Fastest)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Follow prompts:**

   - Link to existing project: No
   - Project name: bfhl-api (or default)
   - Directory: ./ (current directory)
   - Override settings: No

4. **Your API will be live at:**
   ```
   https://your-project-name.vercel.app/bfhl
   ```

### Option 2: Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your repository
6. Railway auto-detects Node.js and deploys
7. Get your live URL from the project dashboard

### Option 3: Render

1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - Name: bfhl-api
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Click "Create Web Service"
7. Wait for deployment and get your live URL

## 🧪 Testing Your Deployed API

Once deployed, test with:

```bash
# Test Example A
curl -X POST https://your-api-url.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'

# Test Example B
curl -X POST https://your-api-url.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a","y","4","&","-","*","5","92","b"]}'

# Test Example C
curl -X POST https://your-api-url.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## 📝 Submission Checklist

Before submitting to the form:

- [ ] API is deployed and accessible
- [ ] `/bfhl` endpoint works correctly
- [ ] All examples return expected results
- [ ] Numbers are returned as strings
- [ ] HTTP 200 status for success
- [ ] Error handling works properly

## 🔗 Form Submission

Submit your API endpoint at:
**https://forms.office.com/r/ZeVpUYp3zV**

Make sure to include the full URL with `/bfhl` route!

## 🎯 Success Criteria

Your submission will be successful if:

- API responds correctly to all test cases
- Numbers are returned as strings
- User ID format is correct
- HTTP status codes are proper
- Error handling is graceful
- API is publicly accessible

---

**Good luck with your VIT Full Stack Question Paper submission! 🎓✨**
