using System;
using System.Collections.Generic;


namespace Katas
{
    public class MockEmailService : IEmailService
    {
        public string  Message { get; private set; }
        public List<string> EmailList { get; private set; }

        public void SendMessage(string message, List<string> emails)
        {
            Message = message;
            EmailList = emails;
        }
    }
}
