const { validationResult } = require("express-validator");

const handleErrorMessages = (req, res, next) => {
  const results = validationResult(req);
  if (!results.isEmpty()) {
    return res.status(400).json({ errors: results.mapped() });
  } else {
    next();
  }
};

module.exports = handleErrorMessages;
