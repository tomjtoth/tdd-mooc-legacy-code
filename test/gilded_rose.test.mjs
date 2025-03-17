import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("Item.toJSON() works", () => {
    expect(new Item("serializable", 5, 5).toJSON()).to.deep.equal({
      name: "serializable",
      sellIn: 5,
      quality: 5,
    });
  });

  test("empty Shop", () => {
    const empty = new Shop();
    const doingEmpty = () => empty.updateQuality();
    expect(doingEmpty).not.to.throw();
    expect(doingEmpty()).to.deep.equal([]);
  });

  test("ordinary items behave properly", () => {
    const shop = new Shop([new Item("foo", 2, 5)]);

    for (const [sellIn, quality] of [
      [1, 4],
      [0, 3],
      [-1, 1],
      [-2, 0],
    ]) {
      const [item] = shop.updateQuality();

      expect(item.quality).to.equal(quality);
      expect(item.sellIn).to.equal(sellIn);
    }
  });

  describe("Aged Brie", () => {
    test("has peak quality at 50, sellIn decreases", () => {
      const shop = new Shop([new Item("Aged Brie", 5, 46)]);

      for (const [sellIn, quality] of [
        [4, 47],
        [3, 48],
        [2, 49],
        [1, 50],
        [0, 50],
        [-1, 50],
        [-2, 50],
        [-3, 50],
      ]) {
        const [item] = shop.updateQuality();

        expect(item.quality).to.equal(quality);
        expect(item.sellIn).to.equal(sellIn);
      }
    });

    test("gains quality", () => {
      const shop = new Shop([new Item("Aged Brie", 5, 20)]);

      for (const [sellIn, quality] of [
        [4, 21],
        [3, 22],
        [2, 23],
        [1, 24],
        [0, 25],
        [-1, 27],
        [-2, 29],
      ]) {
        const [item] = shop.updateQuality();

        expect(item.quality).to.equal(quality);
        expect(item.sellIn).to.equal(sellIn);
      }
    });
  });

  test("Backstage passes behave properly", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30)]);

    for (const [sellIn, quality] of [
      [10, 31],
      [9, 33],
      [8, 35],
      [7, 37],
      [6, 39],
      [5, 41],
      [4, 44],
      [3, 47],
      [2, 50],
      [1, 50],
      [0, 50],
      [-1, 0],
    ]) {
      const [item] = shop.updateQuality();

      expect(item.quality).to.equal(quality);
      expect(item.sellIn).to.equal(sellIn);
    }
  });

  test("Sulfuras does not change", () => {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 5)]);

    for (const [sellIn, quality] of [
      [2, 5],
      [2, 5],
      [2, 5],
    ]) {
      const [item] = shop.updateQuality();

      expect(item.quality).to.equal(quality);
      expect(item.sellIn).to.equal(sellIn);
    }
  });

  test.skip("coverage of 100% via brute force", () => {
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

    const gildedRose = new Shop(dummies);
    const items = gildedRose.updateQuality();
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
