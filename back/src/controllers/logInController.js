const { User } = require("../db");

const logInController = async (userData) => {
  try {
    const { email, password } = userData;
    const actualUser = await User.findOne({ where: { email, password } });

    if (actualUser) {
      return actualUser;
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = logInController;
