import Link from 'next/link';
import { DisplayHeaders } from '../display-headers';

/** Add your relevant code here for the issue to reproduce */
export default function BrokenPage() {
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
