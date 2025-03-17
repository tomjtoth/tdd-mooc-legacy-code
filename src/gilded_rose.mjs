export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  toJSON() {
    return { name: this.name, quality: this.quality, sellIn: this.sellIn };
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (!["Aged Brie", "Backstage passes to a TAFKAL80ETC concert"].includes(item.name)) {
        if (item.quality > 0 && item.name != "Sulfuras, Hand of Ragnaros") item.quality--;
      } else {
        if (item.quality < 50) {
          item.quality++;

          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11 && item.quality < 50) item.quality++;
            if (item.sellIn < 6 && item.quality < 50) item.quality++;
          }
        }
      }

      if (item.name != "Sulfuras, Hand of Ragnaros") item.sellIn--;

      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0 && item.name != "Sulfuras, Hand of Ragnaros") item.quality--;
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) item.quality++;
        }
      }
    }

    return this.items;
  }
}
