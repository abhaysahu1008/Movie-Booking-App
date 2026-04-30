const SuccessResponseBody = {
  success: true,
  err: {},
  data: {},
  message: "Successfully processed the request",
};

const ErrorResponseBody = {
  success: false,
  err: {},
  data: {},
  message: "Something went wrong, cannot processed the request",
};

module.exports = {
  SuccessResponseBody,
  ErrorResponseBody,
};
