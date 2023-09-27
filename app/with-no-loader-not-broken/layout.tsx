import { cookies, headers } from 'next/headers';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Add your relevant code here for the issue to reproduce */
export default async function BrokenPage({ children }) {
  await sleep(10);

  const cookieStore = cookies();
  const test = cookieStore.get('testcookie');

  const headerList = headers();
  const allheaders = [];

  for (const pair of headerList.entries()) {
    allheaders.push(`${pair[0]}: ${pair[1]}`);
  }

  return (
    <div>
      <div style={{ border: '1px solid blue', margin: '0 0 20px' }}>
        <div>Layout:</div>
        <div>It's broken:</div>
        <pre>Test Cookie Value: `{test?.value || 'undefined'}`</pre>
        <div>Headers:</div>
        <pre
          style={{
            height: 200,
            overflow: 'scroll',
            padding: 5,
            background: '#eee',
          }}
        >
          {JSON.stringify(allheaders, null, 2)}
        </pre>
        <div>
          If you refresh this page (ie not a `Link` navigate but a hard
          navigate, it works fine.
        </div>
      </div>
      <div style={{ border: '1px solid green', margin: '0 0 20px' }}>
        <div>Page</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
