using System;
using Xunit;
using FluentAssertions;

namespace Katas
{
    public class RenewalNotificationServiceTest
    {
        [Fact]
        public void notifyingAtRiskSubscribersShouldSendEmails()
        {
			//RenewalNotificationService renewalNotificationService = new RenewalNotificationService(new RealSubscriberService(), null);
            //RenewalNotificationService.notifyAtRiskSubscribers();

            // Uh oh... how will we know what happened if the method doesn't return any information?

            var act = () => RenewalNotificationService.notifyAtRiskSubscribers(null, new MockEmailService());
            act.Should().ThrowExactly<ArgumentNullException>().WithMessage("Value cannot be null. (Parameter 'subscriberService')");
            
            act = () => RenewalNotificationService.notifyAtRiskSubscribers(new MockSubscriberService(), null);
            act.Should().ThrowExactly<ArgumentNullException>().WithMessage("Value cannot be null. (Parameter 'emailService')");


        }
    }
}
