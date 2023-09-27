import { cookies, headers } from 'next/headers';

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
    </div>
  );
}
