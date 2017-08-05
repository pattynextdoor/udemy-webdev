var item1 = -10;
var item2 = 10;
var item3 = 300;
var item4 = 5;

while(item1 <= 19)
{
  console.log(item1);
  item1 += 1;
}

while(item2 <= 40)
{
  if(item2 % 2 === 0)
  {
    console.log(item2);
  }
  item2 += 1;
}

while(item3 <= 333)
{
  if(item3 % 2 === 1)
  {
    console.log(item3);
  }
  item3 += 1;
}

while(item4 <= 50)
{
  if(item4 % 5 === 0 && item4 % 3 === 0)
  {
    console.log(item4);
  }
  item4 += 1;
}
