const express = require("express");
const axios = require("axios");

const app = express();

app.route("/game").get((req, res) => {
  axios
    .get("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
    .then(data => res.send(data.data.applist.apps))
    .catch(e => console.log(e));
});

app.listen(3001, () => console.log("Server running on 3001"));

// https://store.steampowered.com/api/appdetails?appids=220
