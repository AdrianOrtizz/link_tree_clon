const { User } = require("../db");

const postUserController = async (userData) => {
  try {
    const { email, password, rPassword, username, image, description } =
      userData;

    if (password === rPassword) {
      const [user, created] = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          password,
          username,
          image,
          description,
        },
      });

      if (created) {
        return user;
      } else {
        return "El email ya está asociado a una cuenta";
      }
    } else {
      return "Las contraseñas no coinciden";
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = postUserController;
