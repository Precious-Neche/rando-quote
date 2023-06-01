const quote = document.querySelector(".quote")
const btn = document.querySelector(".btn")

const quotes = [
    {
        quote: "Every day with you feels like a dream come true, filled with love, laughter, and endless happiness."
    },
    {
        quote: "I've never believed in soulmates until I met you, and now I can't imagine my life without you."
    },
    {
        quote: "Every moment spent with you is a treasure, etched in my heart forever."
    },
    {
        quote: "You are the reason behind my smiles, my laughter, and the butterflies in my stomach."
    },
    {
        quote: "You are my partner in crime, my confidant, and the one who understands me like no one else."
    },
    {
        quote: "You are the piece that completes my puzzle, making me whole in ways I never thought possible."
    },
    {
        quote: "Your presence in my life has taught me the true meaning of unconditional love and support."
    },
    {
        quote: "I'm grateful for the little things you do that make me feel loved and appreciated every day."
    },
    {
        quote: "You are my safe haven, the place where I find comfort and acceptance without judgment."
    },
    {
        quote: "I cherish every moment with you, for they are the most precious memories of my life."
    },
    {
        quote: "Each day with you feels like a new adventure, filled with surprises and endless possibilities."
    },
    {
        quote: "I'm grateful for the way you love me, seeing past my flaws and embracing the real me."
    },
    {
        quote: "In your embrace, I find comfort and warmth that I've never experienced before."
    },
    {
        quote: "From the moment our paths intertwined, my heart knew it had found its forever home."
    },
    {
        quote: "You are the missing piece, the one I didn't know I was searching for."
    },
    {
        quote: "Your laughter is music to my ears, and your smile brightens even the gloomiest of days."
    },
    {
        quote: "You are the reason I believe in magic. Your love has the power to transform even the ordinary moments into extraordinary ones. I am enchanted by you."
    },
    {
        quote: "You are my sunshine on the cloudiest days, Tobi. I adore you."
    },
    {
        quote: "Every beat of my heart sings a melody of love that resonates only for you, my beloved."
    },
    {
        quote: "Our love is not a destination, but a beautiful journey that we embark on hand in hand."
    },
    {
        quote: "Just hearing your voice brings a smile to my face and makes my heart skip a beat. You have that effect on me."
    },
    {
        quote: "You are the ying to my yang, with you i feel whole"
    },
    {
        quote: "You are the sweetest chapter in my story, and I can't wait to create more beautiful memories with you."
    },
    {
        quote: "Time may pass slowly, but my love for you grows stronger with each passing day. I can't wait to be in your arms again."
    },
    {
        quote: "Distance is just a temporary hurdle we must overcome. Our love is worth every moment we spend apart."
    },
    {
        quote: "In this long-distance chapter of our love story, I find solace in knowing that our love is worth every mile. You are worth it all."
    },
    {
        quote: "You make me feel like i've never felt before and i don't want this feeling to stop."
    },
    {
        quote: "You're just an amazing individual, sometimes i doubt if you're real!"
    },
    {
        quote: "I Love You, every single thing about you. "
    },
    {
        quote: "Your love is the sweetest addiction I've ever known, and I never want to recover from it."
    },
    {
        quote: "Love is not just a word; it's a whole universe of emotions that I feel whenever I'm with you."
    },
    {
        quote: "In this chaotic world, you are my sanctuary, where I find peace and serenity."
    },
    {
        quote: "Loving you is not a choice; it is a necessity, as essential as the air I breathe and the beat of my heart."
    },
    {
        quote: "You are my inspiration, my muse, and the driving force behind all the beautiful things I do in life."
    },
    {
        quote: "Your love is the sweetest addiction, one that I never want to recover from, for it brings me boundless happiness."
    },
    {
        quote: "I love you not only for who you are but for the person I become when I am with you."
    },
    {
        quote: "In a world of uncertainties, one thing I am certain of is my love for you, which grows stronger every day."
    },
    {
        quote: "Your love is like a melody that plays in my heart, making every moment with you unforgettable."
    },
    {
        quote: "You are the sweetest dream I've ever had, and being with you feels like living in a fairytale."
    },
    {
        quote: "Your love is the greatest treasure I've discovered, and I'm forever grateful for the happiness you bring to my life."
    },
    {
        quote: "Distance may separate us, but it can never diminish the love I feel for you. You are always close to my heart."
    },
    {
        quote: "Your love is a ray of sunshine, radiating warmth and light into every corner of my world."
    },
    {
        quote: "Your smile has the power to brighten even the cloudiest of days, and it fills my heart with pure joy."
    },
    {
        quote: "With you by my side, I feel invincible, knowing that I have someone who loves and supports me unconditionally."
    },
    {
        quote: "You have a heart of gold, and your sweetness radiates in everything you do. I'm so lucky to have you."
    },
    {
        quote: "You are the sweetest part of my life, the one who brings out the best in me and makes me a better person."
    },
    {
        quote: "You are the sweetest surprise that life has given me, and I cherish every moment with you."
    },
    {
        quote: "You are the sugar in my coffee, adding sweetness and flavor to my life every single day."
    },
    {
        quote: "Just the thought of you brightens up my day and brings a smile to my face. You are my sunshine."
    },
]

btn.addEventListener("click", nxtquote)
function nxtquote(e) {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote
}