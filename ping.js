const https = require("https");

https.get("url", (res) => {
  console.log(`📡 Ping sent: ${res.statusCode}`);
}).on("error", (e) => {
  console.error(`❌ Ping error: ${e.message}`);
});
