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
});
