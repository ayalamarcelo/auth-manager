import express from "express";
//Fix for __dirname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authetication.controller.js";

//Server
const app = express();
app.set('port', 4000);
app.listen(app.get("port"));
console.log('Server is listening on', app.get('port'));

//Config
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/register.html'));
});
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/admin/admin.html'));
});
app.post('/api/register', authentication.register);
app.post('/api/login', authentication.login);