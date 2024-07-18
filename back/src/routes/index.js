const { Router } = require("express");

const postUser = require("../handlers/postUser.js");

const router = Router();

router.post("/user", postUser);

module.exports = router;
