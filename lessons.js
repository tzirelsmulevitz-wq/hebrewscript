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
window.LESSONS = [
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
