// Real IWLF content sourced from the official website (iwlf.in).
// This is a static content site — data lives here rather than in a CMS/database.

export const federation = {
  name: 'Indian Weightlifting Federation',
  shortName: 'IWLF',
  email: 'weightlifting@weightliftingindia.in',
  phone: '0120-4541605',
  phoneHref: 'tel:+911204541605',
  website: 'www.iwlf.in',
  address:
    'C-2/18, Sector - 31, Noida, Uttar Pradesh 201301 (India)',
  addressLine: 'Shri S.H. Anande Gowda, Secretary General',
}

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Results', href: '/results' },
  { label: 'Contact', href: '/contact' },
]

export type NewsItem = {
  title: string
  date: string
  category: string
  excerpt: string
  href: string
}

// Latest press releases / news pulled from iwlf.in
export const latestNews: NewsItem[] = [
  {
    title:
      'A debut to remember, a gold to celebrate — India rises in Tashkent',
    date: 'August 7, 2026',
    category: 'Press Release',
    excerpt:
      'PRESS RELEASE — Day 1 of the Asian Youth & Junior Weightlifting Championships 2026, Tashkent, Uzbekistan, opens with a golden start for India.',
    href: 'https://iwlf.in/press-release-day-1-asian-youth-junior-weightlifting-championships-2026-tashkent-uzbekistan/',
  },
  {
    title:
      '2026 AWF Asian Senior Championships concludes successfully in Gandhinagar',
    date: 'May 18, 2026',
    category: 'Result Book',
    excerpt:
      'The 2026 AWF Asian Senior (Men & Women) Weightlifting Championships, Gandhinagar, Gujarat wraps up with the final day result book now published.',
    href: 'https://iwlf.in/press-release-2026-awf-asian-senior-men-women-weightlifting-championships-gandhinagar-gujarat-india-from-10th-to-17th-may-2026-final-day-result-book/',
  },
  {
    title:
      'Iran\u2019s Alireza Yousefi creates new World & Asian records in Men\u2019s +110kg',
    date: 'May 18, 2026',
    category: 'Records',
    excerpt:
      'History at the Asian Weightlifting Championships 2026 as Alireza Yousefi rewrites the record books in the Men\u2019s +110kg category.',
    href: 'https://iwlf.in/irans-alireza-yousefi-creates-new-world-asian-records-in-mens-110kg-at-asian-weightlifting-championships-2026/',
  },
  {
    title: 'Yan Li powers China to triple gold in Women\u2019s +86kg',
    date: 'May 18, 2026',
    category: 'Press Release',
    excerpt:
      'A dominant performance from Yan Li secures a clean sweep of gold medals in the Women\u2019s +86kg at the 2026 Asian Senior Championships.',
    href: 'https://iwlf.in/yan-li-powers-china-to-triple-gold-in-womens-86kg/',
  },
  {
    title:
      'India\u2019s Sanjana wins three bronze medals on Day 6 in Gandhinagar',
    date: 'May 16, 2026',
    category: 'Medals',
    excerpt:
      'Bronze medals for Sanjana light up Day 6 of the 2026 AWF Asian Senior Weightlifting Championships as China\u2019s Yi Tu sweeps the Men\u2019s 94kg.',
    href: 'https://iwlf.in/press-release-day-6-chinas-yi-tu-sweeps-triple-gold-in-mens-94kg-indias-sanjana-wins-three-bronze-medals/',
  },
  {
    title:
      'Mirabai Chanu wins silver on opening day of 2025 World Championships',
    date: 'October 2025',
    category: 'International',
    excerpt:
      'Padma Shri awardee Saikhom Mirabai Chanu claims silver in the 48 kg category at the 2025 IWF Senior World Weightlifting Championships, F\u00f8rde, Norway.',
    href: 'https://iwlf.in/mirabai-chanu-saikhom-padma-shri-awardee-won-silver-medal-on-the-opening-day-2025-iwf-senior-men-women-world-weightlifting-championships-at-forde-norway-in-48-kg-weight-category/',
  },
]

export type EventItem = {
  title: string
  status: 'Upcoming' | 'Ongoing' | 'Completed'
  dateRange: string
  venue: string
  city: string
  level: 'International' | 'National'
}

// Events referenced across iwlf.in circulars, selection notices and result books
export const events: EventItem[] = [
  {
    title: 'Commonwealth Games 2026 — Weightlifting',
    status: 'Upcoming',
    dateRange: '25 – 30 July 2026',
    venue: 'Scottish Event Campus',
    city: 'Glasgow, Scotland',
    level: 'International',
  },
  {
    title: 'Asian Youth & Junior Weightlifting Championships 2026',
    status: 'Upcoming',
    dateRange: '7 – 14 August 2026',
    venue: 'National Weightlifting Arena',
    city: 'Tashkent, Uzbekistan',
    level: 'International',
  },
  {
    title: '2026 AWF Asian Senior (Men & Women) Championships',
    status: 'Completed',
    dateRange: '10 – 17 May 2026',
    venue: 'Mahatma Mandir',
    city: 'Gandhinagar, Gujarat',
    level: 'International',
  },
  {
    title: 'IWLF National Youth, Junior & Senior Championships 2025-26',
    status: 'Completed',
    dateRange: '3 – 14 February 2026',
    venue: 'Modinagar',
    city: 'Uttar Pradesh',
    level: 'National',
  },
]

export type AthleteRanking = {
  rank: number
  athlete: string
  category: string
  state: string
  total: string
}

export const athleteRankings: AthleteRanking[] = [
  {
    rank: 1,
    athlete: 'Mirabai Chanu',
    category: 'Women 48 kg',
    state: 'Manipur',
    total: '199 kg',
  },
  {
    rank: 2,
    athlete: 'Bindyarani Devi',
    category: 'Women 55 kg',
    state: 'Manipur',
    total: '202 kg',
  },
  {
    rank: 3,
    athlete: 'Harjinder Kaur',
    category: 'Women 71 kg',
    state: 'Punjab',
    total: '227 kg',
  },
  {
    rank: 4,
    athlete: 'Achinta Sheuli',
    category: 'Men 73 kg',
    state: 'West Bengal',
    total: '313 kg',
  },
  {
    rank: 5,
    athlete: 'Jeremy Lalrinnunga',
    category: 'Men 67 kg',
    state: 'Mizoram',
    total: '300 kg',
  },
]

export type GalleryImage = {
  src: string
  alt: string
}

// Photographs from the official IWLF gallery (iwlf.in)
export const gallery: GalleryImage[] = [
  {
    src: '/images/g2.png',
    alt: 'Medal ceremony podium at the Commonwealth Weightlifting Championships 2023, Greater Noida',
  },
  {
    src: '/images/g3.png',
    alt: 'Weightlifter competing at an IWLF national championship',
  },
  {
    src: '/images/g4.png',
    alt: 'Athlete during the snatch lift at an IWLF weightlifting event',
  },
  {
    src: '/images/g5.png',
    alt: 'Indian weightlifting team celebrating on the competition platform',
  },
  {
    src: '/images/g1.png',
    alt: 'IWLF championship arena and competition stage',
  },
  {
    src: '/images/g6.png',
    alt: 'Weightlifting barbell and plates on the competition platform',
  },
]

export const mainMenu = [
  { label: 'About us', href: '/about' },
  { label: 'National Camps', href: 'https://iwlf.in', external: true },
  { label: 'RTI', href: 'https://iwlf.in', external: true },
  { label: 'Terms of Service', href: 'https://iwlf.in', external: true },
  { label: 'Privacy Policy', href: 'https://iwlf.in', external: true },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Results', href: '/results' },
  { label: 'Contact', href: '/contact' },
]

export const quickLinks = [
  { label: 'Ministry of Youth Affairs & Sports', href: 'https://yas.gov.in' },
  { label: 'Sports Authority of India', href: 'https://sportsauthorityofindia.nic.in' },
  { label: 'National Anti-Doping Agency', href: 'https://www.nadaindia.org' },
  { label: 'International Weightlifting Federation', href: 'https://iwf.sport' },
  { label: 'Asian Weightlifting Federation', href: 'https://asianweightlifting.org' },
  { label: 'Commonwealth Weightlifting Federation', href: 'https://commonwealthweightlifting.org' },
]
