require('dotenv').config()
const {GoogleAuth} = require('google-auth-library');

new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/firebase.messaging'
  }).getAccessToken().then(v=>console.log(v))