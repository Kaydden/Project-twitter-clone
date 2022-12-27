const createError = require("http-errors"),
    express = require("express"),
    session = require("express-session"),
    path = require("path"),
    passport = require("passport");
const app = express();

//CONFIGURA O PROJETO PARA VARIAVEIS DE AMBIENTE => USAR PROCESS.ENV 
require('dotenv').config()

//Setando a pasta 'views' como pasta dos html
app.set("views", path.join(__dirname, "views"));
//Pra usar EJS =>
app.set("view engine", "ejs");
//Tudo que for público dentro da pasta 'public', como CSS, PLUGINs, JSs e outros.
app.use(express.static(path.join(__dirname, "/public/")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Parâmetros de sessão
app.use(
    session({
        secret: "s3cr3t",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 60 * 1000 * 24 },
    })
);

//Inicia passport
app.use(passport.initialize());
app.use(passport.session());

//USA AS ROTAS
require("./routes")(app);

//Inicia o servidor
const listener = app.listen(process.env.PORT, function () {
    console.log(`Porta: http://localhost:${listener.address().port}`);
});

module.exports = app;