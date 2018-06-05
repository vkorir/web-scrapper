const express = require("express");
const request = require("request-promise");
const cheerio = require("cheerio");

const app = express();
const port = process.env.NODE_END || 5000;

const getOptions = uri => {
  return {
    uri,
    json: true,
    transform: body => {
      return cheerio.load(body);
    }
  };
};

app.get("/", (req, res) => {
    res.send({
        "Hey you": "Plese try /scrapper"
    })
})

app.get("/scrapper", (req, res) => {
    // const options = getOptions("https://www.google.com")
    // const data = await request(options)
    // if (data.errors) {
    //     res.send("Ouch! Found error :(")
    // }
    // res.send(data)
    res.send( {
        "div": {
            "oops!": "Bleh bleh",
            "h4": "Coming soon! :)"
        }

    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));
