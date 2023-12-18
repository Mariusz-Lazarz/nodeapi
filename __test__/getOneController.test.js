const { getOne } = require("../controllers/generalController");
const cacheData = require("../utils/cacheData");
const {
  mockResponse,
  mockRequest,
  generalData,
  testErrorHandling
} = require("../utils/mockUtils");

jest.mock("../utils/cacheData", () => jest.fn());

describe("getOne", () => {
  const req = mockRequest;
  const res = mockResponse();
  const error = new Error("Test error");

  it("should return 200 and data on success", async () => {
    const mockData = generalData;
    cacheData.mockResolvedValueOnce(mockData);

    await getOne("resource")(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it("should return 500 on error", async () => {
    await testErrorHandling(getOne("resource"), req, res, cacheData, error);
  });
});
