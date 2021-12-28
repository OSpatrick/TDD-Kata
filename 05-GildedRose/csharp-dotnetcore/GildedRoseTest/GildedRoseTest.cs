using System;
using System.Collections.Generic;
using Xunit;
using ApprovalTests;
using ApprovalTests.Reporters;
using ApprovalTests.Combinations;

namespace Katas
{
    [UseReporter(typeof(DiffReporter))]
    public class GuildedRoseTest
    {
        [Fact]
        public void testTheTruth()
        {
            Assert.True(true);
            GildedRose.items = new List<Item>() {new Item("Foo", 10, 100)};
            GildedRose.updateQuality();
        }

        [Fact]
        public void CombinationTests()
        {
            var itemNameSamples = new List<String>() {
                "Foo", 
                null, 
                "", 
                "Aged Brie", 
                "Backstage passes to a TAFKAL80ETC concert",
                "Sulfuras, Hand of Ragnaros"
            };

            var sellInValueSamples = new List<int>() { -1, 0, 5, 6, 10, 11};
            var qualityValueSamples = new List<int>() { -1, 0, 1, 10, 49, 50, 51};

            CombinationApprovals.VerifyAllCombinations(TestCombinationSamples, 
                itemNameSamples, sellInValueSamples, qualityValueSamples);

        }

        private Item TestCombinationSamples(String itemName, int sellIn, int quality)
        {
            GildedRose.items = new List<Item>() { new Item(itemName, sellIn, quality) };
            GildedRose.updateQuality();
            return GildedRose.items[0];
        }

    }
}
