import Link from 'next/link';
import { DisplayHeaders, sleep } from '../display-headers';

/** Add your relevant code here for the issue to reproduce */
export default async function BrokenPage() {
  await sleep(1);

  return (
    <div>
      <div>
        <code>page.tsx</code> is fine here:
      </div>
      <DisplayHeaders />

      <div>
        <Link href="/its-broken">
          But linking to a page with <code>layout.tsx</code> alongside{' '}
          <code>loading.tsx</code> breaks.
        </Link>
      </div>
    </div>
  );
}
