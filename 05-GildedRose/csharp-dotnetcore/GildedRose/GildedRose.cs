using System;
using System.Collections.Generic;
using System.Linq;

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
                var item = items[i];

                if (ItemNameConstants.SULFURAS.Equals(item.Name)) continue;

                if (ItemImprovesWithAge(item))
                {
                    ImproveItemQuality(item);
                }
                else
                {
                    DegradeItemQuality(item);

                }

                item.SellIn--;

                if (item.SellIn < 0) HandleExpiredItem(item);
            }
        }

        private static bool ItemImprovesWithAge(Item item)
        {
            return ItemNameConstants.AGED_BRIE.Equals(item.Name) ||
                                 ItemNameConstants.BACK_STAGE_PASSES.Equals(item.Name);
        }

        private static void HandleExpiredItem(Item item)
        {
            if (ItemNameConstants.AGED_BRIE.Equals(item.Name))
            {
                IncrementQuality(item);
            }
            else
            {
                if (ItemNameConstants.BACK_STAGE_PASSES.Equals(item.Name))
                {
                    item.Quality = 0;
                }
                else
                {
                    DecrementQuality(item);

                    if (ItemNameConstants.CONJURED.Equals(item.Name))
                        DecrementQuality(item);
                }
            }
        }

        private static void DegradeItemQuality(Item item)
        {
            DecrementQuality(item);

            if (ItemNameConstants.CONJURED.Equals(item.Name))
                DecrementQuality(item);
        }

        private static void ImproveItemQuality(Item item)
        {
            IncrementQuality(item);

            if (ItemNameConstants.BACK_STAGE_PASSES.Equals(item.Name))
            {
                if (item.SellIn < 11)
                    IncrementQuality(item);

                if (item.SellIn < 6)
                    IncrementQuality(item);
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

		public static void InitItemList(params Item[] p_items)
        {
			items = p_items.ToList();
		}
    }
}
