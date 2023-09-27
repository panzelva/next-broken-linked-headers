import Link from 'next/link';
import { DisplayHeaders } from '../display-headers';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <div>Its ok right now:</div>
      <DisplayHeaders />
      <Link href="/its-broken">
        Now navigate to another page that has a loader
      </Link>
    </div>
  );
}
