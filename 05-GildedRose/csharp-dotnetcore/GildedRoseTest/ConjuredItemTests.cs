using System;
using System.Collections.Generic;
using Xunit;

namespace Katas
{
    public class ConjuredItemTests
    {
        [Fact] 
        public void ConjuredItem_Should_Decrement_By_Two()
        {
            var item = new Item(ItemNameConstants.CONJURED, 5, 5);

            GildedRose.InitItemList(item);
            GildedRose.updateQuality();

            Assert.Equal(3, item.Quality);
        }

    }
}
