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
        "quality": 10
    },
    {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "sellIn": 5,
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
        "quality": 10
    },
    {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "sellIn": 5,
        "quality": 10
    }
];

let items: Item[] = [];
for (const element of data) {
    items.push(new Item(element.name, element.sellIn, element.quality))
}

console.log(items);