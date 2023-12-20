const countPairs = require("../utils/pairsCounter");

describe("countPairs", () => {
  it("should return word pairs", () => {
    const mockData = [
      { opening_crawl: "This is a test string" },
      { opening_crawl: "A nice test string" },
    ];

    const expectedData = {
      this: 1,
      is: 1,
      nice: 1,
      string: 2,
      test: 2,
      a: 2,
    };

    expect(countPairs(mockData)).toEqual(expectedData);
  });
  it("should return an empty object for an empty array", () => {
    expect(countPairs([])).toEqual({});
  });
  it('should correctly handle special characters and punctuation', () => {
    const mockFilms = [{ opening_crawl: "Hello, world! This... is a test." }];
    const expectedOutput = { 'hello': 1, 'world': 1, 'this': 1, 'is': 1, 'a': 1, 'test': 1 };
    expect(countPairs(mockFilms)).toEqual(expectedOutput);
  });
  it('should correctly count words irrespective of their case', () => {
    const mockFilms = [{ opening_crawl: "Hello hello HELLO" }];
    const expectedOutput = { 'hello': 3 };
    expect(countPairs(mockFilms)).toEqual(expectedOutput);
  });
  
});
