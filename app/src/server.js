/*
send web request to url where server is running (from google cloud)
server defines a route send it where it tells us to, send linkedin url as part of get request
send response data in json, the output of our 

Express server
Add routes to it
RouteA -> please do a

*/
import express from "express"

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
    res.send({express: "EXPRESS X REACT NEW OTP"});
});