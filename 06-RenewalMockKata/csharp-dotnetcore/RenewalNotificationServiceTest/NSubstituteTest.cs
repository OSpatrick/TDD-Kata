using System;
using Xunit;
using FluentAssertions;
using System.Collections.Generic;
using NSubstitute;

namespace Katas {

    public class NSubstituteTest
    {
        private ISubscriberService _mockSubscriberService;
        private IEmailService _emailService;
        private RenewalNotificationService _renewalNotificationService;

        private List<string> _subscriberEmailList = new List<string> {"subscriber1@testemail.com",
                                                        "subscriber2@testemail.com"};

        public NSubstituteTest()
        {
            _emailService = Substitute.For<IEmailService>();
            _mockSubscriberService = Substitute.For<ISubscriberService>();
            _renewalNotificationService = new RenewalNotificationService(_mockSubscriberService, _emailService);
        }

        [Fact]
        public void ValidateEmailMessage()
        {
            string capturedMessage = null;
            List<string> capturedEmails = null ;

            _mockSubscriberService.
                GetSubscribersThatWillExpireBetweenNowAndDate(default, default, default).
                ReturnsForAnyArgs(_subscriberEmailList);

            _emailService.When((es) => es.SendMessage(Arg.Any<string>(), Arg.Any<List<string>>())).
                Do(cbArgs => { 
                    capturedMessage = (string)cbArgs[0];
                    capturedEmails = (List<string>)cbArgs[1];
                });

            _renewalNotificationService.notifyAtRiskSubscribers();

            capturedMessage.Should().Be("Please renew your subscription to Ferret Fancy!");
            capturedEmails.Should().BeEquivalentTo(_subscriberEmailList);
        }

        [Fact]
        public void ValidateRenewDate()
        {
            //var expirationDate = DateTime.Now.AddDays(90);

            _renewalNotificationService.notifyAtRiskSubscribers();

            _mockSubscriberService.Received().GetSubscribersThatWillExpireBetweenNowAndDate(1, 1, 2021);
        }

    }
}
