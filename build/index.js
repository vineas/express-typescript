"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Jika menggunakan typescript wajib menggunakan Aplication Request dan Response
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
//router
const UserRoutes_1 = __importDefault(require("./Routers/UserRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(body_parser_1.default.json()); //aplikasi express ini menggunakan plugins bodyParser, fungsinya untuk melihat isi parameter dari sebuah request
        this.app.use((0, morgan_1.default)("dev")); //jalan di mode development
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Hi, ini router pertama saya di express typescript");
        });
        this.app.use("/users", UserRoutes_1.default);
    }
}
const port = 8080;
const app = new App().app;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
// const app = express();
// app.route("/").get((req, res)=>{
//     res.send("Hi, ini router pertama saya");
// })
// app.listen(8080);
