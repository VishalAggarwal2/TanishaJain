'use client';

import { ThemeInput } from 'react-activity-calendar';

export const GITHUB_THEME: ThemeInput = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function Calendar() {
  return <section className="flex flex-col space-y-4"></section>;
}
