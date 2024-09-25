const errorHandler = (error, req, res, next) => {
  res.status(400).json({ msg: error.message, status: "not ok" });
  // console.log(error);
};

export default errorHandler;
