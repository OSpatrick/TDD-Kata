using System;
using Xunit;
using FluentAssertions;
using System.Collections.Generic;

namespace Katas
{
    public class RenewalNotificationServiceTest
    {
        private MockSubscriberService _mockSubscriberService;
        private MockEmailService _emailService;
        private RenewalNotificationService _renewalNotificationService;
 
        private List<string> _subscriberEmailList = new List<string> {"subscriber1@testemail.com",
                                                        "subscriber2@testemail.com"};

        public RenewalNotificationServiceTest()
        {
            _emailService = new MockEmailService();
            _mockSubscriberService = new MockSubscriberService(_subscriberEmailList);
            _renewalNotificationService = new RenewalNotificationService(_mockSubscriberService, _emailService);
        }

        [Fact]
        public void ValidateEmailMessage() {

            _renewalNotificationService.notifyAtRiskSubscribers();
            _emailService.Message.Should().Be("Please renew your subscription to Ferret Fancy!");
            _emailService.EmailList.Should().BeEquivalentTo(_subscriberEmailList);
        }

        [Fact]
        public void ValidateRenewDate() {
            var expirationDate =  DateTime.Now.AddDays(-90);
            _renewalNotificationService.notifyAtRiskSubscribers();
            _mockSubscriberService.Day.Should().Be(expirationDate.Day);
            _mockSubscriberService.Month.Should().Be(expirationDate.Month);
            _mockSubscriberService.Year.Should().Be(expirationDate.Year);
        }

    }
}
