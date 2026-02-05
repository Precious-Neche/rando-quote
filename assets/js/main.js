const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");

const quotes = [
  { quote: "Every day with you feels like a dream come true, filled with love, laughter, and so much joy. I love you Idunni mi. " },
  { quote: "I never believed in soulmates until I met you, and now I can't imagine my life without you, ife mi lai lai." },
  { quote: "My angel, every moment spent with you is a treasure, etched in my heart forever." },
  { quote: "You are the reason behind my smiles, my laughter, and the never ending butterflies in my stomach." },
  { quote: "You are my partner in crime, my confidant, and the one who understands me like no one else. Ife mi, I am grateful for you every single day." },
  { quote: "You are my favorite strain. Unique, irreplaceable, and impossible to replicate. My one and only baby." },
  { quote: "I'm grateful for the little things you do that make me feel loved and appreciated every day. Thank you for all you my darling." },
  { quote: "You are my safe haven, the place where I find comfort and acceptance, even in the toughest of my times. Ayanfe mi, I will always love you" },
  { quote: "I cherish every moment with you, for they are the most precious memories of my life. You are my world, my everything." },
  { quote: "I'm grateful for the way you love me, seeing past my flaws and still embracing  me. There's nobody else I'll rather be with. " },
  { quote: "From the moment our paths intertwined, my heart knew it had found its forever home. Onitemi, there really is no one else for me but you." },
  { quote: "You are my missing piece, the one I didn't know I was searching for. Now that you're here with me, I will never let you go. " },
  { quote: "You are the reason I believe in magic. Only you have the power to transform ordinary moments into extraordinary ones. I am enchanted by you." },
  { quote: "You are my ray of sunshine on the cloudiest days, my rainbow after the storm. I absolutely adore you My Pearl." },
  { quote: "Every beat of my heart sings a melody of love that resonates only for you, my beloved." },
  { quote: "My love for you grows steadily, Mon Coeur, like a culture in perfect conditions." },
  { quote: "Just hearing your voice brings a smile to my face and makes my heart skip a beat. You have that effect on me." },
  { quote: "You are the ying to my yang, with you i feel whole. Thank you for completing me, Morenikeji. " },
  { quote: "You are the sweetest chapter in my story, and I can't wait to create more beautiful memories with you, for the rest of my life. My forever Woman." },
  { quote: "Distance is just a temporary hurdle we will overcome. Our love is worth every moment we spend apart, I can't wait to be in your arms again My Baby." },
  { quote: "You make me feel like I have never felt before and I don't want this feeling to stop. My Sweetheart, you are all I need." },
  { quote: "You're a such a beautiful individual, sometimes i doubt how real you are! Orekelewa, there is no one like you. " },
  { quote: "I Love You, every single thing about you. " },
  { quote: "Being in love with you is the sweetest addiction I've ever known, and I never want to recover from it. Onyewem, I'll forever be yours." },
  { quote: "For me, love is not just a word, it's the whole universe of emotions that I feel whenever I'm with you. Obim! No one else can make me feel this way. " },
  { quote: "Loving you is no longer a choice; it is a necessity, as essential as the air I breathe and the beat of my heart." },
  { quote: "You are my inspiration, my muse, and a driving force behind the beautiful things I do in life." },
  { quote: "I love you not only for who you are but for the person I become when I am with you." },
  { quote: "In a world of uncertainties, one thing that will always be certain is my love for you. My feelings for you will never change, and I will always show you how much you mean to me." },
  { quote: "Omoluabi! I admire your heart, your strength, and the quiet grace you carry. Everyone that knows you is proud to know you." },
  { quote: "Distance may separate us now, but it can never diminish the love I feel for you. You are always close to my heart." },
  { quote: "Oluwatobiloba, you carry so much light in you, and I am blessed to have you in my life." },
  { quote: "With you by my side, I have an assurance that it always get better, knowing that I have someone who loves and supports me unconditionally." },
  { quote: "You have a heart of gold, and it radiates in everything you do. I am so lucky to have you." },
  { quote: "You are the sweetest part of my life, you bring out the best in me and make me a better person. Words can't describe how blessed I am to love you." },
  { quote: "Just the thought of you brightens up my day and brings a smile to my face. You are my sunshine." },
];

// Playlist style shuffle
let order = [];
let pointer = 0;

// Prevent double clicks during animation
let isAnimating = false;

// Build a shuffled list of quote indexes
function shuffleQuotes() {
  order = [...quotes.keys()];

  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  pointer = 0;
}

function nxtquote() {
  if (isAnimating) return;

  if (order.length === 0 || pointer >= order.length) {
    shuffleQuotes();
  }

  isAnimating = true;
  btn.disabled = true;

  // Fade out
  quote.classList.add("is-fading");

  setTimeout(() => {
    const idx = order[pointer];
    pointer++;

    // Swap text
    quote.textContent = quotes[idx].quote;

    // Fade in
    quote.classList.remove("is-fading");

    setTimeout(() => {
      btn.disabled = false;
      isAnimating = false;
    }, 230);
  }, 230);
}

btn.addEventListener("click", nxtquote);

// Initialize
shuffleQuotes();

