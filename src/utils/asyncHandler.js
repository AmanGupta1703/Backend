const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code).json({ success: false, message: error.message });
  }
};

function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code).json({ success: false, message: error.message });
    }
  };
}

*/
