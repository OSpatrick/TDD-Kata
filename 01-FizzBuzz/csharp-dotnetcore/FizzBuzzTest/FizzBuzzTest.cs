using System;
using Xunit;

namespace Katas
{
    public class FizzBuzzTest
    {
        [Fact]
        public void ShouldReturn1For1()
        {
            FizzBuzz fizzBuzz = new FizzBuzz();
            string actualReturnValue = fizzBuzz.Process(1);
            string expectedReturnValue = "1";
            Assert.Equal(expectedReturnValue, actualReturnValue);
        }

        [Fact]
        public void ShouldReturnFizzForMultipleOf3()
        {
            FizzBuzz fizzBuzz = new FizzBuzz();
            string actualReturnValue = fizzBuzz.Process(3);
            string expectedReturnValue = "Fizz";
            Assert.Equal(expectedReturnValue, actualReturnValue);
        }

        [Fact]
        public void ShouldReturnBuzzForMultipleOf5()
        {
            FizzBuzz fizzBuzz = new FizzBuzz();
            string actualReturnValue = fizzBuzz.Process(5);
            string expectedReturnValue = "Buzz";
            Assert.Equal(expectedReturnValue, actualReturnValue);
        }

        [Fact]
        public void ShouldReturnFizzBuzzForMultipleOf3And5()
        {
            FizzBuzz fizzBuzz = new FizzBuzz();
            string actualReturnValue = fizzBuzz.Process(15);
            string expectedReturnValue = "FizzBuzz";
            Assert.Equal(expectedReturnValue, actualReturnValue);
        }
    }
}
