require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const shortUrlObj = {};

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// Handle form submissions
app.post('/api/shorturl', (req, res) => {
  let inputUrl = req.body.url;
  const result = storeUrl(inputUrl);
  
  // Set the content type and redirect with the result
  res.writeHead(302, {
    'Location': '/api/shorturl',
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(result));
});

// Handle specific short URLs
app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = parseInt(req.params.short_url);
  
  if (isNaN(shortUrl)) {
    return res.json({ error: 'wrong format' });
  }
  
  const originalUrl = shortUrlObj[shortUrl];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: "No short URL found for the given input" });
  }
});

// Handle direct visits to /api/shorturl/
app.get('/api/shorturl/', (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

function storeUrl(url) {
  const pattern = /^(http:\/\/|https:\/\/)(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]+$/;
  if (!pattern.test(url)) {
    return { error: 'invalid url' };
  }
  
  const shortUrl = Object.keys(shortUrlObj).length + 1;
  shortUrlObj[shortUrl] = url;
  return { original_url: url, short_url: shortUrl };
}

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});