export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateDaysLeftToSell(item: Item, factor: number = 1){
        if (item.sellIn > 0) item.sellIn -= factor;
    }

    increaseQuality(item: Item, factor: number = 1){
        if (item.quality < 50) item.quality += factor;
    }

    decreaseQuality(item: Item, factor: number = 1){
        if (item.quality < 50) item.quality -= factor;
    }

    updateAgedBrie(item: Item) {
        if (item.sellIn > 0) {
            item.sellIn -= 1
            if (item.quality < 50) item.quality += 1; 
        };
    }

    updateBacktagePasses(item: Item){
        // const regex = /^Backstage passes/;
        // if (regex.test(item.name))
        if (item.sellIn > 0) {
            item.sellIn -= 1
            if (item.sellIn <= 10){
                item.quality < 49 ? item.quality += 2 : item.quality += 1;
            } else if (item.sellIn <= 5){
                item.quality < 48 ? item.quality += 3 : item.quality += 2;
            } else {
                if (item.quality < 50) item.quality += 1;
            }
        } else {
            item.quality = 0;
        }

    }

    updateConjured(item: Item){
        if (item.sellIn > 0) {
            item.sellIn -= 1;
            if (item.quality > 0) item.quality -= 2; 
        }
    }

    updateNormalItem(item: Item){
        if (item.sellIn > 0) {
            item.sellIn -= 1;
            if (item.quality > 0) item.quality -= 1; 
        }
    }

    compareProductName(pattern: string, stringToCompare: string): boolean{
        const regex_patern = new RegExp(`^${pattern}`);
        let result = false;
        if (regex_patern.test(stringToCompare)) result = true;
        return result
    }

    showItems(){
        for (const item of this.items) {
            console.log(item)
            // console.log(item.name);
            // console.log(item.sellIn)
            // console.log(item.quality);
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }

    updateQualityTwo() {
        for (const item of this.items) {
            if (item.name === 'Aged Brie') {
                this.updateAgedBrie(item);
            } else if (this.compareProductName('Backstage passes', item.name)){
                this.updateBacktagePasses(item);
            } else if (this.compareProductName('Conjured', item.name)){
                this.updateConjured(item);
            } else if (this.compareProductName('Sulfuras', item.name)) {
                continue;
            } else {
                this.updateNormalItem(item);
            }
        }
        return this.items
    }
}
