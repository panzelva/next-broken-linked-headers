import { cookies, headers } from 'next/headers';
import Link from 'next/link';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Add your relevant code here for the issue to reproduce */
export default async function BrokenPage() {
  await sleep(2000);

  const cookieStore = cookies();
  const test = cookieStore.get('testcookie');
  return (
    <div>
      <div>It's broken:</div>
      <pre>Test Cookie Value: `{test.value}`</pre>
      <div>
        If you refresh this page (ie not a `Link` navigate but a hard navigate,
        it works fine.
      </div>
      <div>
        <Link href="/its-broken">It even breaks when you link to itself.</Link>
        <Link href="/with-no-loader-not-broken">
          But not when you link to a page with no <code>loader.tsx</code>.
        </Link>
      </div>
    </div>
  );
}
