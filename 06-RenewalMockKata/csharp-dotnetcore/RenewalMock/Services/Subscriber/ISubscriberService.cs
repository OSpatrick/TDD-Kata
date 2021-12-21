﻿using System;
using System.Collections.Generic;

namespace Katas
{
    public interface ISubscriberService
    {
       List<string> GetSubscribersThatWillExpireBetweenNowAndDate(int day, int month, int year);
    }
}
