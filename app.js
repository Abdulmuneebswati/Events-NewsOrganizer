import  express  from "express";
import { adminRoutes } from "./src/Routes/adminRoutes.js";
import "./src/db/dbConfig.js";
import { postsRoutes } from "./src/Routes/postsRoute.js";
import hbs  from 'hbs';
import path from "path"
import { fileURLToPath } from 'url';
import session from "express-session";
import flash from "express-flash";
import { registrationRoute } from "./src/Routes/registrationRoute.js";

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname,"/src/public");
const dynamicPath = path.join(__dirname,"./src/templates/views");
const partialPath = path.join(__dirname,"src/templates/partials");



// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(flash());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.set("view engine","hbs");
app.set("views",dynamicPath);
hbs.registerPartials(partialPath);

app.use("/api/admin",adminRoutes);
app.use("/api/posts",postsRoutes);
app.use("/api/register",registrationRoute);






app.listen(("2000"),()=>{
    console.log("app is running at the port 2k");
})

