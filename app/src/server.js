/*
send web request to url where server is running (from google cloud)
server defines a route send it where it tells us to, send linkedin url as part of get request
send response data in json, the output of our 

Express server
Add routes to it
RouteA -> please do a

*/
import express from "express"
import cors from "cors"


const app = express();
app.use(cors())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

var linkedin_url;
var linkedin_data;

app.post("/from_face", (req, res) => {
    console.log(req.body);
    linkedin_url = req.body;
});

app.get("/to_link_api", (req, res) => {
    res.send(linkedin_url);
});

app.post("/parse_linkedin", (req, res) => {
    console.log(req.body);
    linkedin_data = req.body;
});

app.get("/to_gpt", (req, res) => {
    res.send(linkedin_data);
});