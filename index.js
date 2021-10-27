require("dotenv").config();
const http = require("http");
const logger = require("./src/utils/logger");

const server = http.createServer();

server.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT}`);
});