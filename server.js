const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This explicitly tells Express to serve everything in the 'public' folder (including index.html, manifest.json, sw.js)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Greenapp server running on port ${PORT}`);
});
