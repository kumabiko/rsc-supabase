import type { Database } from 'database.types';
import { format } from 'date-fns';

type Note = Database['public']['Tables']['notes']['Row'];

async function fetchNotes(): Promise<Note[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.url as string;
  const res = await fetch(`${url}/rest/v1/notes?select=*`, {
    // ヘッダーを設定
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    //next: { revalidate: 10 },
  });

  // レスポンスが正常かチェック
  if (!res.ok) {
    throw new Error('Failed to fetch data in server');
  }

  // JSONを解析してノートの配列を取得
  const notes: Note[] = await res.json();

  // ノートの配列を返す
  return notes;
}

export default async function NotesList() {
  const notes = await fetchNotes();
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">Notes</p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p> {note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
