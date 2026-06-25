import axios from 'axios';

async function searchDuckDuckGo(query) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };
  try {
    const res = await axios.post('https://html.duckduckgo.com/html/', `q=${encodeURIComponent(query)}`, {
      headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return res;
  } catch (err) {
    console.error("DDG search error:", err.message);
    return null;
  }
}

async function run() {
  console.log("Searching...");
  const res = await searchDuckDuckGo('site:yelp.com/biz "Georgetown, TX" dentist');
  if (!res) {
    console.log("No response");
    return;
  }
  console.log("Status:", res.status);
  console.log("Length:", res.data.length);
  console.log("Preview:", res.data.substring(0, 1000));
}

run();
