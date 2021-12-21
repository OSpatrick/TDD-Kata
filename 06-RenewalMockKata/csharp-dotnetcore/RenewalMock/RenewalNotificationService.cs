using System;
namespace Katas
{
    public class RenewalNotificationService
    {
		ISubscriberService myThing;

		public RenewalNotificationService(ISubscriberService subscriberService, EmailService emailService)
		{
			myThing = subscriberService;
		}

		public void notifyAtRiskSubscribers()
		{
		}
    }
}
