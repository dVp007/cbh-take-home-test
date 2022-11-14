const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal key when input is given", () => {
    const trivialKey = deterministicPartitionKey("Dharmil");
    expect(trivialKey).not.toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when input is given with more than 256 letters", () => {
    const trivialKey = deterministicPartitionKey(
      "MawVW5QLA8ED6Tl820X1AeAxjzdf7KbMav8PN9QcZUPERrNn00FyaQcCgmj67zHMLwVdqyfmnlEegbsiQOc8A5lX02HGrKwRYRTcEUTCuWDG9GY8v1FNP5Kkp9z59EbiDpBokBfoj2dNgaB7429uGTXFEtACLGRcrOMOvkBZJYYYcTSKBxQycXUmAIcN4J2oYp4wQAZcj2WfzKBuEYeLho2VySOZFeCtWHrjXyfV5Bfa44Uh3PzVQhnx1isw7bQCasdasd"
    );
    expect(trivialKey).not.toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when input is given with partitionKey in an object", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "Dharmil",
    });
    expect(trivialKey).not.toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when input is given with partitionKey in an object with more than 256 letters", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        "MawVW5QLA8ED6Tl820X1AeAxjzdf7KbMav8PN9QcZUPERrNn00FyaQcCgmj67zHMLwVdqyfmnlEegbsiQOc8A5lX02HGrKwRYRTcEUTCuWDG9GY8v1FNP5Kkp9z59EbiDpBokBfoj2dNgaB7429uGTXFEtACLGRcrOMOvkBZJYYYcTSKBxQycXUmAIcN4J2oYp4wQAZcj2WfzKBuEYeLho2VySOZFeCtWHrjXyfV5Bfa44Uh3PzVQhnx1isw7bQCasdasd",
    });
    expect(trivialKey).not.toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when input is given with partitionKey in an object in not a string", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        key: true,
        name: "Dharmil",
      },
    });
    expect(trivialKey).not.toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when input is a random object in not a string", () => {
    const trivialKey = deterministicPartitionKey({
        name: "Dharmil"
    });
    expect(trivialKey).not.toBe("0");
  });
});
