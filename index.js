
var qArray = [
  {text:"“Be yourself; everyone else is already taken.”",Author:"― Oscar Wilde"},
  {text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",Author:"― Marilyn Monroe"},
  {text:"“So many books, so little time.”",Author:"― Frank Zappa"},
  {text:"“A room without books is like a body without a soul.”",Author:"― Marcus Tullius Cicero"},
  {text:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",Author:"― Bernard M. Baruch"},
  {text:"“You only live once, but if you do it right, once is enough.”",Author:"― Mae West"},
  {text:`“A friend is someone who knows all about you and still loves you.”`,Author:"― Elbert Hubbard"},
  {text:`“To live is the rarest thing in the world. Most people exist, that is all.”`,Author:"― Oscar Wilde"},
  {text:`“We accept the love we think we deserve.”`,Author:`― Stephen Chbosky, The Perks of Being a Wallflower`},
  {text:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,Author:"― Ralph Waldo Emerson"},
  {text:`“It is better to be hated for what you are than to be loved for what you are not.”`,Author:`― Andre Gide, Autumn Leaves`},
  {text:`“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”`,Author:`― Jane Austen, Northanger Abbey`},
  {text:`“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,Author:`― Mark Twain`},
  {text:`“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”`,Author:`― John Green, The Fault in Our Stars`},
  {text:`“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”`,Author:`― Neil Gaiman, Coraline`},
  {text:`“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”`,Author:`― Maurice Switzer, Mrs. Goose, Her Book`},
  {text:`“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”`,Author:`― douglas adams, The Long Dark Tea-Time of the Soul`},
  {text:`“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”`,Author:`― Dr. Seuss`},
  {text:`“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”`,Author:`― Marilyn Monroe`},
  {text:`“Go to heaven for the climate and hell for the company.”`,Author:`― Benjamin Franklin Wade`},
  {text:`“The books that the world calls immoral are books that show the world its own shame.”`,Author:`― Oscar Wilde, The Picture of Dorian Gray`},
]

var random = Math.floor(Math.random()*qArray.length);

function getQ()
{
  document.getElementById("qText").innerHTML = qArray[random].text;
  document.getElementById("qAuthor").innerHTML = qArray[random].Author;
  random = Math.floor(Math.random()*qArray.length);
}

