import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import StudentData from "./students.json" assert { type: "json" }
import { readFile, writeFile } from "fs/promises"; // ← ԱՅՍԸ ՊԱԿԱՍԵԼ ԷՐ

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());
async function getData() {
    const file = await readFile(StudentData, "utf8");
    return JSON.parse(file);
}
async function saveData(data) {
    await writeFile(StudentData, JSON.stringify(data, null, 2));
}
app.get("/list", async (req, res) => {
    const data = await getData();
    res.json(data);
});
app.post("/add", async (req, res) => {
    const { name } = req.body;

    const newUser = {
        id: Date.now(),
        name
    };

    const users = await getData();
    users.push(newUser);

    await saveData(users);

    res.json(newUser);
});



app.get("/about", (req, res) => {
    res.json('    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequuntur fuga impedit labore magni pariatur, tempore? Assumenda at consequuntur ex ipsa iure, magni neque nesciunt nisi nostrum quas recusandae.\n');
});
app.get("/exchange", (req, res) => {
    res.json({
        usd:378
    })


});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
