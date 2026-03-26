const fs = require('fs');
const path = require('path');

// Copy BIBLIOTECA3.db to biblioteca.db
const source = path.join(__dirname, 'BIBLIOTECA3.db');
const destination = path.join(__dirname, 'biblioteca.db');
fs.copyFileSync(source, destination);

require("dotenv").config();
const { createApp } = require("./src/app");

const PORT = Number(process.env.PORT || 3000);
const app = createApp();

app.listen(PORT, () => {
  console.log(`✅ Biblioteca lista en http://localhost:${PORT}`);
});