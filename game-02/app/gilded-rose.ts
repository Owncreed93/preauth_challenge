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

    checkSellIn(item: Item, factor: number = 1){
        if (item.sellIn > 0) item.sellIn -= factor;
    }

    checkQuality(item: Item, positive: boolean = true, factor: number = 1, limit: number = 50){
        if (item.quality > 0 && item.quality < limit){
            // CHECK BACKTAGE LOGIC
            //if ( (item.quality -= factor) < 0 ) item.quality -= item.quality 
            //if ( (item.quality += factor) > limit ) item.quality -= item.quality 
            positive ? item.quality += factor : item.quality -= factor
        };
    }

    updateAgedBrie(item: Item) {
        // if (item.sellIn > 0) {
        //     item.sellIn -= 1
        //     if (item.quality < 50) item.quality += 1; 
        // };
        this.checkSellIn(item);
        if (item.sellIn === 0) {
            item.quality < 49 ? this.checkQuality(item, true, 2) : this.checkQuality(item);
        } else {
            this.checkQuality(item);
        }
        
    }

    updateBacktagePasses(item: Item){
        this.checkSellIn(item)
        console.log(item.sellIn);
        if ( item.sellIn < 1 ){
            item.quality = 0;
        } else {
            console.log('Flujo normal');
            if (item.quality !== 50) {
                if (item.sellIn >= 6 && item.sellIn <= 10){
                    item.quality < 49 ? item.quality += 2 : item.quality += 1;
                } else if (item.sellIn >= 1 && item.sellIn <= 5){
                    item.quality < 48 ? item.quality += 3 : item.quality += 2;
                } else {
                    if (item.quality < 50) item.quality += 1;
                }
            }
        }
    }

    updateConjured(item: Item){
        this.checkSellIn(item);
        if (item.sellIn > 0){
            item.quality > 1 ? this.checkQuality(item, false, 2) : this.checkQuality(item, false);
        } else {
            item.quality > 3 ? 
                this.checkQuality(item, false, 4) : 
                this.checkQuality(item, false, item.quality);
        }
    }

    updateNormalItem(item: Item){
        // if (item.sellIn > 0) {
        //     item.sellIn -= 1;
        //     if (item.quality > 0) item.quality -= 1; 
        // }
        this.checkSellIn(item);
        if (item.sellIn > 0){
            this.checkQuality(item, false);
        } else {
            item.quality > 1 ? this.checkQuality(item, false, 2) : this.checkQuality(item, false);
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

    updateQualityTwo() {
        for (const item of this.items) {
            if (item.name === 'Aged Brie') {
                this.updateAgedBrie(item);
            } else if (this.compareProductName('Backstage passes', item.name)){
                this.updateBacktagePasses(item);
            } else if (this.compareProductName('Conjured', item.name)){
                this.updateConjured(item);
            } else if (this.compareProductName('Sulfuras', item.name)) {
                this.checkSellIn(item);
                continue;
            } else {
                this.updateNormalItem(item);
            }
        }
        return this.items
    }
}
