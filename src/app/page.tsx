import { Suspense } from 'react';

import NotesList from '@/app/components/notes-list';
import RefreshBtn from '@/app/components/refresh-btn';
import Spinner from '@/app/components/spinner';
import TimerCounter from '@/app/components/timer-counter';

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-expect-error Async Server Component */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  );
}
