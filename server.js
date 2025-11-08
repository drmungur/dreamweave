// --- CommonJS version ---
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate", async (req, res) => {
  const { idea1, idea2 } = req.body;
  try {
    const prompt = `Combine these two ideas into a single imaginative invention:
    Idea 1: ${idea1}
    Idea 2: ${idea2}
    Respond with a short name and a one-sentence creative description.`;

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ text: completion.choices[0].message.content.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error contacting OpenAI" });
  }
});

app.listen(3001, () => console.log("✅ AI server running on http://localhost:3001"));
