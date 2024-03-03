import express from "express";
import axios from "axios";

const app = express();
const _port = 3000;
// const _url = "https://v2.jokeapi.dev/joke/Programming?type=single";
app.use(express.static("public"));

app.get("/", async(req,res)=>
{
    try{
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
        console.log(result);
        res.render("index.ejs",
        {
            joke : result.data.joke
        });
    }
    catch(error)
    {
        // console.log(error.respose.error);
        res.status(500);
    }
});

app.listen(_port,()=>
{
    console.log(`Running on Port ${_port}`)
});