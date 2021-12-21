using System;
using System.Collections.Generic;

namespace Katas
{
    public class MockSubscriberService : ISubscriberService
    {
        private readonly List<string> _subscriberEmailList;

        public int Day { get; private set; }
        public int Month { get; private set; }
        public int Year { get; private set; }

        public List<string> GetSubscribersThatWillExpireBetweenNowAndDate(int day, int month, int year)
        {
            Day = day;
            Month = month;
            Year = year;

            return _subscriberEmailList;
        }

        public MockSubscriberService(List<string> subscriberEmailList)
        {
            _subscriberEmailList = subscriberEmailList;
        }
    }
}
