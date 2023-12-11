const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
};

const path = require('path');
// Read proverbs from the JSON file
const filePath = path.join(__dirname, 'proverbs.json');
const proverbsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));


        // this way u can out put as text
        /*
        app.get('/text', (req, res) => {
          try {
            const randomProverb = proverbsData.proverbs[Math.floor(Math.random() * proverbsData.proverbs.length)];
          
            res.set({ ...headers, "Content-Type": "text/plain" }).status(200).send(randomProverb);
          } catch (error) {
            res.set(headers).status(500).send(error.toString());
          }
        });*/

        
app.get('/proverbs', (req, res) => {
    try {
      if (proverbsData.proverbs.length === 0) {
        // Handle the case where no proverbs are available.
        res.set(headers).status(404).json({ error: "No proverbs available." });
      } else {
        // Randomize the proverbs; a new proverb is returned every time
        const randomProverb = proverbsData.proverbs[Math.floor(Math.random() * proverbsData.proverbs.length)];
        res.set({ ...headers, "Content-Type": "application/json" }).status(200).json({ proverb: randomProverb });
      }
    } catch (error) {
      const errorMessage = "An error occurred while fetching the proverb. Please try again later.";
      res.set(headers).status(500).json({ error: errorMessage });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
  
  
  
  
  
