const getMostFrequentCharacter = require("../utils/characterCouter");

describe("getMostFrequentCharacter", () => {
  it("should return the most frequently mentioned characters in film openings", () => {
    const mockFilms = [
      { opening_crawl: "The adventure of Luke Skywalker." },
      { opening_crawl: "Luke Skywalker and Darth Vader." },
      { opening_crawl: "Darth Vader's story." },
    ];
    const mockPeople = [
      { name: "Luke Skywalker" },
      { name: "Darth Vader" },
      { name: "Han Solo" },
    ];

    const expectedOutput = ["Luke Skywalker", "Darth Vader"];
    expect(getMostFrequentCharacter(mockFilms, mockPeople)).toEqual(
      expectedOutput
    );
  });
  it("should return an empty array for empty input", () => {
    expect(getMostFrequentCharacter([], [])).toEqual([]);
  });
});
