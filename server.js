const express = require('express');
const axios = require('axios');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/game/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  axios
    .get('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
    .then(({ data }) => {
      res.send(
        data.applist.apps.filter(game =>
          game.name.toLowerCase().includes(query)
        )
      );
    })
    .catch(e => console.log(e));
});

app.listen(3001, () => console.log('Server running on 3001'));

// https://store.steampowered.com/api/appdetails?appids=220
