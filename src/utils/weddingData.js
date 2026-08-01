// Central source of truth for all wedding content.
// Replace image paths under src/assets/images with real files.

import engagement1 from '../assets/images/gallery/engagement-1.jpg'
import engagement2 from '../assets/images/gallery/engagement-2.jpg'
import engagement3 from '../assets/images/gallery/engagement-3.jpg'
import engagement4 from '../assets/images/gallery/engagement-4.jpg'
import engagement5 from '../assets/images/gallery/engagement-5.jpg'
import engagement6 from '../assets/images/gallery/engagement-6.jpg'
import engagement7 from '../assets/images/gallery/engagement-7.jpg'

export const couple = {
  groomFirstName: 'Sreekanth',
  brideFirstName: 'Nayana',
  groomFull: 'Sreekanth',
  brideFull: 'Nayana',
  monogram: 'N & S',
  tagline: 'Together with their families',
  weddingDateISO: '2026-09-06T11:00:00+05:30',
  weddingDateDisplay: '06 September 2026',
  weddingDayMalayalam: '1202 Chingam 21',
  weddingDay: 'Sunday',
  weddingDayNum: '06',
  weddingMonthShort: 'SEP',
  weddingYear: '2026',
}

export const groomFamily = {
  title: 'Sreekanth',
  person: 'Sreekanth',
  parents: 'S/o Mr. Anandkumar P.B. & Mrs. Sreeja Anand',
  father: {
    name: 'Mr. Anandkumar P.B.',
  },
  mother: {
    name: 'Mrs. Sreeja Anand',
  },
  sibling: 'Sibling: Sreelakshmi',
  address: 'Ashirvad House, Thachatt Temple Road, Beypore, Calicut',
  photo: null, // place image at src/assets/images/groom.jpg and import it
}

export const brideFamily = {
  title: 'Nayana',
  person: 'Nayana',
  parents: 'D/o Mr. Jayakrishnan C.K. & Mrs. Shiji Jayakrishnan',
  father: {
    name: 'Mr. Jayakrishnan C.K.',
  },
  mother: {
    name: 'Mrs. Shiji Jayakrishnan',
  },
  sibling: 'Sibling: Sivajith',
  address: 'Sivakripa (H), Chathamkuzhiyil, Kanniparamba, Mavoor, Calicut',
  photo: null, // place image at src/assets/images/bride.jpg and import it
}

export const events = [
  {
    id: 'muhurtham',
    title: 'Wedding Ceremony',
    subtitle: 'Marriage will be solemnised',
    date: 'Sunday, 06 September 2026',
    malayalamDate: '1202 Chingam 21',
    time: '11:00 AM – 11:30 AM',
    venueName: 'Wedland Convention Centre',
    venueAddress: 'Peruvayal, Calicut',
    mapUrl: 'https://www.google.com/maps/place/Wedland+Convention+Centre/@11.2618305,75.9049263,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba645179af4cb9b:0xff87c9056d0ba592!8m2!3d11.2618252!4d75.9075012!16s%2Fg%2F11j8nwkn9l',
    lat: 11.2618252,
    lng: 75.9075012,
  },
  {
    id: 'reception',
    title: 'Wedding Reception',
    subtitle: 'Celebration & Feast',
    date: 'Sunday, 06 September 2026',
    malayalamDate: '1202 Chingam 21',
    time: '5:30 PM – 9:30 PM',
    venueName: 'City Palace Auditorium',
    venueAddress: 'BC Road, Beypore, Calicut',
    mapUrl: 'https://www.google.com/maps/place/CITY+PALACE+AUDITORIUM/@11.1809007,75.8068627,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba65103d7cfa563:0xce4ba61af981e7fd!8m2!3d11.1808954!4d75.8094376!16s%2Fg%2F11fmp9qf75',
    lat: 11.1808954,
    lng: 75.8094376,
  },
]

export const contactNumbers = [
  { name: 'Anandkumar P.B', phone: '9446547194' },
  { name: 'Jayakrishnan C.K', phone: '9847936219' },
]

export const gallery = [
  { id: 1, src: engagement1, alt: 'Engagement photo 1', tall: true },
  { id: 2, src: engagement2, alt: 'Engagement photo 2', tall: true },
  { id: 3, src: engagement5, alt: 'Engagement photo 3' },
  { id: 4, src: engagement4, alt: 'Engagement photo 4' },
  { id: 5, src: engagement3, alt: 'Engagement photo 5' },
  { id: 6, src: engagement6, alt: 'Engagement photo 6', tall: true },
  { id: 7, src: engagement7, alt: 'Engagement photo 7', tall: true },
]

export const socialLinks = {
  instagram: '#',
  facebook: '#',
  whatsapp: '#',
}
