module.exports = (req, res, next) => {
  console.log(req.session);
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ messgae: "You shall not pass!" });
  }
};
