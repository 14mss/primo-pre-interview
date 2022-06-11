export default function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let collection: number[] = [];
  let i1: number = 0;
  let i2: number = 0;
  let c1: number;
  let c2: number;

  const col_len: number = collection_1.length + collection_2.length;
  for (let i = 0; i < col_len; i++) {
    c1 = collection_1[i1];
    c2 = collection_2[i2];
    if (c2 === undefined || c1 < c2) {
      collection.push(c1);
      i1++;
    } else {
      collection.push(c2);
      i2++;
    }
  }

  return collection;
}
