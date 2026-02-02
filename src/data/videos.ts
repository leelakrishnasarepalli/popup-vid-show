export interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

// Helper to get YouTube thumbnail
export const getYouTubeThumbnail = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

// Sample kid-friendly videos - replace these with your own YouTube IDs
export const videos: Video[] = [
  { id: "1", title: "Mandarin Chinese Tongue Twister Four and Ten", youtubeId: "mBzAyXbBQTQ" },
  { id: "2", title: "zh, ch, sh, r Song", youtubeId: "3wkivv6BTCw" },
  { id: "3", title: "zh ch sh r", youtubeId: "tXuGGYbtAm8" },
  { id: "4", title: "Story", youtubeId: "2hT56qsraZY" },
  { id: "5", title: "The Secret of Red Envelopes", youtubeId: "iMqMuQAprDU" },
  { id: "6", title: "Chinese Pinyin Song", youtubeId: "v0SJi73CY4U" },
  { id: "7", title: "Learn Mandarin", youtubeId: "nsQJrkWR-fw" },
  { id: "8", title: "how to celebrate Chinese new year and things to do", youtubeId: "15_G7_Xgpio" },
  { id: "9", title: "g, k, h Song", youtubeId: "wAQBjOsvHZc" },
  { id: "10", title: "Learn Initials: g, k, h in Ten Minutes", youtubeId: "L8-zgU7a09Q" },
  { id: "11", title: "Pinyin dtnl", youtubeId: "ptuAFkw8Kno" },
  { id: "12", title: "We Wish You a Merry Christmas", youtubeId: "x5mHIYYJwyY" },
  { id: "13", title: "Chinese Story Books for Kids", youtubeId: "-uosjOHcs1E" },
  { id: "14", title: "Pinyin ao ou iu", youtubeId: "QdLdv3dmdig" },
  { id: "15", title: "Double Vowels ao ou iu", youtubeId: "w4m8e_2x-Os" },
  { id: "16", title: "Double Vowels ai ei ui", youtubeId: "hggvAIC7JCM" },
  { id: "17", title: "Pinyin ai ei ui", youtubeId: "sqsNxTAphTs" },
  { id: "18", title: "Chinese Strokes Do Re Mi ", youtubeId: "802qbHTtTwE" },
  { id: "19", title: "Chinese Initial Sounds b p m f", youtubeId: "4MDcVVIgtr8" },
  { id: "20", title: "b, p, m, f Song", youtubeId: "E6OTKUwOeHg" },
  { id: "21", title: "Transisi", youtubeId: "OzjrXkl0ekA" },
  { id: "22", title: "Pronunciation Pinyin - Vowel", youtubeId: "ie-vD-tnEPM" },
  { id: "23", title: "Mandarin Chinese Song for kids", youtubeId: "g2eCLSrQEHo" },
  { id: "24", title: "Tones Song ", youtubeId: "ORpsNpxmfOc" },
  { id: "25", title: "Mandarin Chinese Song for kids", youtubeId: "r0pUOS09-JE" },
  { id: "26", title: "Chinese New Year Greetings", youtubeId: "58wGkgBKNoA" },
  { id: "27", title: "Chinese Pinyin Song", youtubeId: "j9UeXv4G_58" },
  { id: "28", title: "Holidays", youtubeId: "I2tUfWWYOkU" },
  { id: "29", title: "Best Free Chinese Mandarin Audiobooks for Kids", youtubeId: "HuMWPgvroEY" },
  { id: "30", title: "Dance", youtubeId: "6FrsoDTtlpU" },
];
