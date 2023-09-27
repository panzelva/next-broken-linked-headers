import Link from 'next/link';
import { cookies, headers } from 'next/headers';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const cookieStore = cookies();
  const test = cookieStore.get('testcookie');
  return (
    <div>
      <div>Its ok right now:</div>
      <pre>Test Cookie Value: `{test.value}`</pre>
      <Link href="/its-broken">
        Now navigate to another page that has a loader
      </Link>
    </div>
  );
}
