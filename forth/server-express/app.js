import express from "express";
import numberRouter from "./routes/user_route.js";
const app = express();

app.use('/numbers', numberRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});