const express = require("express");
const app = express();
const wifi = require("node-wifi");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

wifi.init({
  iface: null, // network interface, choose a random wifi interface if set to null
  debug: true,
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  let error = null;
  try {
    const networks = await wifi.scan();
    const success = req.query?.success ?? false;

    return res.render("wifi", { networks, success });
  } catch (error) {
    error = error;
    return res.render("error", { error: error });
  }
});

app.post("/wifi-connect", async (req, res) => {
  try {
    const ssid = req.body.ssid;
    const password = req.body.password;
    const x = await wifi.connect({ password, ssid });

    return res.redirect("/?success=true");
  } catch (error) {
    error = error;
    return res.render("error", { error: error });
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
