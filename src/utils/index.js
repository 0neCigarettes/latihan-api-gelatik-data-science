const requestResponse = {
  success: {
    code: 200,
    status: true,
    message: "Succes."
  },
  not_found: {
    code: 404,
    status: false,
    message: "Resource not found"
  },
  unprocessable_entity: {
    code: 422,
    status: false,
    message: "The request you sent is unable to process"
  },
  server_error: {
    code: 500,
    status: false,
    message: "Internal server error."
  }
}

module.exports = {
  requestResponse
}