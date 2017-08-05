var item1 = -10;
var item2 = 10;
var item3 = 300;
var item4 = 5;

for (var item1 = -10; item1 <= 19; item1++)
{
  console.log(item1);
}

for (var item2 = 10; item2 <= 40; item2++)
{
  if(item2 % 2 === 0)
  {
    console.log(item2);
  }
}

for (var item3 = 300; item3 <= 333; item3++)
{
  if(item3 % 2 === 1)
  {
    console.log(item3);
  }
}

for (var item4 = 5; item4 <= 50; item4++)
{
  if(item4 % 5 === 0 && item4 % 3 === 0)
  {
    console.log(item4);
  }
}
