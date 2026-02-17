const https = require('https');

const client_id = 'a4bf27daa4664d338128aab3c3ae0d3e';
const client_secret = 'a447ba76c09240858f6c030b61d03bfe'; // Replace with your actual client secret
const code = 'AQAGG70qhBs38GDCm_Bq2iO6bv5H66E24rG9_4UE11lSlrDRs6-oYFrzdHpUJVQnGnBqirg8vWeyTq9K5ubHfY_HkZYh23ptycRs9zSwsZldqB-sfh8gmPMo0StkA7Tdr6il5wixuaBeGy0NpI7kTyyeyFHEiuggQVbRPcnKrAZmDIMohQEF2ijlZ7fXGAWWJnT9QhDWaJ6-jhfNtyAv59FQQg';
const redirect_uri = 'http://127.0.0.1:3000/api/callback';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const postData = new URLSearchParams({
  grant_type: 'authorization_code',
  code,
  redirect_uri,
}).toString();

const options = {
  hostname: 'accounts.spotify.com',
  path: '/api/token',
  method: 'POST',
  headers: {
    'Authorization': `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length,
  },
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const response = JSON.parse(data);
    console.log('Refresh Token:', response.refresh_token);
  });
});

req.write(postData);
req.end();