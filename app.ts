import express from "express";

const app = express();
const port = 44444;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log("Server is running on port ${port}");
});

function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
}

sayHello("World");

