const postUserController = require("../controllers/signUpController");

const postUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).send("Faltan datos");
    } else {
      const user = await postUserController(req.body);

      if (user.email) {
        return res.status(201).json(user);
      } else {
        return res.status(400).send(user);
      }
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = postUser;
