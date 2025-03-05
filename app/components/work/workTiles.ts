export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'CuraBot - Medical ChatBot',
    image: {
      src: '/static/images/CuraBot.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built`,
    title: 'Sentiment Analysis',
    image: {
      src: '/static/images/sentiment.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I Attended`,
    title: 'SkilCraft Technology',
    image: {
      src: '/static/images/skillcraft.png',
      width: 600,
      height: 717,
    },
  },
];
