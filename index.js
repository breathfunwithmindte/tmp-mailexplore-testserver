const express = require("express");
const app = express();
app.use(require("express").json());
app.use(require("cors")());

const { styles, emails, categories } = require("./data");

app.get("/api/v1/autheticated", (req, res) => {
  res.status(200).json({
    message: "ok",
    user: {
      email: "mikekarypidis@empedus.eu",

    },
    project: {
      theme: styles,
      project_name: "somename",
      categories: categories
    }
  })
})

app.get("/api/v1/emails", (req, res) => {
  res.status(200).json({
    message: "ok", emails: emails.slice(0, 100)
  })
})

app.use("/public", express.static(require("path").resolve() + "/views"))

app.get("/", (req, res) => {
  res.sendFile(require("path").resolve() +  "/index.html")
})

app.listen(3001)