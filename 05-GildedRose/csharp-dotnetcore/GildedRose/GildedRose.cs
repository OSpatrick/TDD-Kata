using System;
using System.Collections.Generic;

namespace Katas
{
    public class GildedRose
    {
        public static IList<Item> items = null;

        static void Main(string[] args)
        {
            Console.WriteLine("OMGHAI!");

			items = new List<Item>();
			items.Add(new Item("+5 Dexterity Vest", 10, 20));
			items.Add(new Item("Aged Brie", 2, 0));
			items.Add(new Item("Elixir of the Mongoose", 5, 7));
			items.Add(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
			items.Add(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
			items.Add(new Item("Conjured Mana Cake", 3, 6));

			updateQuality();
        }

		public static void updateQuality()
		{
			for (int i = 0; i < items.Count; i++)
			{
				if (ItemNameConstants.SULFURAS.Equals(items[i].Name)) continue;

				if ((!ItemNameConstants.AGED_BRIE.Equals(items[i].Name)) && 
					 !ItemNameConstants.BACK_STAGE_PASSES.Equals(items[i].Name)) {
					 DecrementQuality(items[i]);
				} else {

						IncrementQuality(items[i]);

						if (ItemNameConstants.BACK_STAGE_PASSES.Equals(items[i].Name))
						{
							if (items[i].SellIn < 11)
								IncrementQuality(items[i]);

							if (items[i].SellIn < 6)
								IncrementQuality(items[i]);
						}
				}

				items[i].SellIn = (items[i].SellIn - 1);

				if (items[i].SellIn < 0)
				{
					if (!ItemNameConstants.AGED_BRIE.Equals(items[i].Name))
					{
						if (!ItemNameConstants.BACK_STAGE_PASSES.Equals(items[i].Name)) {
							DecrementQuality(items[i]);
						} else {
							items[i].Quality = 0;
						}
					}
					else
					{
						IncrementQuality(items[i]);
					}
				}
			}
		}

		private static void IncrementQuality(Item item) {
			if(item.Quality >= 50) { return; }
			item.Quality++;
		}

		private static void DecrementQuality(Item item) {
			if (item.Quality < 1) { return; }
			item.Quality--;
		}
	}
}
