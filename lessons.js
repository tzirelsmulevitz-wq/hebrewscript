// Jack's homework word lists. Newest lesson goes at the TOP.
// Each word:
//   he       Hebrew with nikud (vowel points)
//   say      how to say it (stressed syllable in CAPS)
//   en       English meaning
//   root     the shoresh (3 letters, no spaces)
//   hint     one short tip a kid can use
//   source   where it comes from (optional)
//   check    true = reading from the photo was uncertain; confirm with the teacher
window.LESSONS = [
  {
    id: "vayeira-roots",
    title: "Vayeira: root & translation",
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
