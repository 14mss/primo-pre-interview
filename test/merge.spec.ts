import "jest";
import merge from "../src/merge";

describe("Merge", () => {
  it("tc1: 2 empty arrays", async () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    expect(merge(collection_1, collection_2)).toStrictEqual([]);
  });

  it("tc2: 1 empty array", async () => {
    const collection_1: number[] = [2, 3, 4];
    const collection_2: number[] = [];
    expect(merge(collection_1, collection_2)).toStrictEqual([2, 3, 4]);
  });

  it("tc3: 2 same arrays", async () => {
    const collection_1: number[] = [1, 3, 19, 23];
    const collection_2: number[] = [1, 3, 19, 23];
    expect(merge(collection_1, collection_2)).toStrictEqual([
      1, 1, 3, 3, 19, 19, 23, 23,
    ]);
  });

  it("tc4: 2 different number but same size arrays", async () => {
    const collection_1: number[] = [1, 3, 7, 8];
    const collection_2: number[] = [2, 5, 6, 9];
    expect(merge(collection_1, collection_2)).toStrictEqual([
      1, 2, 3, 5, 6, 7, 8, 9,
    ]);
  });

  it("tc5: 2 different number and different size arrays", async () => {
    const collection_1: number[] = [1, 3, 7];
    const collection_2: number[] = [2, 5, 6, 8, 9];
    expect(merge(collection_1, collection_2)).toStrictEqual([
      1, 2, 3, 5, 6, 7, 8, 9,
    ]);
  });

  it("tc6: min number of one array is bigger than max number of another", async () => {
    const collection_1: number[] = [70, 71, 72, 73];
    const collection_2: number[] = [2, 5, 6, 8, 9];
    expect(merge(collection_1, collection_2)).toStrictEqual([
      2, 5, 6, 8, 9, 70, 71, 72, 73,
    ]);
  });

  it("tc7: an array contain duplicate number", async () => {
    const collection_1: number[] = [1, 3, 7, 7];
    const collection_2: number[] = [2, 5, 6, 8, 9];
    expect(merge(collection_1, collection_2)).toStrictEqual([
      1, 2, 3, 5, 6, 7, 7, 8, 9,
    ]);
  });
});
