const express = require("express"),
    router = express.Router();

const passportGoogle = require("../auth/google");

/**
 * Criar botão para rota
 */
router.get(
    "/google",
    passportGoogle.authenticate("google", {
        scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/userinfo.email"],
    })
);

/**
 * Callback recebe os dados do get anterior e faz o que está no arquivo auth/google.
 */
router.get(
    "/google/callback",
    passportGoogle.authenticate("google", { failureRedirect: "/login?fail=true&message=unknown" }),
    (req, res) => {
        res.redirect("/dashboard");
    }
);

/**
 * Quando a pessoa for deslogar do usuário, chamar essa rota.
 */
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});


module.exports = router;