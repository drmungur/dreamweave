# 💡 DreamWeave — AI-Powered Idea Synthesizer

![Built with Node.js](https://img.shields.io/badge/Built%20with-Node.js-green?style=for-the-badge)
![Uses OpenAI API](https://img.shields.io/badge/Uses-OpenAI%20API-blue?style=for-the-badge)
![Frontend HTML/CSS/JS](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-orange?style=for-the-badge)

**DreamWeave** is an interactive web app that fuses any two ideas into a brand-new invention.  
It combines smooth front-end design with real AI-integration logic for creative generation.

---

## 🚀 Demo

🖥️ **Live preview:** [Coming soon / Vercel link here]  
📸 *If the AI is disabled due to quota limits, the random generator still demonstrates full interactivity.*

---

## ✨ Features

- 🔤 Combine **two user ideas** to generate a unique invention  
- 🧠 Designed to connect with **OpenAI’s GPT model** for real creative synthesis  
- 🎨 Beautiful glass-morphism UI with gradients, glow, and animations  
- ⚙️ Includes both **front-end (HTML/CSS/JS)** and **back-end (Node.js/Express)**  
- 🌈 Fully responsive layout and modern typography  

---

## 🧠 How It Works

1. **Front-end:**  
   - HTML/CSS/JS handles input fields, buttons, animations, and DOM updates.  
   - When you click **Generate ✨**, it sends your ideas to the backend.

2. **Back-end:**  
   - Node.js + Express server (`server.js`) receives the ideas.  
   - It calls OpenAI’s API (or local random generator if offline).  
   - Returns a creative invention name + description to the front-end.

3. **AI Integration:**  
   - Uses the OpenAI API via the `openai` npm package.  
   - Model: `gpt-3.5-turbo` (default).  
   - Add your own API key in your terminal before running:

     ```bash
     export OPENAI_API_KEY=sk-yourkeyhere
     node server.js
     ```

---

## 🛠️ Installation & Run Locally

### Clone this repository
```bash
git clone https://github.com/drmungur/dreamweave.git
cd dreamweave
```

### Install dependencies (for the backend)
```bash
npm install
```

### Start the AI server
```bash
export OPENAI_API_KEY=sk-yourkeyhere
node server.js
```

### Open the frontend
Right-click `index.html` → **Open with Live Server** (or open directly in your browser).

---

## 🧰 Technologies Used

| Layer | Tools |
|-------|-------|
| Front-End | HTML5, CSS3, JavaScript (Vanilla) |
| Back-End | Node.js, Express.js |
| API | OpenAI API |
| Styling | Custom CSS, animations, gradients |
| Deployment | GitHub Pages / Vercel |

---

## 🧩 Folder Structure
```
dreamweave/
│
├── index.html         # Frontend structure
├── style.css          # Styling and animations
├── script.js          # Frontend logic and fetch request
├── server.js          # Backend (Node + OpenAI)
├── package.json       # Dependencies and module type
└── README.md          # Project documentation
```

---

## 💬 Notes

> ⚠️ The OpenAI API may return a “quota exceeded” message if used without billing.  
> To enable full AI functionality, connect your own API key or switch to a free model provider.

---

## 🧑‍💻 Author

**Dushyant Rai Mungur**  
🎓 BSc Computer Science @ University of Prince Edward Island (UPEI)  
🌍 [LinkedIn](https://linkedin.com/in/drm360) | [GitHub](https://github.com/drmungur)

---
