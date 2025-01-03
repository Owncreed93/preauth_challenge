import { Item, GildedRose } from "../app/gilded-rose";
import { simulateUpdates } from "../app/helpers";

describe('Guilded Rose Item updates :', () => {

    it('Should update Aged Brie over 5 days left with quality increment to 26.', () => {
        const agedBrieOne = new Item('Aged Brie', 5, 20);
        const gildedRose = new GildedRose([agedBrieOne]);

        simulateUpdates(gildedRose, 5);

        const updatedAgedBrie = gildedRose.items[0];

        expect(updatedAgedBrie.sellIn).toBe(0);
        expect(updatedAgedBrie.quality).toBe(26);
    });

    it('Should update Aged Brie over 3 days left with quality increment to 50.', () => {
        const agedBrieOne = new Item('Aged Brie', 3, 47);
        const gildedRose = new GildedRose([agedBrieOne]);

        simulateUpdates(gildedRose, 3);

        const updatedAgedBrie = gildedRose.items[0];

        expect(updatedAgedBrie.sellIn).toBe(0);
        expect(updatedAgedBrie.quality).toBe(50);
    });

    it('Should update Aged Brie over 1 day left with quality increment to 50.', () => {
        const agedBrieOne = new Item('Aged Brie', 1, 48);
        const gildedRose = new GildedRose([agedBrieOne]);

        simulateUpdates(gildedRose, 1);

        const updatedAgedBrie = gildedRose.items[0];

        expect(updatedAgedBrie.sellIn).toBe(0);
        expect(updatedAgedBrie.quality).toBe(50);
    });

    it('Should update Backstage passes within 10 days left with +2 quality increment.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 10, 30);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 3);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(7);
        expect(updatedBackstagePass.quality).toBe(36);
    });

    it('Should update Backstage passes within 5 days left with +3 quality increment.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 5, 40);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 3);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(2);
        expect(updatedBackstagePass.quality).toBe(49);
    });

    it('Should update Backstage passes within 40 days left with +1 usual quality increment.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 40, 20);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 6);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(34);
        expect(updatedBackstagePass.quality).toBe(26);
    });

    it('Should update Backstage passes within 10 days left with +2 quality increment and 50 limit.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 10, 47);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 3);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(7);
        expect(updatedBackstagePass.quality).toBe(50);
    });

    it('Should update Backstage passes within 5 days left with +3 quality increment and 50 limit.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 5, 45);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 3);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(2);
        expect(updatedBackstagePass.quality).toBe(50);
    });

    it('Should update Backstage passes with 0 days left with 0 quality drop.', () => {
        const backstageOne = new Item('Backstage passes to a TAFKAL80ETC', 3, 45);
        const gildedRose = new GildedRose([backstageOne]);

        simulateUpdates(gildedRose, 3);

        const updatedBackstagePass = gildedRose.items[0];

        expect(updatedBackstagePass.sellIn).toBe(0);
        expect(updatedBackstagePass.quality).toBe(0);
    });

    it('Should update a Conjured item with -2 quality decrease (usual on this item).', () => {
        const conjuredOne = new Item('Conjured item 1', 12, 32);
        const gildedRose = new GildedRose([conjuredOne]);

        simulateUpdates(gildedRose, 6);

        const updatedConjuredItem = gildedRose.items[0];

        expect(updatedConjuredItem.sellIn).toBe(6);
        expect(updatedConjuredItem.quality).toBe(20);
    });

    it('Should update a Conjured item with -4 quality decrease if sellIn is 0.', () => {
        const conjuredOne = new Item('Conjured item 2', 2, 15);
        const gildedRose = new GildedRose([conjuredOne]);

        simulateUpdates(gildedRose, 3);

        const updatedConjuredItem = gildedRose.items[0];

        expect(updatedConjuredItem.sellIn).toBe(0);
        expect(updatedConjuredItem.quality).toBe(5);
    });

    it('Shouldn\'t update a \'Sulfuras, hand of ragnaros\' quality on regular update.', () => {
        const sulfurasOne = new Item('Conjured item 2', 2, 80);
        const gildedRose = new GildedRose([sulfurasOne]);

        simulateUpdates(gildedRose, 3);

        const updatedSulfuras = gildedRose.items[0];

        expect(updatedSulfuras.sellIn).toBe(0);
        expect(updatedSulfuras.quality).toBe(80);
    });

    it('Should update a Normal item with -1 quality decrease on regular update.', () => {
        const normalOne = new Item('Taki', 5, 40);
        const gildedRose = new GildedRose([normalOne]);

        simulateUpdates(gildedRose, 3);

        const updatedNormal = gildedRose.items[0];

        expect(updatedNormal.sellIn).toBe(2);
        expect(updatedNormal.quality).toBe(37);
    });

    it('Should update a Normal item with -2 quality decrease when sellIn is 0.', () => {
        const normalOne = new Item('Chip potatoes', 2, 20);
        const gildedRose = new GildedRose([normalOne]);

        simulateUpdates(gildedRose, 3);

        const updatedNormal = gildedRose.items[0];

        expect(updatedNormal.sellIn).toBe(0);
        expect(updatedNormal.quality).toBe(15);
    });
    
})