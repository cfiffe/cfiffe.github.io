
document.write("hello world");

document.write("Using Math.sqrt <br/>")
for(var k = 0; k < 9; k++)
  {
    var ans = Math.sqrt(k);
    document.write(ans + "<br/>");
  }

document.write("<br/>  Using Math.random")

var beginning = 40;

while(beginning > 0)
   {
    document.write(" Current Count: " + beginning + "<br />")
    beginning = Math.random () * 11;
     beginning--;
  }
