import { Suspense } from 'react';

import NotesList from '@/app/components/notes-list';

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense>
          <NotesList />
        </Suspense>
      </div>
    </main>
  );
}
