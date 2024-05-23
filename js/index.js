var goodReads = [
    {
     qoute: " Insanity is doing the same thing, over and over again, but expecting different results. ",
     auther:"  Narcotics Anonymous"
    },
    {
        qoute: " Be the change that you wish to see in the world. ",
        auther:"  Mahatma Gandhi"
    },
    {
        qoute: " In three words I can sum up everything I've learned about life: it goes on. ",
        auther:"   Robert Frost"
    },
    {
        qoute: " If you tell the truth, you don't have to remember anything. ",
        auther:"   Mark Twain"
    },
    {
        qoute: " Don’t walk in front of me I may not follow Don’t walk behind me  I may not lead Walk beside me  just be my friend ",
        auther:"   Albert Camus "
    },
    {
        qoute: " If you tell the truth, you don't have to remember anything. ",
        auther:"  Mark Twain"
    },
    {
        qoute: " Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . . ",
        auther:"  C.S. Lewis, The Four Loves"
    },
   
   
]
function randomQuotes() {
    var randomValue = Math.floor(Math.random() * goodReads.length);
    if (randomValue==randomValue) {
      randomValue =  Math.floor(Math.random() * goodReads.length)
    }
    var element = document.getElementById("quote");
    element.innerHTML = goodReads[randomValue].qoute;
    var element2=document.getElementById("auther")
    element2.innerHTML=goodReads[randomValue].auther
  
   }
  
