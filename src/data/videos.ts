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
  { id: "1", title: "Baby Shark Dance", youtubeId: "XqZsoesa55w" },
  { id: "2", title: "Wheels on the Bus", youtubeId: "e_04ZrNroTo" },
  { id: "3", title: "Johny Johny Yes Papa", youtubeId: "F4tHL8reNCs" },
  { id: "4", title: "Five Little Ducks", youtubeId: "pZw9veQ76fo" },
  { id: "5", title: "Old MacDonald Had a Farm", youtubeId: "5oYKonYBujg" },
  { id: "6", title: "Twinkle Twinkle Little Star", youtubeId: "yCjJyiqpAuU" },
  { id: "7", title: "If You're Happy and You Know It", youtubeId: "l4WNrvVjiTw" },
  { id: "8", title: "Head Shoulders Knees and Toes", youtubeId: "h4eueDYPTIg" },
  { id: "9", title: "The Itsy Bitsy Spider", youtubeId: "w_lCi8U49mY" },
  { id: "10", title: "Row Row Row Your Boat", youtubeId: "7otAJa3jui8" },
  { id: "11", title: "ABC Song", youtubeId: "hq3yfQnllfQ" },
  { id: "12", title: "Baa Baa Black Sheep", youtubeId: "MR5XSOdjKMA" },
  { id: "13", title: "London Bridge Is Falling Down", youtubeId: "0Q5gb3bmLVI" },
  { id: "14", title: "Hickory Dickory Dock", youtubeId: "ygcN86n7yJ4" },
  { id: "15", title: "Mary Had a Little Lamb", youtubeId: "Yw6u6YkTgQ4" },
  { id: "16", title: "Pat a Cake", youtubeId: "E1Y5-MIyUuY" },
  { id: "17", title: "Humpty Dumpty", youtubeId: "nrv495corBc" },
  { id: "18", title: "Jack and Jill", youtubeId: "UB5aANc9GCE" },
  { id: "19", title: "Ring Around the Rosie", youtubeId: "8rP5LjpoIKU" },
  { id: "20", title: "This Old Man", youtubeId: "mBI7rLkNVr0" },
  { id: "21", title: "I'm a Little Teapot", youtubeId: "opKg3fyqWt4" },
  { id: "22", title: "The Hokey Pokey", youtubeId: "iZinb6rVozc" },
  { id: "23", title: "Do Re Mi", youtubeId: "drnBMAEA3AM" },
  { id: "24", title: "Finger Family Song", youtubeId: "mXMofxtDPUQ" },
];
