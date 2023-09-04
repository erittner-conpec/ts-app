"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 44444;
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
    console.log("Server is running on port ${port}");
});
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("World");
