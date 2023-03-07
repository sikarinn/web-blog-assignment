const express = require("express"),
    router = require("express").Router(),
    passport = require('passport'),
    CLIENT_URL = "https://dc02.coe.psu.ac.th",
    logger = require('../log/logFile');

router.get("/login/success", (req, res) => {
    if (req.user) {
        logger.book.log('info','login success');
        res.status(200).json({
            success: true,
            message: "successful",
            user: req.user,
        });
    }
});

router.get("/login/failed", (req, res) => {
    logger.book.log('error','error 401');
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("/logout", (req, res) => {
    logger.book.log('info','logout success');
    req.logout();
    res.redirect(CLIENT_URL);
})

router.get("/google", passport.authenticate("google", { scope: ["profile"], }))

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))

module.exports = router;