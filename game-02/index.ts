import { Item, GildedRose } from "./app/gilded-rose";

// let data: Item[] = [
//     {
//         "name": "Aged Brie",
//         "sellIn": 5,
//         "quality": 10
//     },
//     {
//         "name": "Sulfuras, Hand of Ragnaros",
//         "sellIn": 5,
//         "quality": 80
//     },
//     {
//         "name": "Backstage passes to a TAFKAL80ETC concert",
//         "sellIn": 80,
//         "quality": 10
//     },
//     {
//         "name": "Conjured Strength Beverage",
//         "sellIn": 80,
//         "quality": 10
//     },
//     {
//         "name": "Aged Brie",
//         "sellIn": 5,
//         "quality": 10
//     },
//     {
//         "name": "Sulfuras, Hand of Ragnaros",
//         "sellIn": 5,
//         "quality": 80
//     },
//     {
//         "name": "Backstage passes to a TAFKAL80ETC concert",
//         "sellIn": 60,
//         "quality": 10
//     },
//     {
//         "name": "Conjured Strength Beverage",
//         "sellIn": 80,
//         "quality": 10
//     }
// ];

let items: Item[] = [];
// for (const element of data) {
//     items.push(new Item(element.name, element.sellIn, element.quality))
// }
// console.log('This is the entered data:' +items +'\n');

//  ********* TESTING BACKSTAGE ITEM****** //
// let backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 10, 30);
// let backstageTwo = new Item('Backstage passes to a TAFKAL80ETC', 5, 30);
// let backstageThree = new Item('Backstage passes to a TAFKAL80ETC', 40, 20);
// let backstageFour = new Item('Backstage passes to a TAFKAL80ETC', 10, 47);
// let backstageFive = new Item('Backstage passes to a TAFKAL80ETC', 3, 45);
// let backstageSix = new Item('Backstage passes to a TAFKAL80ETC', 40, 30);
// items.push(backstageOne, backstageTwo, backstageThree);
// items.push(backstageFour, backstageFive, backstageSix);
//  ************************************** //


//  ********* TESTING AGED BRIE ITEM ****** //
// let agedBrieOne = new Item('Aged Brie', 5, 20);
// let agedBrieTwo = new Item('Aged Brie', 2, 30);
// let agedBrieThree = new Item('Aged Brie', 1, 48);
// items.push(agedBrieOne, agedBrieTwo, agedBrieThree);
//  ************************************** //

//  ********* TESTING CONJURED ITEM ****** //
// let conjuredOne = new Item('Conjured item 1', 3, 20);
// let conjuredTwo = new Item('Conjured item 2', 2, 15);
// let conjuredThree = new Item('Conjured item 3', 1, 10);
// items.push(conjuredOne, conjuredTwo, conjuredThree);
//  ************************************** //

//  ********* TESTING SULFURAS ITEM ****** //
// let sulfurasOne = new Item('Sulfuras 1', 5, 20);
// let sulfurasTwo = new Item('Sulfuras 2', 2, 30);
// let sulfurasThree = new Item('Sulfuras 3', 1, 48);
// items.push(sulfurasOne, sulfurasTwo, sulfurasThree);
//  ************************************** //

//  ********* TESTING NORMAL ITEM ****** //
// let normalOne = new Item('Takis', 5, 20);
// let normalTwo = new Item('Muffin', 20, 30);
// let normalThree = new Item('Chip potatoes', 2, 20);
// items.push(normalOne, normalTwo, normalThree);
//  ************************************** //

const guilded_rose = new GildedRose(items);
console.log(guilded_rose.showItems());

guilded_rose.updateQualityTwo();
console.log('This is the processed data 1): \n');
console.log(guilded_rose.showItems());
console.log('**************************');

guilded_rose.updateQualityTwo();
console.log('This is the processed data 2): \n');
console.log(guilded_rose.showItems());
console.log('**************************');

guilded_rose.updateQualityTwo();
console.log('This is the processed data 3): \n');
console.log(guilded_rose.showItems());
console.log('**************************');