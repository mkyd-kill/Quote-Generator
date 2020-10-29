var btn = document.getElementById('btn'),
    output = document.getElementById('output');

// add another variable with an array list
var quotes = [
    '“The most courageous act is still to think for yourself. Aloud.” -Coco Chanel.',
    '“To find yourself, think for yourself.” - Socrates',
    '“Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.” -Vicktor Emil Frankl',
    '“My definition of a free society is a society where it is safe to be unpopular.” -Adlai Stevenson',
    '“Freedom cannot be bestowed — it must be achieved.” -Elbert Hubbard',
    '“The great revolution in the history of man, past, present and future, is the revolution of those determined to be free.” -John F. Kennedy',
    '“Freedom is nothing but a chance to be better.” -Albert Camus',
    '“Take care of your body. It’s the only place you have to live.” – Jim Rohn',
    '“Don’t put off living to next week, next month, next year or next decade. The only time you’re ever living is in this moment.”  – Celestine Chua',
    '“In the beginning you will fall into the gaps in between thoughts – after practicing for years, you become the gap.” – J.Kleykamp (Regarding meditation)',
    '“Honesty is the first chapter in the book of wisdom.” – Unknown',
    '“If wrinkles must be written upon our brow, let them not be written upon the heart. The spirit should not grow old.” – James A. Garfield',
    '“My life is my message.” – Gandhi',
    '“The mystery of life is not a problem to be solved but a reality to be experienced.” – Art Van Der Leeuw',
    '“Life is a gift. Never forget to enjoy and bask in every moment you are in.” – Celestine Chua',
    '“Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.” – Mark Twain',
    '“Everything around us is made up of energy. To attract positive things in your life, start by giving off positive energy.” – Celestine Chua',
    '“What lies behind us and what lies before us are tiny matters compared to what lies within us.” – Ralph Waldo Emerson',
    '“There are no ordinary moments. There is always something going on.” – Peaceful Warrior',
    '“Every moment you get is a gift. Spend it on things that matter. Don’t spend it by dwelling on unhappy things.” – Celestine Chua',
    '“When you don’t get what you want, you suffer. If you get it, you suffer too since you can’t hold on to it forever.” – Peaceful Warrior, on the fallacy of attachment',
    '“For every effect there is a root cause. Find and address the root cause rather than try to fix the effect, as there is no end to the latter.” – Celestine Chua',
    '“There’s no next time. It’s now or never.” – Celestine Chua',
    '“We must not cease from exploration. And the end of all our exploring will be to arrive where we began and to know the place for the first time.” – T. S. Eliot',
    '“We are not human beings having a spiritual experience. We are spiritual beings having a human experience.” – Pierre Teilhard de Chardin',
    '“When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.” – Alexander Graham Bell',
    '“It’s not the years in your life that count. It’s the life in your years.” – Abraham Lincoln',
    '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” – Albert Einstein',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})