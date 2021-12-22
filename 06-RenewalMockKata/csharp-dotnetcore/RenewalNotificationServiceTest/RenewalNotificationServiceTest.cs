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

        //private List<Subscriber> _subscriberList = new List<Subscriber> { 
        //    new Subscriber("Anthony Lewis", "al@testemail.com", new DateTime(2021, 11, 14)),
        //    new Subscriber("Richard Gere", "rgere@testemail.com", new DateTime(2022, 5, 26)),
        //    new Subscriber("George Smith", "georges@testemail.com", new DateTime(2022, 8, 9)),
        //    new Subscriber("Bill Wilson Jr", "bwilsonjr@testemail.com", new DateTime(2021, 3, 5)),
        //    new Subscriber("Bill Wilson", "bwilson@testemail.com", new DateTime(2022, 3, 5)),
        //    new Subscriber("Lucy Liu", "lliu@testemail.com", new DateTime(2020, 4, 12)),
        //};

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
            _mockSubscriberService.Day.Should().Be(1);
            _mockSubscriberService.Month.Should().Be(1);
            _mockSubscriberService.Year.Should().Be(2021);
        }

    }
}
