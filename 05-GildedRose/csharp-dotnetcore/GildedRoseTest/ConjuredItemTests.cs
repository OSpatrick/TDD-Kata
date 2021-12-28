using System;
using System.Collections.Generic;
using Xunit;

namespace Katas
{
    public class ConjuredItemTests
    {

        [Theory]
        [InlineData("Conjured Item Degrades Twice as Fast.", 5, 5, 3)]
        [InlineData("Expired Conjured Item Degrades Four Times as Fast.", 0, 5, 1)]
        [InlineData("Conjured Item Doesn't Degrade Below Zero.", 5, 1, 0)]
        [InlineData("Expired Conjured Item Doesn't Degrade Below Zero.", 0, 3, 0)]
        public void Conjured_Item_Tests(string testName, int sellIn, int quality, int expectedQuality)
        {
            var item = new Item(ItemNameConstants.CONJURED, sellIn, quality);

            GildedRose.InitItemList(item);
            GildedRose.updateQuality();

            Assert.Equal(expectedQuality, item.Quality);
        }


    }
}
