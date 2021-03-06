const db = require("../models");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const user = await db.User.findOne({ where: {username}});
  if (user) {
    res.status(400).send({ message: "Username already taken"});
  } else {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    await db.User.create({
      username: username,
      password: hashedPassword,
      name: name
    });

    res.status(201).send({ message: "User created."});
  }
};

const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await db.User.findOne({ where: {username}});

  if (!user) {
    res.status(400).send({ message: "Invalid username or password"});
  } else {
    const isSuccess = bcryptjs.compareSync(password, user.password);

    if (isSuccess) {
      const payload = {
        id: user.id,
        name: user.name
      }

      const token = jwt.sign(payload, "codecamp5", {expiresIn: 3600})

      res.status(200).send({token: token})

    } else {
      res.status(400).send({ message: "Invalid username or password"});
    } 
  }


};

module.exports = { registerUser, loginUser};