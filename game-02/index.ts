import { Item, GildedRose } from "./app/gilded-rose";

let data: Item[] = [
    {
        "name": "Aged Brie",
        "sellIn": 5,
        "quality": 10
    },
    {
        "name": "Sulfuras, Hand of Ragnaros",
        "sellIn": 5,
        "quality": 80
    },
    {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "sellIn": 80,
        "quality": 10
    },
    {
        "name": "Conjured Strength Beverage",
        "sellIn": 80,
        "quality": 10
    },
    {
        "name": "Aged Brie",
        "sellIn": 5,
        "quality": 10
    },
    {
        "name": "Sulfuras, Hand of Ragnaros",
        "sellIn": 5,
        "quality": 80
    },
    {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "sellIn": 60,
        "quality": 10
    },
    {
        "name": "Conjured Strength Beverage",
        "sellIn": 80,
        "quality": 10
    }
];

let items: Item[] = [];
for (const element of data) {
    items.push(new Item(element.name, element.sellIn, element.quality))
}

console.log('This is the entered data:' +items +'\n');

const guilded_rose = new GildedRose(items);

guilded_rose.updateQualityTwo();

console.log('This is the processed data 1):\n' +guilded_rose.showItems() +'\n *****************');

guilded_rose.updateQualityTwo();

console.log('This is the processed data 2):' +guilded_rose.showItems() +'\n *****************');

guilded_rose.updateQualityTwo();

console.log('This is the processed data 3):' +guilded_rose.showItems() +'\n *****************');