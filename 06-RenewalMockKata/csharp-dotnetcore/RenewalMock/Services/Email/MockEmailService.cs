using System;
using System.Collections.Generic;


namespace Katas
{
    public class MockEmailService : IEmailService
    {
        public void EmailMessage(string message, List<string> emails)
        {
            throw new NotImplementedException();
        }
    }
}
