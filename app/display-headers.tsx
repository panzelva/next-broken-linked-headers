import { cookies, headers } from 'next/headers';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getTestCookieValue() {
  const cookieStore = cookies();
  const test = cookieStore.get('testcookie');

  return test?.value;
}

export function DisplayHeaders() {
  const headerList = headers();
  const allheaders = [];

  for (const pair of headerList.entries()) {
    allheaders.push(`${pair[0]}: ${pair[1]}`);
  }

  return (
    <>
      <pre>Test Cookie Value: `{getTestCookieValue() || 'undefined'}`</pre>
      <div>Headers:</div>
      <pre
        style={{
          maxHeight: 200,
          overflow: 'scroll',
          padding: 10,
          background: '#eee',
        }}
      >
        {JSON.stringify(allheaders, null, 2)}
      </pre>
    </>
  );
}
