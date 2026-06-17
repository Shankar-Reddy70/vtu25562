const logger = (message, data = {}) => {

  console.log(
    `[${new Date().toISOString()}]`,
    message,
    data
  );
};

export default logger;