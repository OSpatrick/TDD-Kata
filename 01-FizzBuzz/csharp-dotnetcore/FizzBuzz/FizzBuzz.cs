using System;

namespace Katas
{
    public class FizzBuzz
    {
		static void Main(string[] args)
		{
        }

        public string Process(int inputValue)
        {
            string returnValue = string.Empty;
            if(inputValue % 3 == 0)
            {
                returnValue = "Fizz";
            }
            if (inputValue % 5 == 0)
            {
                returnValue += "Buzz";
            }
            if(String.IsNullOrEmpty(returnValue))
            {
                returnValue = inputValue.ToString();
            }
            return returnValue;
        }
    }
}
