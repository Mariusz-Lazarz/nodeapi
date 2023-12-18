const cacheData = require("../utils/cacheData");
const Cache = require("../models/cacheModel");

jest.mock("../models/cacheModel", () => ({
  findOne: jest.fn(),
  updateOne: jest.fn(),
  save: jest.fn(),
}));

global.fetch = jest.fn();

describe("cacheData", () => {
  const cacheKey = "testKey";
  it("should return cached data if it is not expired", async () => {

    const cachedData = {
      data: { some: "data" },
      timestamp: new Date(),
    };
    Cache.findOne.mockResolvedValueOnce(cachedData);

    const result = await cacheData(cacheKey, "http://example.com");

    expect(Cache.findOne).toHaveBeenCalledWith({ key: cacheKey });
    expect(result).toEqual(cachedData.data);
  });

  it("should fetch new data if cache is expired", async () => {
    const expiredTime = new Date(new Date() - 24 * 60 * 60 * 1000);
    const cachedData = {
      data: { some: "old data" },
      timestamp: expiredTime,
    };
    const newData = { some: "new data" };
    Cache.findOne.mockResolvedValueOnce(cachedData);
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(newData),
    });

    const result = await cacheData(cacheKey, "http://example.com");

    expect(fetch).toHaveBeenCalledWith("http://example.com");
    expect(result).toEqual(newData);
  });
});
