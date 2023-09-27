import Link from 'next/link';
import { DisplayHeaders, sleep } from '../display-headers';

/** Add your relevant code here for the issue to reproduce */
export default async function Page() {
  await sleep(1);
  return (
    <div>
      <div>
        It's fine in the <code>page.tsx</code>:
      </div>
      <DisplayHeaders />
    </div>
  );
}
