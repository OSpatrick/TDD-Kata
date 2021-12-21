using System;
namespace Katas
{
    public class RenewalNotificationService
    {
        private readonly ISubscriberService _subscriberService;
        private readonly IEmailService _emailService;

        public RenewalNotificationService(ISubscriberService subscriberService, IEmailService emailService)
        {
            _subscriberService = subscriberService;
            _emailService = emailService;
        }

        public void notifyAtRiskSubscribers() {
            var expirationDate = DateTime.Now.AddDays(-90);
            _emailService.EmailMessage("Please renew your subscription to Ferret Fancy!", 
                                       _subscriberService.GetSubscribersThatWillExpireBetweenNowAndDate(expirationDate.Day, expirationDate.Month, expirationDate.Year));
        }
    }
}
