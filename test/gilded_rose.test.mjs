import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("coverage of 100% via brute force", () => {
    const dummies = [];
    for (const name of [
      "foo",
      "bar",
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
      "Sulfuras, Hand of Ragnaros",
    ]) {
      for (const sellIn of [-999, -1, 0, 1, 5, 6, 7, 10, 11, 12, 999]) {
        for (const quality of [-999, -1, 0, 1, 45, 49, 50, 51, 55, 999]) {
          dummies.push(new Item(name, sellIn, quality));
        }
      }
    }

    const empty = new Shop();
    const doingEmpty = () => empty.updateQuality();
    expect(doingEmpty).not.to.throw();
    expect(doingEmpty()).to.deep.equal([]);

    const gildedRose = new Shop(dummies);
    const items = gildedRose.updateQuality(true);
    expect(items).to.deep.equal([
      {
        name: "foo",
        sellIn: -1000,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 43,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 47,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 53,
      },
      {
        name: "foo",
        sellIn: -1000,
        quality: 997,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 43,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 47,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 53,
      },
      {
        name: "foo",
        sellIn: -2,
        quality: 997,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 43,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 47,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 53,
      },
      {
        name: "foo",
        sellIn: -1,
        quality: 997,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 0,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 4,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 5,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 6,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 9,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 10,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 11,
        quality: 998,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: -999,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: -1,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 44,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 48,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 49,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 54,
      },
      {
        name: "foo",
        sellIn: 998,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 43,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 47,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 53,
      },
      {
        name: "bar",
        sellIn: -1000,
        quality: 997,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 43,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 47,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 53,
      },
      {
        name: "bar",
        sellIn: -2,
        quality: 997,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 43,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 47,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 53,
      },
      {
        name: "bar",
        sellIn: -1,
        quality: 997,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 0,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 4,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 5,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 6,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 9,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 10,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 11,
        quality: 998,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: -999,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: -1,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 44,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 48,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 49,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 54,
      },
      {
        name: "bar",
        sellIn: 998,
        quality: 998,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: -997,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 3,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 47,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: -1000,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: -997,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 3,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 47,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: -2,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: -997,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 3,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 47,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: -1,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 0,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 4,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 5,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 6,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 9,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 10,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 11,
        quality: 999,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: -998,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 1,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 2,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 46,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 51,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 55,
      },
      {
        name: "Aged Brie",
        sellIn: 998,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1000,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: -996,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 3,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 4,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 48,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: -996,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 3,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 4,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 48,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 4,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: -997,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 3,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 47,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 5,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: -997,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 3,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 47,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: -997,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 3,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 47,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: -998,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 46,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 10,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: -998,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 46,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 11,
        quality: 999,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: -998,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 46,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 50,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 51,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 55,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 998,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -999,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: -1,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 0,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 1,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 5,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 6,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 7,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 10,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 11,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 12,
        quality: 999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: -999,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: -1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 1,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 45,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 49,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 50,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 51,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 55,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        sellIn: 999,
        quality: 999,
      },
    ]);
  });
});
