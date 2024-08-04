const tryCatch = (content) => async (req, res, next) => {
  try {
    await content(req, res);
  } catch (error) {
    return next(error);
  }
};

export default tryCatch;
