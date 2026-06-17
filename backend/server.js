/*// 📁 /backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/explain', async (req, res) => {
  try {
    const { code, language } = req.body;
    
    if (!code || !language) {
      return res.status(400).json({ error: "Missing code or language parameter" });
    }
    
    const prompt = `Explain the following ${language} code in simple terms. 
    Break down what each part does, but keep it concise. 
    If it's CSS, explain the styling rules. 
    If it's JavaScript, explain the functionality. 
    If it's HTML, explain the structure and elements.
    \n\nCode:\n${code}\n\nExplanation:`;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 300
    });
    
    const explanation = response.choices[0].message.content;
    res.json({ explanation });
    
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ 
      error: "Failed to get explanation", 
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(Backend server running on http://localhost:${port});
});*/