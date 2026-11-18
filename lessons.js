// Jack's homework word lists. Newest lesson goes at the TOP.
// Each word:
//   he       Hebrew with nikud (vowel points)
//   say      how to say it (stressed syllable in CAPS)
//   en       English meaning
//   root     the shoresh (3 letters, no spaces)
//   hint     one short tip a kid can use
//   source   where it comes from (optional)
//   check    true = reading from the photo was uncertain; confirm with the teacher
// A lesson with type: "gematria" needs only he (the letters); the number is worked out.
// A lesson with type: "questions" uses he (question), enQ (question in English), answerHe, en (answer), hint.
window.LESSONS = [
  {
    id: "who-says-to-whom",
    type: "questions",
    title: "Who says to whom? 18:3-6",
    titleHe: "מִי אוֹמֵר אֶל מִי?",
    date: "2026-11-18",
    photo: "homework/2026-11-18-who-says-to-whom.jpg",
    words: [
      { he: "אַל נָא תַעֲבֹר מֵעַל עַבְדֶּךָ", enQ: "\"Please don't pass by your servant.\"",
        answerHe: "אַבְרָהָם אֶל ה׳", en: "Avraham to Hashem", hint: "Look in pasuk ג׳ (3).", source: "Bereishis 18:3" },
      { he: "וְאֶקְחָה פַת לֶחֶם וְסַעֲדוּ לִבְּכֶם", enQ: "\"Let me get some bread so you can eat.\"",
        answerHe: "אַבְרָהָם אֶל הַמַּלְאָכִים", en: "Avraham to the angels", hint: "Look in pasuk ה׳ (5).", source: "Bereishis 18:5" },
      { he: "כֵּן תַּעֲשֶׂה כַּאֲשֶׁר דִּבַּרְתָּ", enQ: "\"Do as you said.\"",
        answerHe: "הַמַּלְאָכִים אֶל אַבְרָהָם", en: "The angels to Avraham", hint: "Look in pasuk ה׳ (5).", source: "Bereishis 18:5" },
      { he: "מַהֲרִי שְׁלֹשׁ סְאִים קֶמַח סֹלֶת לוּשִׁי וַעֲשִׂי עֻגוֹת", enQ: "\"Hurry, three measures of fine flour, knead it and make cakes.\"",
        answerHe: "אַבְרָהָם אֶל שָׂרָה", en: "Avraham to Sarah", hint: "Look in pasuk ו׳ (6).", source: "Bereishis 18:6" }
    ]
  },
  {
    id: "about-whom",
    type: "questions",
    title: "About whom was it said? 18:6-8",
    titleHe: "עַל מִי נֶאֱמַר",
    date: "2026-11-18",
    photo: "homework/2026-11-18-about-whom.jpg",
    words: [
      { he: "וַיְמַהֵר", enQ: "\"And he hurried\"",
        answerHe: "אַבְרָהָם", en: "Avraham", hint: "Avraham hurried to the tent (pasuk 6). In pasuk 7 the na'ar hurries too.", source: "Bereishis 18:6" },
      { he: "וְהוּא עֹמֵד עֲלֵיהֶם תַּחַת הָעֵץ", enQ: "\"And he stood over them under the tree\"",
        answerHe: "אַבְרָהָם", en: "Avraham", hint: "Look in pasuk ח׳ (8).", source: "Bereishis 18:8" },
      { he: "וַיֹּאכֵלוּ", enQ: "\"And they ate\"",
        answerHe: "הַמַּלְאָכִים", en: "The angels (the guests)", hint: "Look at the end of pasuk ח׳ (8).", source: "Bereishis 18:8" },
      { he: "הַנַּעַר", enQ: "\"The young man\"",
        answerHe: "יִשְׁמָעֵאל", en: "Yishmael", hint: "Rashi on pasuk ז׳ (7) says who the na'ar is.", source: "Bereishis 18:7, Rashi" },
      { he: "לוּשִׁי וַעֲשִׂי עֻגוֹת", enQ: "\"Knead and make cakes\"",
        answerHe: "שָׂרָה", en: "Sarah", hint: "Avraham says this in pasuk ו׳ (6).", source: "Bereishis 18:6" }
    ]
  },
  {
    id: "vayeira-roots-3",
    title: "Vayeira roots, page 3",
    titleHe: "מָה הַשֹּׁרֶשׁ וְהַתַּרְגּוּם?",
    date: "2026-11-18",
    photo: "homework/2026-11-18-vayeira-root-and-translation-3.jpg",
    words: [
      { he: "מַהֲרִי", say: "ma-ha-REE", en: "hurry! (said to a girl or woman)", root: "מהר",
        hint: "י at the end = telling a girl or woman to do it. Avraham says it to Sarah.", source: "Bereishis 18:6" },
      { he: "לוּשִׁי", say: "LOO-shee", en: "knead! (said to a girl or woman)", root: "לוש",
        hint: "Again the י at the end = telling a girl or woman.", source: "Bereishis 18:6" },
      { he: "לַעֲשׂוֹת", say: "la-a-SOT", en: "to do, to make", root: "עשה",
        hint: "ל at the start = \"to\". The ה of עשה hides.", source: "Bereishis 18:7" },
      { he: "וַיִּתֵּן", say: "va-yi-TAYN", en: "and he gave", root: "נתן",
        hint: "The first נ of נתן hides.", source: "Bereishis 18:7" },
      { he: "רָץ", say: "RATZ", en: "(he) ran", root: "רוץ",
        hint: "The ו of רוץ hides in the past.", source: "Bereishis 18:7" },
      { he: "עָמַד", say: "a-MAD", en: "he stood", root: "עמד",
        hint: "No hidden letters: the word is just the root." },
      { he: "וַיֹּאכְלוּ", say: "va-yoch-LOO", en: "and they ate", root: "אכל",
        hint: "וַיּ = \"and\", וּ at the end = \"they\".", source: "Bereishis 18:8" }
    ]
  },
  {
    id: "vayeira-words",
    title: "Translate into English: words",
    titleHe: "מִלִּים",
    date: "2026-11-18",
    photo: "homework/2026-11-18-translate-words.jpg",
    words: [
      { he: "מְעַט", say: "m'-AT", en: "a little", hint: "Avraham offers \"a little water\" (pasuk 4).", source: "Bereishis 18:4" },
      { he: "נַעַר", say: "NA-ar", en: "young man, lad", hint: "The na'ar prepares the calf (pasuk 7).", source: "Bereishis 18:7" },
      { he: "רַגְלַיִם", say: "rag-LA-yim", en: "feet", hint: "ַיִם at the end = a pair (two feet).", source: "Bereishis 18:4" },
      { he: "אִשָּׁה", say: "ee-SHA", en: "woman, wife", hint: "אִשְׁתְּךָ = your wife (pasuk 9).", source: "Bereishis 18:9" },
      { he: "עֵץ", say: "AYTZ", en: "tree", hint: "Avraham's guests rest under the tree.", source: "Bereishis 18:4" },
      { he: "לֶחֶם", say: "LE-chem", en: "bread", hint: "פַּת לֶחֶם = a piece of bread.", source: "Bereishis 18:5" },
      { he: "חֵן", say: "CHAYN", en: "favor, grace", hint: "מָצָאתִי חֵן = I found favor.", source: "Bereishis 18:3" },
      { he: "אָדוֹן", say: "a-DON", en: "master", hint: "Sarah calls Avraham אֲדֹנִי, \"my master\".", source: "Bereishis 18:12" }
    ]
  },
  {
    id: "perek-18-questions",
    type: "questions",
    title: "Chumash questions, 18:9-15",
    titleHe: "פֶּרֶק יח: פָּסוּק ט׳–ט״ו",
    date: "2026-11-18",
    photo: "homework/2026-11-18-perek-18-questions.jpg",
    words: [
      { he: "מָה שָׁאֲלוּ הַמַּלְאָכִים אֶת אַבְרָהָם?", enQ: "What did the angels ask Avraham?",
        answerHe: "אַיֵּה שָׂרָה אִשְׁתֶּךָ", en: "Where is Sarah your wife?", hint: "Look in pasuk ט׳ (9).", source: "Bereishis 18:9" },
      { he: "מִי שׁוֹמַעַת אֶת מָה שֶׁהַמַּלְאָךְ אָמַר?", enQ: "Who was listening to what the angel said?",
        answerHe: "וְשָׂרָה שֹׁמַעַת פֶּתַח הָאֹהֶל", en: "Sarah, at the door of the tent", hint: "Look in pasuk י׳ (10).", source: "Bereishis 18:10" },
      { he: "מִי הָיוּ זְקֵנִים?", enQ: "Who were old?",
        answerHe: "וְאַבְרָהָם וְשָׂרָה זְקֵנִים", en: "Avraham and Sarah", hint: "Look in pasuk י״א (11).", source: "Bereishis 18:11" },
      { he: "מָתַי יִהְיֶה לְשָׂרָה בֵּן?", enQ: "When will Sarah have a son?",
        answerHe: "לַמּוֹעֵד אָשׁוּב אֵלֶיךָ כָּעֵת חַיָּה וּלְשָׂרָה בֵן", en: "Next year, at this same time", hint: "Look in pasuk י׳ (10) or י״ד (14).", source: "Bereishis 18:10, 18:14" }
    ]
  },
  {
    id: "vav-hahipuch",
    title: "Vav hahipuch (the flip vav)",
    titleHe: "הַהִפּוּךְ",
    date: "2026-11-18",
    photo: "homework/2026-11-18-vav-hahipuch.jpg",
    words: [
      { he: "וַיִּשָּׂא", say: "va-yi-SA", en: "and he lifted (up)", root: "נשא",
        hint: "Without the וַ: יִשָּׂא = he will lift. The וַ flips it to the past.", source: "Bereishis 18:2" },
      { he: "וַיַּרְא", say: "va-YAR", en: "and he saw", root: "ראה",
        hint: "Without the וַ: יִרְאֶה = he will see.", source: "Bereishis 18:2" },
      { he: "וַיָּרָץ", say: "va-ya-RATZ", en: "and he ran", root: "רוץ",
        hint: "Without the וַ: יָרוּץ = he will run.", source: "Bereishis 18:2", check: true },
      { he: "וַיֹּאמְרוּ", say: "va-yom-ROO", en: "and they said", root: "אמר",
        hint: "Without the וַ: יֹאמְרוּ = they will say. וּ at the end = they.", source: "Bereishis 18:5" },
      { he: "וַיְמַהֵר", say: "vay-ma-HAYR", en: "and he hurried", root: "מהר",
        hint: "Without the וַ: יְמַהֵר = he will hurry.", source: "Bereishis 18:7" },
      { he: "וַיִּקַּח", say: "va-yi-KACH", en: "and he took", root: "לקח",
        hint: "Without the וַ: יִקַּח = he will take. The ל of לקח hides.", source: "Bereishis 18:7" },
      { he: "וַיִּתֵּן", say: "va-yi-TAYN", en: "and he gave", root: "נתן",
        hint: "Without the וַ: יִתֵּן = he will give. The first נ of נתן hides.", source: "Bereishis 18:7" },
      { he: "וַיֹּאכְלוּ", say: "va-yoch-LOO", en: "and they ate", root: "אכל",
        hint: "Without the וַ: יֹאכְלוּ = they will eat.", source: "Bereishis 18:8" },
      { he: "וַתִּצְחַק", say: "va-titz-CHAK", en: "and she laughed", root: "צחק",
        hint: "Without the וַ: תִּצְחַק = she will laugh. ת at the start = she.", source: "Bereishis 18:12" }
    ]
  },
  {
    id: "gematria-1-30",
    type: "gematria",
    title: "Gematria 1-30, page 10",
    titleHe: "",
    date: "2026-11-18",
    photo: "homework/2026-11-18-gematria-1-30-page-10.jpg",
    words: ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","יא","יב","יג","יד","טו","טז","יז","יח","יט","כ","כא","כב","כג","כד","כה","כו","כז","כח","כט","ל"].map(he => ({ he }))
  },
  {
    id: "vayeira-roots-2",
    title: "Vayeira roots, page 2",
    titleHe: "מָה הַשֹּׁרֶשׁ וְהַתַּרְגּוּם?",
    date: "2026-11-18",
    photo: "homework/2026-11-18-vayeira-root-and-translation-2.jpg",
    words: [
      { he: "שׁוּב", say: "SHOOV", en: "return, come back", root: "שוב",
        hint: "The וּ in the middle is a root letter, so it stays.", source: "Bereishis 18:10" },
      { he: "זְקֵנִים", say: "z'-kay-NEEM", en: "old (people)", root: "זקן",
        hint: "ים at the end means more than one.", source: "Bereishis 18:11" },
      { he: "צָחֲקָה", say: "tza-cha-KAH", en: "she laughed", root: "צחק",
        hint: "ה at the end means \"she\". Sarah laughed.", source: "Bereishis 18:13" },
      { he: "יִרְאֶה", say: "yir-EH", en: "he will see", root: "ראה",
        hint: "י at the start means \"he will\". Compare אֶרְאֶה = I will see.", source: "Bereishis 22:8" },
      { he: "שׁוֹמַעַת", say: "sho-MA-at", en: "she was listening", root: "שמע",
        hint: "ת at the end means a girl or woman is doing it.", source: "Bereishis 18:10" }
    ]
  },
  {
    id: "gematria-11",
    type: "gematria",
    title: "Gematria, page 11",
    titleHe: "מָה הַגִּימַטְרִיָּה שֶׁל:",
    date: "2026-11-18",
    photo: "homework/2026-11-18-gematria-page-11.jpg",
    // For gematria, "en" (the number) and "hint" (letter values) are filled in automatically.
    words: [
      { he: "ק" }, { he: "ג", check: true }, { he: "טו" }, { he: "כה" }, { he: "לז", check: true },
      { he: "יב" }, { he: "נ" }, { he: "עב" }, { he: "פח" }, { he: "סא" },
      { he: "טז" }, { he: "כ" }, { he: "יד" }, { he: "ת" }
    ]
  },
  {
    id: "vayeira-roots",
    title: "Vayeira roots, page 1",
    titleHe: "מָה הַשֹּׁרֶשׁ וְהַתַּרְגּוּם?",
    date: "2026-11-18",
    photo: "homework/2026-11-18-vayeira-root-and-translation.jpg",
    words: [
      { he: "אֵרְדָה", say: "ay-r'-DAH", en: "I will go down", root: "ירד",
        hint: "The י of ירד hides. The two dots (tzere) under the א are the clue.", source: "Bereishis 18:21" },
      { he: "אֶרְאֶה", say: "er-EH", en: "I will see", root: "ראה",
        hint: "The first א means \"I will\". Then come all three root letters.", source: "Bereishis 18:21" },
      { he: "אֵדָעָה", say: "ay-da-AH", en: "I will know", root: "ידע",
        hint: "The י of ידע hides, just like in אֵרְדָה.", source: "Bereishis 18:21" },
      { he: "אֵלֵד", say: "ay-LED", en: "I will give birth", root: "ילד",
        hint: "The י of ילד hides. Sarah asks this when she laughs.", source: "Bereishis 18:13", check: true },
      { he: "וַיֵּלְכוּ", say: "va-yay-l'-CHOO", en: "and they went", root: "הלך",
        hint: "The ה of הלך hides. וַיּ = \"and\", וּ at the end = \"they\".", source: "Bereishis 18:22" },
      { he: "עָמַד", say: "a-MAD", en: "he stood", root: "עמד",
        hint: "No hidden letters and no extra letters: the word is just the root.", check: true }
    ]
  }
];

// Extra common roots used as wrong answers in the quiz.
window.EXTRA_ROOTS = ["אמר", "שמע", "ישב", "נתן", "בוא", "יצא", "לקח", "עשה", "שלח", "קום", "אכל", "נשא"];
