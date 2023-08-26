

export const handleException = (res, statusCode, error) => {
     res.status(statusCode).json({
      status: "error",
      statusCode: statusCode.toString()?? "500",
      error: error ? error.message : "An error occurred",
    });
  };
  