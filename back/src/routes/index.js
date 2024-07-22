const { Router } = require("express");

const postUser = require("../handlers/postUser.js");
const getUser = require("../handlers/getUser.js");

const router = Router();

router.get("/user", getUser);

router.post("/user", postUser);

module.exports = router;
