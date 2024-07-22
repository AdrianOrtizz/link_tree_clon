const logInController = require("../controllers/logInController");

const getUser = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }

    const actualUser = await logInController({ email, password });

    if (actualUser) {
      return res.status(200).json(actualUser);
    } else {
      return res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

module.exports = getUser;
