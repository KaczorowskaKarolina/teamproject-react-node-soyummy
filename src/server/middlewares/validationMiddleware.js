const validationMiddleware = validator => {
  return (req, res, next) => {
    const validation = validator.validate(req.body);
    if (validation.error) {
      return res.stattus(400).json({ message: validation.error.message });
    }
    return next();
  };
};

export { validationMiddleware };
