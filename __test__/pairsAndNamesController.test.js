const cacheData = require("../utils/cacheData");
const getAllPairsAndNames = require("../controllers/parisAndNamesController");
const countPairs = require("../utils/pairsCounter");
const getMostFrequentCharacter = require("../utils/characterCouter");
const {
  mockResponse,
  mockRequest,
  generalData,
  testErrorHandling,
} = require("../utils/mockUtils");

jest.mock("../utils/cacheData", () => jest.fn());
jest.mock("../utils/pairsCounter", () => jest.fn());
jest.mock("../utils/characterCouter", () => jest.fn());

describe("getAllPairsAndNames", () => {
  const req = mockRequest;
  const res = mockResponse();
  const mockedData = generalData;
  const error = new Error("Test error");
  const mockedPairsData = { word: 1, word1: 2 };
  const mockedCharactersData = ["name", "name1"];

  it("should return 200 and data on success", async () => {
    cacheData.mockResolvedValueOnce(mockedData);
    cacheData.mockResolvedValueOnce(mockedData);
    countPairs.mockReturnValue(mockedPairsData);
    getMostFrequentCharacter.mockReturnValue(mockedCharactersData);
    await getAllPairsAndNames(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      mostFrequentCharacter: mockedCharactersData,
      countedPairs: mockedPairsData,
    });
  });
  it("should return 500 on error", async () => {
    await testErrorHandling(getAllPairsAndNames, req, res, cacheData, error);
  });
});
