# 🚀 Vercel Deployment Guide for BFHL API

## 📋 Prerequisites

- GitHub repository with your code
- Vercel account (free at vercel.com)
- Node.js 16+ installed locally

## 🔧 Setup Steps

### 1. **Prepare Your Repository**

```bash
# Make sure all changes are committed
git add .
git commit -m "Setup Vercel deployment configuration"
git push origin main
```

### 2. **Deploy to Vercel**

#### **Option A: Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Node.js project
5. Configure project settings:
   - **Framework Preset**: Node.js
   - **Build Command**: `npm run build` (or leave empty)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

#### **Option B: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: bfhl-api
# - Directory: ./
# - Override settings? No
```

### 3. **Environment Variables (if needed)**

- Go to your Vercel project dashboard
- Navigate to Settings → Environment Variables
- Add any required environment variables

## 🌐 **How It Works**

### **Frontend Routes**

- `/` → Serves `dist/index.html`
- `/styles.css` → Serves `dist/styles.css`
- `/script.js` → Serves `dist/script.js`

### **Backend Routes**

- `/api/*` → Routes to `server.js`
- `/bfhl` → BFHL API endpoint
- `/health` → Health check endpoint

### **Static File Serving**

- All static files in `dist/` folder are served automatically
- Frontend automatically detects production vs localhost URLs

## 🔄 **Automatic Deployments**

Once connected to GitHub:

- ✅ **Every push to main branch** → Automatic deployment
- ✅ **Pull requests** → Preview deployments
- ✅ **Custom domains** → Automatic SSL certificates

## 📱 **Testing Your Deployment**

1. **Frontend**: Visit your Vercel URL
2. **API Health**: `https://your-domain.vercel.app/health`
3. **BFHL Endpoint**: `https://your-domain.vercel.app/bfhl`

## 🛠️ **Troubleshooting**

### **Common Issues:**

- **Build fails**: Check Node.js version in package.json
- **404 errors**: Verify vercel.json routing
- **API not working**: Check server.js static file serving

### **Debug Commands:**

```bash
# Check Vercel deployment logs
vercel logs

# Redeploy
vercel --prod

# Check local build
npm run build
```

## 🎯 **Expected Result**

After deployment, you'll have:

- ✅ **Frontend**: Beautiful UI accessible at your Vercel domain
- ✅ **Backend**: API endpoints working at same domain
- ✅ **Auto-deploy**: Every Git push triggers new deployment
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **SSL**: Automatic HTTPS

## 🔗 **Useful Links**

- [Vercel Documentation](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/runtimes#official-runtimes/node-js)
- [Vercel CLI](https://vercel.com/docs/cli)

---

**🎉 Your BFHL API will be automatically deployed and updated with every code push!**
