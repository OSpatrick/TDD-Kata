using System;
namespace Katas
{
    public class RenewalNotificationService
    {
        private readonly ISubscriberService _subscriberService;
        private readonly IEmailService _emailService;

        //TODO: Add date field.

        public RenewalNotificationService(ISubscriberService subscriberService, IEmailService emailService)
        {
            _subscriberService = subscriberService;
            _emailService = emailService;
        }

        public void notifyAtRiskSubscribers() {
            _emailService.EmailMessage("Please renew your subscription.", 
                                       _subscriberService.GetSubscribersThatWillExpireBetweenNowAndDate(1,1,2021));
        }
    }
}
