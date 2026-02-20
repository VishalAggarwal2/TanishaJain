'use client';

import ActivityCalendar, { Activity, ThemeInput } from 'react-activity-calendar';

export const GITHUB_THEME: ThemeInput = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

interface CalendarProps {
  data: Activity[];
}

export default function Calendar({ data }: CalendarProps) {
  return (
    <section className="flex flex-col space-y-4">
      <ActivityCalendar
        data={data}
        theme={GITHUB_THEME}
        hideTotalCount
        colorScheme="dark"
        labels={{
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          totalCount: '{{count}} contributions in the last year',
        }}
      />
    </section>
  );
}
