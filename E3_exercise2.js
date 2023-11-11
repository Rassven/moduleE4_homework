function numIsNatural(num)
{	if (typeof(num) != 'number')
		{return `${num} not a number (${typeof(num)})`}
	else
 		{if (num < 0)
 			{return `${num} is negative`}
  		else
			{if (num > 1000)
				{return `${num} is too big (>1000)`} 										else
 				{if (num == 0)
 					{return `${num} is zero (not natural)!`}
  				else
					{if (num == 1)
						{return `${num} is prime, but not natural`}
  					else
	 					{if (num % 1 > 0)
	 						{return `${num} is not integer!`}
  						else
							{for (i = num - 1; i > 1; i--)
      							{if (num % i == 0)
      								{return `${num} is not natural`}
								}
							}
						}
					}
				}
			}
		}
return `${num} is natural!!!`;
}
