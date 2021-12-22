using System;
using System.Collections.Generic;

namespace Katas
{
    public interface IEmailService
    {
        void SendMessage(String message, List<String> emails);
    }
}
