using System;
using System.Collections.Generic;
using Xunit;
using ApprovalTests;
using ApprovalTests.Reporters;
using ApprovalTests.Combinations;
using System.Collections;

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
                ItemNameConstants.SULFURAS,
                ItemNameConstants.AGED_BRIE,
                ItemNameConstants.BACK_STAGE_PASSES
            };
            //ItemNameConstants.AGED_BRIE,
            //ItemNameConstants.BACK_STAGE_PASSES,
            //ItemNameConstants.SULFURAS


            var sellInValueSamples = new List<int>() { -1, 0, 1, 5, 6, 10, 11};
            var qualityValueSamples = new List<int>() { -1, 0, 50, 51};

            CombinationApprovals.VerifyAllCombinations(TestCombinationSamples, 
                itemNameSamples, sellInValueSamples, qualityValueSamples);

        }

        private Item TestCombinationSamples(String itemName, int sellIn, int quality)
        {
           GildedRose.InitItemList(new Item(itemName, sellIn, quality));
           GildedRose.updateQuality();
           return GildedRose.items[0];
        }

    }
}
