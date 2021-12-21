using System;
namespace Katas
{
    public class RenewalNotificationService
    {
		ISubscriberService myThing;

		public RenewalNotificationService(ISubscriberService subscriberService, IEmailService emailService)
		{
			myThing = subscriberService;
		}

		public void notifyAtRiskSubscribers()
		{
		}
    }
}
