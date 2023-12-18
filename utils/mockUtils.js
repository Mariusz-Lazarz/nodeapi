const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const testErrorHandling = async (
  controllerFunction,
  req,
  res,
  mockFunction,
  expectedError
) => {
  mockFunction.mockRejectedValueOnce(expectedError);

  await controllerFunction(req, res);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json).toHaveBeenCalledWith({
    status: "Fail",
    message: `Error fetching data from ${req.originalUrl}: ${expectedError.message}`,
  });
};

const mockRequest = {
  query: {
    page: 1,
  },
  params: { id: "123" },
  originalUrl: "/testUrl",
};

const generalData = {
  count: 0,
  next: "testurl",
  previous: "testurl",
  results: [],
};

module.exports = { mockResponse, mockRequest, generalData, testErrorHandling };
