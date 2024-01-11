class ApiError extends Error {
  constructor(
    statuCode,
    message = "Somethin went wrong!",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuCode = statuCode;
    this.errors = errors;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
