using System;
namespace Katas
{
    public static class RenewalNotificationService
    {
		public static void notifyAtRiskSubscribers(ISubscriberService subscriberService, IEmailService emailService) {
            if (subscriberService == null) throw new ArgumentNullException("subscriberService");
            if (emailService == null) throw new ArgumentNullException("emailService");


        }
    }
}
