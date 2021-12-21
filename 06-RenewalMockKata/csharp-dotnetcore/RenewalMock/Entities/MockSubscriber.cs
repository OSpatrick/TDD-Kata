using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RenewalMock.Entities
{
    public class MockSubscriber {
        public readonly string Name;
        public readonly string Email;
        public readonly DateTime SubscriptionEndDate;

        public MockSubscriber(string name, string email, DateTime subscriptionEndDate) {
            Name = name;
            Email = email;
            SubscriptionEndDate = subscriptionEndDate;
        }
    }
}
