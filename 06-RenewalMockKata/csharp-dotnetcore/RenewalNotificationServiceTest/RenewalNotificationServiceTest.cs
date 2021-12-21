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
            _emailService.Message.Should().Be("Please renew your subscription.");
            _emailService.EmailList.Should().BeEquivalentTo(_subscriberEmailList);
        }

        [Fact]
        public void ValidateRenewDate() {
            _renewalNotificationService.notifyAtRiskSubscribers();
            _mockSubscriberService.Day.Should().Be(1);
            _mockSubscriberService.Month.Should().Be(1);
            _mockSubscriberService.Year.Should().Be(2020);
        }

        //[Fact]
        //public void TestNotificationServiceForNullArguments() {
        //    var act = () => new RenewalNotificationService(null, new MockEmailService());
        //    act.Should().ThrowExactly<ArgumentNullException>().WithMessage("Value cannot be null. (Parameter 'subscriberService')");

        //    act = () => new RenewalNotificationService(new MockSubscriberService(), null);
        //    act.Should().ThrowExactly<ArgumentNullException>().WithMessage("Value cannot be null. (Parameter 'emailService')");
        //}
    }
}
