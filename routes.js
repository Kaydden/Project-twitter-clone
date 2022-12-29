const indexRouter = require("./routes/index");

//Use essa função para inibir acesso a locais se o usuário nao estiver logado

const authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("login");
  };

module.exports = (app) => {
    app.use("/", indexRouter);
    /**
     * Adicione suas rotas aqui.
     * 
     * EXEMPLO COM ROTA QUE ENIBE USUARIO NAO LOGADO::
     * app.use("/dashboard", authenticationMiddleware, userRouter);
     */
  };