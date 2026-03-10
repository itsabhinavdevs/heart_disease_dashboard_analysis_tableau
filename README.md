# ❤️ Heart Disease Risk Factor Analysis

A futuristic, premium analytics platform for exploring heart disease risk factors through interactive Tableau visualizations.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Flask App
```bash
python app.py
```

### 3. Open in Browser
```
http://127.0.0.1:5000
```

---

## 📁 Project Structure

```
heart_disease_project/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── templates/
│   ├── base.html           # Base layout (navbar, footer, loader)
│   ├── index.html          # Home page
│   ├── about.html          # About project
│   ├── riskfactors.html    # Risk factors grid
│   ├── worksheets.html     # Visualization gallery
│   ├── dashboards.html     # Dashboard cards
│   ├── story.html          # Tableau story presentation
│   ├── insights.html       # Key findings
│   ├── team.html           # Team members
│   └── contact.html        # Contact form
└── static/
    ├── css/
    │   └── main.css        # Global styles
    └── js/
        └── main.js         # Animations & interactions
```

---

## 🔗 Adding Your Tableau Visualizations

### Worksheets (worksheets.html)
Replace `YOUR_WORKSHEET_N` with your actual Tableau Public worksheet URLs:
```html
<iframe src="https://public.tableau.com/views/YOUR_WORKBOOK/SHEET_NAME?:embed=y&:display_count=yes" ...>
```

### Dashboards (dashboards.html)
Replace `YOUR_DASHBOARD_N` with your dashboard URLs:
```html
<iframe src="https://public.tableau.com/views/YOUR_WORKBOOK/DASHBOARD_NAME?:embed=y&:display_count=yes" ...>
```

### Story (story.html)
Replace `YOUR_FULL_STORY` with your story URL:
```html
<iframe src="https://public.tableau.com/views/YOUR_WORKBOOK/STORY_NAME?:embed=y&:display_count=yes" ...>
```

### How to Get Tableau Embed URL
1. Publish your workbook to Tableau Public
2. Click "Share" → "Copy Embed Code"
3. Extract the `src` URL from the iframe
4. Use format: `https://public.tableau.com/views/WORKBOOK/SHEET?:embed=y&:display_count=yes`

---

## 🎨 Design System

| Variable | Value |
|----------|-------|
| Primary Red | `#E63946` |
| Dark Background | `#0D1B2A` |
| Secondary Background | `#1B263B` |
| Accent Cyan | `#00F5D4` |
| Text | `#EAEAEA` |

---

## 🛠️ Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, Tailwind CSS, JavaScript
- **Animations**: GSAP 3, AOS, Particles.js
- **Icons**: Font Awesome 6
- **Fonts**: Poppins, Inter
- **Visualizations**: Tableau Public (embedded iframes)

---

## 📊 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, stats, CTA |
| About | `/about` | Project overview, dataset info |
| Risk Factors | `/riskfactors` | 9 risk factor cards |
| Worksheets | `/worksheets` | 10-worksheet gallery |
| Dashboards | `/dashboards` | 3 dashboard cards |
| Story | `/story` | Tableau story + scene nav |
| Insights | `/insights` | 8 key findings |
| Team | `/team` | 8 team member cards |
| Contact | `/contact` | Form + map + FAQ |

---

## ✅ Features

- ✨ Full-screen animated loader (beating heart + ECG line)
- 🌊 Particles.js animated background
- 🎯 GSAP text reveal animations
- 📜 AOS scroll-triggered animations
- 🔮 Glassmorphism card design
- 📱 Fully responsive layout
- 🎭 Modal visualization viewer
- 🧭 Sticky glassmorphism navbar
- 📊 Animated number counters
- 🃏 3D tilt effect on team cards
- ⚡ ECG heartbeat canvas animation
- 🎬 Scene-based story navigation
