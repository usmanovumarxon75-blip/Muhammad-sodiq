export interface AlphabetItem {
  letter: string;
  lower: string;
  word: string;
  uzbek: string;
  phonetic: string;
  emoji: string;
  sentence: string;
  color: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
  funFact: string;
}

export interface NumberItem {
  number: number;
  word: string;
  uzbek: string;
  phonetic: string;
  emojiCount?: string;
  category: '1-10' | '11-20' | '21-50' | '51-100';
}

export interface TransportItem {
  id: string;
  name: string;
  uzbek: string;
  phonetic: string;
  emoji: string;
  category: 'Quruqlik' | 'Havo' | 'Suv' | 'Kosmos';
  soundEffect: string;
  description: string;
  speed: string;
  bgColor: string;
}

export interface ColorItem {
  id: string;
  name: string;
  uzbek: string;
  phonetic: string;
  hex: string;
  textColor: string;
  examples: { emoji: string; name: string; uz: string }[];
  description: string;
}

export interface BirdItem {
  id: string;
  name: string;
  uzbek: string;
  phonetic: string;
  emoji: string;
  habitat: string;
  soundDescription: string;
  funFact: string;
  canFly: boolean;
  bgColor: string;
}

// 1. ALIFBO (26 LETTERS)
export const ALPHABET_LIST: AlphabetItem[] = [
  {
    letter: 'A',
    lower: 'a',
    word: 'Apple',
    uzbek: 'Olma',
    phonetic: '/ˈæp.əl/',
    emoji: '🍎',
    sentence: 'A is for Apple',
    color: 'from-rose-500 to-red-500',
    textColor: 'text-rose-600',
    bgLight: 'bg-rose-50 hover:bg-rose-100/80',
    borderColor: 'border-rose-200 hover:border-rose-400',
    funFact: "Olma juda foydali va shirin meva!",
  },
  {
    letter: 'B',
    lower: 'b',
    word: 'Ball',
    uzbek: 'Koptok',
    phonetic: '/bɔːl/',
    emoji: '⚽',
    sentence: 'B is for Ball',
    color: 'from-sky-500 to-blue-500',
    textColor: 'text-sky-600',
    bgLight: 'bg-sky-50 hover:bg-sky-100/80',
    borderColor: 'border-sky-200 hover:border-sky-400',
    funFact: "Koptok bilan futbol o'ynash juda qiziqarli!",
  },
  {
    letter: 'C',
    lower: 'c',
    word: 'Cat',
    uzbek: 'Mushuk',
    phonetic: '/kæt/',
    emoji: '🐱',
    sentence: 'C is for Cat',
    color: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-600',
    bgLight: 'bg-amber-50 hover:bg-amber-100/80',
    borderColor: 'border-amber-200 hover:border-amber-400',
    funFact: "Mushukchalar yoqimtoy va mayin mo'ynali bo'ladi.",
  },
  {
    letter: 'D',
    lower: 'd',
    word: 'Dog',
    uzbek: 'Kuchuk',
    phonetic: '/dɒɡ/',
    emoji: '🐶',
    sentence: 'D is for Dog',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-600',
    bgLight: 'bg-emerald-50 hover:bg-emerald-100/80',
    borderColor: 'border-emerald-200 hover:border-emerald-400',
    funFact: "Kuchuk insonning eng vafodor do'stidir!",
  },
  {
    letter: 'E',
    lower: 'e',
    word: 'Elephant',
    uzbek: 'Fil',
    phonetic: '/ˈel.ɪ.fənt/',
    emoji: '🐘',
    sentence: 'E is for Elephant',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-600',
    bgLight: 'bg-indigo-50 hover:bg-indigo-100/80',
    borderColor: 'border-indigo-200 hover:border-indigo-400',
    funFact: "Fil quruqlikdagi eng katta va kuchli hayvondir.",
  },
  {
    letter: 'F',
    lower: 'f',
    word: 'Fish',
    uzbek: 'Baliq',
    phonetic: '/fɪʃ/',
    emoji: '🐠',
    sentence: 'F is for Fish',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-600',
    bgLight: 'bg-cyan-50 hover:bg-cyan-100/80',
    borderColor: 'border-cyan-200 hover:border-cyan-400',
    funFact: "Baliqlar suv ostida bemalol suzishadi.",
  },
  {
    letter: 'G',
    lower: 'g',
    word: 'Giraffe',
    uzbek: 'Jirafa',
    phonetic: '/dʒɪˈrɑːf/',
    emoji: '🦒',
    sentence: 'G is for Giraffe',
    color: 'from-yellow-500 to-amber-600',
    textColor: 'text-yellow-600',
    bgLight: 'bg-yellow-50 hover:bg-yellow-100/80',
    borderColor: 'border-yellow-200 hover:border-yellow-400',
    funFact: "Jirafaning bo'yni juda uzun bo'lib, baland daraxt barglarini yeydi.",
  },
  {
    letter: 'H',
    lower: 'h',
    word: 'Hat',
    uzbek: 'Shlyapa',
    phonetic: '/hæt/',
    emoji: '🎩',
    sentence: 'H is for Hat',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-600',
    bgLight: 'bg-violet-50 hover:bg-violet-100/80',
    borderColor: 'border-violet-200 hover:border-violet-400',
    funFact: "Shlyapa quyoshdan va sovuqdan himoya qiladi.",
  },
  {
    letter: 'I',
    lower: 'i',
    word: 'Ice cream',
    uzbek: 'Muzqaymoq',
    phonetic: '/ˈaɪs ˌkriːm/',
    emoji: '🍦',
    sentence: 'I is for Ice cream',
    color: 'from-pink-400 to-rose-500',
    textColor: 'text-pink-600',
    bgLight: 'bg-pink-50 hover:bg-pink-100/80',
    borderColor: 'border-pink-200 hover:border-pink-400',
    funFact: "Muzqaymoq yozning eng sevimli salqin shirinligi!",
  },
  {
    letter: 'J',
    lower: 'j',
    word: 'Juice',
    uzbek: 'Sharbat',
    phonetic: '/dʒuːs/',
    emoji: '🧃',
    sentence: 'J is for Juice',
    color: 'from-orange-500 to-amber-500',
    textColor: 'text-orange-600',
    bgLight: 'bg-orange-50 hover:bg-orange-100/80',
    borderColor: 'border-orange-200 hover:border-orange-400',
    funFact: "Meva sharbati vitaminlarga boy va chanqoqni bosadi.",
  },
  {
    letter: 'K',
    lower: 'k',
    word: 'Kite',
    uzbek: 'Varaqraka / Qogoz varrak',
    phonetic: '/kaɪt/',
    emoji: '🪁',
    sentence: 'K is for Kite',
    color: 'from-teal-500 to-emerald-600',
    textColor: 'text-teal-600',
    bgLight: 'bg-teal-50 hover:bg-teal-100/80',
    borderColor: 'border-teal-200 hover:border-teal-400',
    funFact: "Shamol bo'lganda varrak baland ko'klarga parvoz qiladi.",
  },
  {
    letter: 'L',
    lower: 'l',
    word: 'Lion',
    uzbek: 'Sher',
    phonetic: '/ˈlaɪ.ən/',
    emoji: '🦁',
    sentence: 'L is for Lion',
    color: 'from-amber-600 to-yellow-600',
    textColor: 'text-amber-700',
    bgLight: 'bg-amber-50 hover:bg-amber-100/80',
    borderColor: 'border-amber-200 hover:border-amber-400',
    funFact: "Sher hayvonlar podshosi hisoblanadi!",
  },
  {
    letter: 'M',
    lower: 'm',
    word: 'Monkey',
    uzbek: 'Maymun',
    phonetic: '/ˈmʌŋ.ki/',
    emoji: '🐵',
    sentence: 'M is for Monkey',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-700',
    bgLight: 'bg-yellow-50 hover:bg-yellow-100/80',
    borderColor: 'border-yellow-200 hover:border-yellow-400',
    funFact: "Maymunlar daraxt shoxlarida chaqqon sakraydilar.",
  },
  {
    letter: 'N',
    lower: 'n',
    word: 'Nest',
    uzbek: 'In (Qush ini)',
    phonetic: '/nest/',
    emoji: '🪺',
    sentence: 'N is for Nest',
    color: 'from-lime-600 to-green-600',
    textColor: 'text-lime-700',
    bgLight: 'bg-lime-50 hover:bg-lime-100/80',
    borderColor: 'border-lime-200 hover:border-lime-400',
    funFact: "Qushlar o'z polaponlari uchun shoxchalardan in qurishadi.",
  },
  {
    letter: 'O',
    lower: 'o',
    word: 'Orange',
    uzbek: 'Apelsin',
    phonetic: '/ˈɒr.ɪndʒ/',
    emoji: '🍊',
    sentence: 'O is for Orange',
    color: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-600',
    bgLight: 'bg-orange-50 hover:bg-orange-100/80',
    borderColor: 'border-orange-200 hover:border-orange-400',
    funFact: "Apelsinda juda ko'p C vitamini mavjud!",
  },
  {
    letter: 'P',
    lower: 'p',
    word: 'Panda',
    uzbek: 'Panda',
    phonetic: '/ˈpæn.də/',
    emoji: '🐼',
    sentence: 'P is for Panda',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-700',
    bgLight: 'bg-slate-50 hover:bg-slate-100/80',
    borderColor: 'border-slate-300 hover:border-slate-500',
    funFact: "Panda bambuk novdalarini yeyishni juda yaxshi ko'radi.",
  },
  {
    letter: 'Q',
    lower: 'q',
    word: 'Queen',
    uzbek: 'Qirolicha',
    phonetic: '/kwiːn/',
    emoji: '👑',
    sentence: 'Q is for Queen',
    color: 'from-fuchsia-600 to-pink-600',
    textColor: 'text-fuchsia-600',
    bgLight: 'bg-fuchsia-50 hover:bg-fuchsia-100/80',
    borderColor: 'border-fuchsia-200 hover:border-fuchsia-400',
    funFact: "Qirolicha boshida yarqiroq toj taqadi.",
  },
  {
    letter: 'R',
    lower: 'r',
    word: 'Rabbit',
    uzbek: 'Quyon',
    phonetic: '/ˈræb.ɪt/',
    emoji: '🐰',
    sentence: 'R is for Rabbit',
    color: 'from-rose-400 to-pink-500',
    textColor: 'text-rose-600',
    bgLight: 'bg-rose-50 hover:bg-rose-100/80',
    borderColor: 'border-rose-200 hover:border-rose-400',
    funFact: "Quyon sabzini yaxshi ko'radi va baland sakraydi.",
  },
  {
    letter: 'S',
    lower: 's',
    word: 'Sun',
    uzbek: 'Quyosh',
    phonetic: '/sʌn/',
    emoji: '☀️',
    sentence: 'S is for Sun',
    color: 'from-amber-400 to-yellow-500',
    textColor: 'text-amber-600',
    bgLight: 'bg-amber-50 hover:bg-amber-100/80',
    borderColor: 'border-amber-200 hover:border-amber-400',
    funFact: "Quyosh yer yuzini yoritadi va ilitadi.",
  },
  {
    letter: 'T',
    lower: 't',
    word: 'Tiger',
    uzbek: 'Yolbars',
    phonetic: '/ˈtaɪ.ɡər/',
    emoji: '🐯',
    sentence: 'T is for Tiger',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-700',
    bgLight: 'bg-orange-50 hover:bg-orange-100/80',
    borderColor: 'border-orange-200 hover:border-orange-400',
    funFact: "Yo'lbarsning chiroyli qora chiziqlari bor!",
  },
  {
    letter: 'U',
    lower: 'u',
    word: 'Umbrella',
    uzbek: 'Soyabon',
    phonetic: '/ʌmˈbrel.ə/',
    emoji: '☂️',
    sentence: 'U is for Umbrella',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-600',
    bgLight: 'bg-blue-50 hover:bg-blue-100/80',
    borderColor: 'border-blue-200 hover:border-blue-400',
    funFact: "Yomg'ir yoqqanda soyabon ostida quruq yuramiz.",
  },
  {
    letter: 'V',
    lower: 'v',
    word: 'Violin',
    uzbek: 'Skripka',
    phonetic: '/ˌvaɪəˈlɪn/',
    emoji: '🎻',
    sentence: 'V is for Violin',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-600',
    bgLight: 'bg-purple-50 hover:bg-purple-100/80',
    borderColor: 'border-purple-200 hover:border-purple-400',
    funFact: "Skripka mayin va yoqimli musiqa taratadi.",
  },
  {
    letter: 'W',
    lower: 'w',
    word: 'Watch',
    uzbek: 'Qol soati',
    phonetic: '/wɒtʃ/',
    emoji: '⌚',
    sentence: 'W is for Watch',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-600',
    bgLight: 'bg-emerald-50 hover:bg-emerald-100/80',
    borderColor: 'border-emerald-200 hover:border-emerald-400',
    funFact: "Qo'l soati bizga aniq vaqtni ko'rsatib turadi.",
  },
  {
    letter: 'X',
    lower: 'x',
    word: 'Xylophone',
    uzbek: 'Ksilofon',
    phonetic: '/ˈzaɪ.lə.fəʊn/',
    emoji: '🎼',
    sentence: 'X is for Xylophone',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-600',
    bgLight: 'bg-pink-50 hover:bg-pink-100/80',
    borderColor: 'border-pink-200 hover:border-pink-400',
    funFact: "Ksilofon tayoqchalari bilan jarangdor kuy chalinadi.",
  },
  {
    letter: 'Y',
    lower: 'y',
    word: 'Yacht',
    uzbek: 'Yaxta',
    phonetic: '/jɒt/',
    emoji: '⛵',
    sentence: 'Y is for Yacht',
    color: 'from-cyan-600 to-sky-600',
    textColor: 'text-cyan-700',
    bgLight: 'bg-cyan-50 hover:bg-cyan-100/80',
    borderColor: 'border-cyan-200 hover:border-cyan-400',
    funFact: "Yaxta ko'm-ko'k dengiz to'lqinlarida oqib suzadi.",
  },
  {
    letter: 'Z',
    lower: 'z',
    word: 'Zebra',
    uzbek: 'Zebra',
    phonetic: '/ˈzeb.rə/',
    emoji: '🦓',
    sentence: 'Z is for Zebra',
    color: 'from-slate-700 to-neutral-800',
    textColor: 'text-slate-800',
    bgLight: 'bg-slate-50 hover:bg-slate-100/80',
    borderColor: 'border-slate-300 hover:border-slate-500',
    funFact: "Zebra oq-qora chiziqlari bilan boshqalardan ajralib turadi.",
  },
];

// Helper to generate 1 to 100 English & Uzbek words
const ONES_EN = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TEENS_EN = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TENS_EN = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

const ONES_UZ = ['', 'Bir', 'Ikki', 'Uch', 'Toʻrt', 'Besh', 'Olti', 'Yetti', 'Sakkiz', 'Toʻqqiz'];
const TENS_UZ = ['', 'Oʻn', 'Yigirma', 'Oʻttiz', 'Qirq', 'Ellik', 'Oltmish', 'Yetmish', 'Sakson', 'Toʻqson'];

function getNumberWordEn(n: number): string {
  if (n === 100) return 'One hundred';
  if (n < 10) return ONES_EN[n];
  if (n < 20) return TEENS_EN[n - 10];
  const t = Math.floor(n / 10);
  const rem = n % 10;
  return rem === 0 ? TENS_EN[t] : `${TENS_EN[t]}-${ONES_EN[rem].toLowerCase()}`;
}

function getNumberWordUz(n: number): string {
  if (n === 100) return 'Yuz';
  if (n < 10) return ONES_UZ[n];
  const t = Math.floor(n / 10);
  const rem = n % 10;
  return rem === 0 ? TENS_UZ[t] : `${TENS_UZ[t]} ${ONES_UZ[rem].toLowerCase()}`;
}

const PHONETICS_MAP: Record<number, string> = {
  1: '/wʌn/',
  2: '/tuː/',
  3: '/θriː/',
  4: '/fɔː/',
  5: '/faɪv/',
  6: '/sɪks/',
  7: '/ˈsev.ən/',
  8: '/eɪt/',
  9: '/naɪn/',
  10: '/ten/',
  11: '/ɪˈlev.ən/',
  12: '/twelv/',
  13: '/ˌθɜːˈtiːn/',
  14: '/ˌfɔːˈtiːn/',
  15: '/ˌfɪfˈtiːn/',
  16: '/ˌsɪkˈstiːn/',
  17: '/ˌsev.ənˈtiːn/',
  18: '/ˌeɪˈtiːn/',
  19: '/ˌnaɪnˈtiːn/',
  20: '/ˈtwen.ti/',
  30: '/ˈθɜː.ti/',
  40: '/ˈfɔː.ti/',
  50: '/ˈfɪf.ti/',
  60: '/ˈsɪk.sti/',
  70: '/ˈsev.ən.ti/',
  80: '/ˈeɪ.ti/',
  90: '/ˈnaɪn.ti/',
  100: '/wʌn ˈhʌn.drəd/',
};

// 2. NUMBERS 1 TO 100
export const NUMBERS_LIST: NumberItem[] = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;
  let category: NumberItem['category'] = '1-10';
  if (num > 10 && num <= 20) category = '11-20';
  else if (num > 20 && num <= 50) category = '21-50';
  else if (num > 50) category = '51-100';

  const phonetic = PHONETICS_MAP[num] || `/${getNumberWordEn(num).toLowerCase()}/`;

  return {
    number: num,
    word: getNumberWordEn(num),
    uzbek: getNumberWordUz(num),
    phonetic,
    category,
  };
});

// 3. 10 TRANSPORT VEHICLES
export const TRANSPORT_LIST: TransportItem[] = [
  {
    id: 'car',
    name: 'Car',
    uzbek: 'Mashina',
    phonetic: '/kɑːr/',
    emoji: '🚗',
    category: 'Quruqlik',
    soundEffect: 'Beep beep! Vroom!',
    description: 'Koʻchalarda oila va doʻstlar bilan sayohat qilish uchun avtomobil.',
    speed: 'Tezligi: 100-150 km/s',
    bgColor: 'from-red-500 to-rose-600',
  },
  {
    id: 'bus',
    name: 'Bus',
    uzbek: 'Avtobus',
    phonetic: '/bʌs/',
    emoji: '🚌',
    category: 'Quruqlik',
    soundEffect: 'Honk honk! Beep!',
    description: 'Koʻplab yoʻlovchilarni maktabga va shahar boʻylab tashiydigan katta transport.',
    speed: 'Tezligi: 60-80 km/s',
    bgColor: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'train',
    name: 'Train',
    uzbek: 'Poyezd',
    phonetic: '/treɪn/',
    emoji: '🚂',
    category: 'Quruqlik',
    soundEffect: 'Choo choo! Chug chug!',
    description: 'Temir yoʻllarda vagonlarni tortib, uzoq shaharlarga eltuvchi poyezd.',
    speed: 'Tezligi: 160-300 km/s',
    bgColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'airplane',
    name: 'Airplane',
    uzbek: 'Samolyot',
    phonetic: '/ˈeə.pleɪn/',
    emoji: '✈️',
    category: 'Havo',
    soundEffect: 'Whooosh!',
    description: 'Bulutlar uzra juda baland uchib, turli mamlakatlarga yetkazuvchi samolyot.',
    speed: 'Tezligi: 850-950 km/s',
    bgColor: 'from-sky-500 to-blue-600',
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    uzbek: 'Velosiped',
    phonetic: '/ˈbaɪ.sɪ.kəl/',
    emoji: '🚲',
    category: 'Quruqlik',
    soundEffect: 'Ring ring!',
    description: 'Pedal bosib haydaladigan, sogʻliq uchun juda foydali ikki gʻildirakli doʻst.',
    speed: 'Tezligi: 15-25 km/s',
    bgColor: 'from-green-500 to-emerald-600',
  },
  {
    id: 'ship',
    name: 'Ship',
    uzbek: 'Kema',
    phonetic: '/ʃɪp/',
    emoji: '🚢',
    category: 'Suv',
    soundEffect: 'Toot toot!',
    description: 'Dengiz va okeanlar boʻylab ulkan yuklar va yoʻlovchilarni tashiydigan kema.',
    speed: 'Tezligi: 40-50 km/s',
    bgColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    uzbek: 'Vertolyot',
    phonetic: '/ˈhel.ɪˌkɒp.tər/',
    emoji: '🚁',
    category: 'Havo',
    soundEffect: 'Chop chop chop!',
    description: 'Tepasidagi parraklari yordamida toʻgʻridan-toʻgʻri osmonga koʻtariladi.',
    speed: 'Tezligi: 200-250 km/s',
    bgColor: 'from-cyan-600 to-teal-700',
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    uzbek: 'Mototsikl',
    phonetic: '/ˈməʊ.təˌsaɪ.kəl/',
    emoji: '🏍️',
    category: 'Quruqlik',
    soundEffect: 'Vrooom vrooom!',
    description: 'Tezkor, shiddatli va chaqqon ikki gʻildirakli motorli transport vositasi.',
    speed: 'Tezligi: 80-160 km/s',
    bgColor: 'from-orange-500 to-amber-600',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    uzbek: 'Raketa',
    phonetic: '/ˈrɒk.ɪt/',
    emoji: '🚀',
    category: 'Kosmos',
    soundEffect: '3, 2, 1... Blast off!',
    description: 'Olovli kuch bilan koinotga, yulduzlar va Oygacha uchib boruvchi fazo kemasi.',
    speed: 'Tezligi: 28,000 km/s',
    bgColor: 'from-purple-600 to-violet-800',
  },
  {
    id: 'truck',
    name: 'Truck',
    uzbek: 'Yuk mashinasi',
    phonetic: '/trʌk/',
    emoji: '🚚',
    category: 'Quruqlik',
    soundEffect: 'Honk! Honk!',
    description: 'Ogʻir yuklarni, mevalarni va qutilarni boshqa shaharlarga yetkazuvchi baquvvat mashina.',
    speed: 'Tezligi: 80-100 km/s',
    bgColor: 'from-stone-600 to-zinc-700',
  },
];

// 4. 10 COLORS
export const COLORS_LIST: ColorItem[] = [
  {
    id: 'red',
    name: 'Red',
    uzbek: 'Qizil',
    phonetic: '/red/',
    hex: '#EF4444',
    textColor: 'text-white',
    description: 'Olov va sevgining yorqin, kuchli rangi.',
    examples: [
      { emoji: '🍎', name: 'Apple', uz: 'Olma' },
      { emoji: '🍓', name: 'Strawberry', uz: 'Qulupnay' },
      { emoji: '❤️', name: 'Heart', uz: 'Yurak' },
    ],
  },
  {
    id: 'blue',
    name: 'Blue',
    uzbek: 'Kok',
    phonetic: '/bluː/',
    hex: '#3B82F6',
    textColor: 'text-white',
    description: 'Tiniq osmon va cheksiz okean rangi.',
    examples: [
      { emoji: '🌊', name: 'Ocean', uz: 'Okean' },
      { emoji: '🫐', name: 'Blueberry', uz: 'Черника' },
      { emoji: '🚙', name: 'Blue Car', uz: "Ko'k mashina" },
    ],
  },
  {
    id: 'green',
    name: 'Green',
    uzbek: 'Yashil',
    phonetic: '/ɡriːn/',
    hex: '#10B981',
    textColor: 'text-white',
    description: 'Yam-yashil tabiat, daraxtlar va barglar rangi.',
    examples: [
      { emoji: '🍃', name: 'Leaf', uz: 'Barg' },
      { emoji: '🐸', name: 'Frog', uz: 'Qurbaqa' },
      { emoji: '🥒', name: 'Cucumber', uz: 'Bodring' },
    ],
  },
  {
    id: 'yellow',
    name: 'Yellow',
    uzbek: 'Sariq',
    phonetic: '/ˈjel.əʊ/',
    hex: '#FACC15',
    textColor: 'text-zinc-900',
    description: 'Quyosh nuri kabi iliq va quvnoq rang.',
    examples: [
      { emoji: '☀️', name: 'Sun', uz: 'Quyosh' },
      { emoji: '🍌', name: 'Banana', uz: 'Banan' },
      { emoji: '🌻', name: 'Sunflower', uz: 'Kungaboqar' },
    ],
  },
  {
    id: 'orange',
    name: 'Orange',
    uzbek: 'Toq sariq (Sabzirang)',
    phonetic: '/ˈɒr.ɪndʒ/',
    hex: '#F97316',
    textColor: 'text-white',
    description: 'Shirin apelsin va quyosh botishining iliq rangi.',
    examples: [
      { emoji: '🍊', name: 'Orange', uz: 'Apelsin' },
      { emoji: '🥕', name: 'Carrot', uz: 'Sabzi' },
      { emoji: '🏀', name: 'Basketball', uz: 'Koptok' },
    ],
  },
  {
    id: 'purple',
    name: 'Purple',
    uzbek: 'Binafsha',
    phonetic: '/ˈpɜː.pəl/',
    hex: '#A855F7',
    textColor: 'text-white',
    description: 'Sehrli, sirli va shohlarga xos boy rang.',
    examples: [
      { emoji: '🍇', name: 'Grapes', uz: 'Uzum' },
      { emoji: '🍆', name: 'Eggplant', uz: 'Baqlajon' },
      { emoji: '🔮', name: 'Crystal ball', uz: 'Sehrli shar' },
    ],
  },
  {
    id: 'pink',
    name: 'Pink',
    uzbek: 'Pushti',
    phonetic: '/pɪŋk/',
    hex: '#EC4899',
    textColor: 'text-white',
    description: 'Mayin gullar va yoqimli shirinliklar rangi.',
    examples: [
      { emoji: '🌸', name: 'Blossom', uz: 'Gul' },
      { emoji: '🦩', name: 'Flamingo', uz: 'Flamingo' },
      { emoji: '🎀', name: 'Ribbon', uz: 'Bantik' },
    ],
  },
  {
    id: 'black',
    name: 'Black',
    uzbek: 'Qora',
    phonetic: '/blæk/',
    hex: '#18181B',
    textColor: 'text-white',
    description: 'Yulduzli qorongʻu tun va koʻmir rangi.',
    examples: [
      { emoji: '🐈‍⬛', name: 'Black Cat', uz: 'Qora mushuk' },
      { emoji: '🕶️', name: 'Sunglasses', uz: 'Kozoynak' },
      { emoji: '🖤', name: 'Black Heart', uz: 'Qora yurak' },
    ],
  },
  {
    id: 'white',
    name: 'White',
    uzbek: 'Oq',
    phonetic: '/waɪt/',
    hex: '#F8FAFC',
    textColor: 'text-zinc-900',
    description: 'Oppogʻ qor, toza paxta va musaffolik rangi.',
    examples: [
      { emoji: '❄️', name: 'Snowflake', uz: 'Qor parchasi' },
      { emoji: '🥛', name: 'Milk', uz: 'Sut' },
      { emoji: '☁️', name: 'Cloud', uz: 'Bulut' },
    ],
  },
  {
    id: 'brown',
    name: 'Brown',
    uzbek: 'Jigarrang',
    phonetic: '/braʊn/',
    hex: '#854D0E',
    textColor: 'text-white',
    description: 'Shirin shokolad, daraxt poʻstlogʻi va yer rangi.',
    examples: [
      { emoji: '🍫', name: 'Chocolate', uz: 'Shokolad' },
      { emoji: '🐻', name: 'Bear', uz: 'Ayiq' },
      { emoji: '🌰', name: 'Chestnut', uz: 'Yongʻoq' },
    ],
  },
];

// 5. 10 BIRDS (Qushlar)
export const BIRDS_LIST: BirdItem[] = [
  {
    id: 'eagle',
    name: 'Eagle',
    uzbek: 'Burgut',
    phonetic: '/ˈiː.ɡəl/',
    emoji: '🦅',
    habitat: 'Baland togʻ choʻqqilarida',
    soundDescription: 'Oʻtkir va viqorli qichqiradi',
    funFact: 'Burgutning koʻzlari bir necha kilometr naridagi narsani ham koʻradi!',
    canFly: true,
    bgColor: 'from-amber-600 to-stone-700',
  },
  {
    id: 'parrot',
    name: 'Parrot',
    uzbek: 'Totiqush',
    phonetic: '/ˈpær.ət/',
    emoji: '🦜',
    habitat: 'Issiq tropik oʻrmonlarda',
    soundDescription: 'Odamlarning gaplarini takrorlay oladi',
    funFact: 'Toʻtiqushlar juda aqlli va rang-barang patlarga ega!',
    canFly: true,
    bgColor: 'from-emerald-500 to-green-600',
  },
  {
    id: 'owl',
    name: 'Owl',
    uzbek: 'Boyogli',
    phonetic: '/aʊl/',
    emoji: '🦉',
    habitat: 'Zich daraxtzor va qadimgi oʻrmonlarda',
    soundDescription: 'Hoo hoo! deb ovoz chiqaradi',
    funFact: 'Boyoʻgʻli boshini deyarli 270 darajaga aylantira oladi va tunda ov qiladi!',
    canFly: true,
    bgColor: 'from-indigo-600 to-slate-700',
  },
  {
    id: 'penguin',
    name: 'Penguin',
    uzbek: 'Pingvin',
    phonetic: '/ˈpeŋ.ɡwɪn/',
    emoji: '🐧',
    habitat: 'Antarktida muzliklarida',
    soundDescription: 'Quvnoq qichqiriqlar chiqaradi',
    funFact: 'Pingvin ucha olmaydi, ammo suvda baliqdek mohirona suzadi!',
    canFly: false,
    bgColor: 'from-sky-700 to-slate-800',
  },
  {
    id: 'duck',
    name: 'Duck',
    uzbek: 'Ordak',
    phonetic: '/dʌk/',
    emoji: '🦆',
    habitat: 'Koʻl va daryo boʻylarida',
    soundDescription: 'Quack quack!',
    funFact: 'Oʻrdakning patlari maxsus moy tufayli suvda aslo hoʻl boʻlmaydi!',
    canFly: true,
    bgColor: 'from-teal-500 to-emerald-600',
  },
  {
    id: 'pigeon',
    name: 'Pigeon',
    uzbek: 'Kaptar',
    phonetic: '/ˈpɪdʒ.ən/',
    emoji: '🕊️',
    habitat: 'Shaharlar va tinch bogʻlarda',
    soundDescription: 'Coo coo!',
    funFact: 'Kaptar tinchlik ramzi boʻlib, oʻz uyining yoʻlini hech qachon adashmay topadi.',
    canFly: true,
    bgColor: 'from-slate-400 to-blue-500',
  },
  {
    id: 'swan',
    name: 'Swan',
    uzbek: 'Oqqush',
    phonetic: '/swɒn/',
    emoji: '🦢',
    habitat: 'Tinch va moviy koʻllarda',
    soundDescription: 'Mayin va sirli kuylaydi',
    funFact: 'Oqqush goʻzallik va vafodorlik timsoli sanaladi.',
    canFly: true,
    bgColor: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'peacock',
    name: 'Peacock',
    uzbek: 'Tovus',
    phonetic: '/ˈpiː.kɒk/',
    emoji: '🦚',
    habitat: 'Yashil bogʻlar va oʻrmonlarda',
    soundDescription: 'Baland va jarangdor ovoz beradi',
    funFact: 'Tovus dumini yoyganda ulkan kamalak rangli yelpigʻichga oʻxshaydi!',
    canFly: true,
    bgColor: 'from-teal-600 to-cyan-700',
  },
  {
    id: 'flamingo',
    name: 'Flamingo',
    uzbek: 'Flamingo',
    phonetic: '/fləˈmɪŋ.ɡəʊ/',
    emoji: '🦩',
    habitat: 'Tuzli va sayoz koʻllarda',
    soundDescription: 'Gʻoz kabi baqiradi',
    funFact: 'Flamingo bitta oyoqda turib uxlashni yaxshi koʻradi!',
    canFly: true,
    bgColor: 'from-pink-500 to-rose-600',
  },
  {
    id: 'sparrow',
    name: 'Sparrow',
    uzbek: 'Chumchuq',
    phonetic: '/ˈspær.əʊ/',
    emoji: '🐦',
    habitat: 'Hamma yerda, uylar va bogʻlarda',
    soundDescription: 'Chirp chirp! Chiv-chiv!',
    funFact: 'Chumchuq juda chaqqon boʻlib, bogʻlarni zararkunandalardan tozalaydi.',
    canFly: true,
    bgColor: 'from-amber-600 to-yellow-700',
  },
];
