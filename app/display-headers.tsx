import { cookies, headers } from 'next/headers';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function DisplayHeaders() {
  const cookieStore = cookies();
  const test = cookieStore.get('testcookie');

  const headerList = headers();
  const allheaders = [];

  for (const pair of headerList.entries()) {
    allheaders.push(`${pair[0]}: ${pair[1]}`);
  }

  return (
    <>
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
    </>
  );
}
