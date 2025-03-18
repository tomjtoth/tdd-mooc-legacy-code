export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  incQuality(n) {
    while (n-- > 0 && this.quality < 50) this.quality++;
  }

  decQuality(n) {
    while (n-- > 0 && this.quality > 0) this.quality--;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          item.incQuality(--item.sellIn < 0 ? 2 : 1);
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          const expiry = item.sellIn--;

          if (item.sellIn < 0) item.quality = 0;
          else if (expiry < 6) item.incQuality(3);
          else if (expiry < 11) item.incQuality(2);
          else item.incQuality(1);
          break;

        case "Conjured":
          item.decQuality(--item.sellIn < 0 ? 4 : 2);
          break;

        case "Sulfuras, Hand of Ragnaros":
          break;

        default:
          item.decQuality(--item.sellIn < 0 ? 2 : 1);
      }
    }

    return this.items;
  }
}
