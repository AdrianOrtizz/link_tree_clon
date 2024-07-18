const { User } = require("../db");

const postUserController = async (userData) => {
  try {
    const { email, password, rPassword, username, image, description } =
      userData;

    if (password === rPassword) {
      const user = await User.create({
        email,
        password,
        username,
        image,
        description,
      });
      return user;
    } else {
      return "Las contraseñas no coinciden";
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = postUserController;
