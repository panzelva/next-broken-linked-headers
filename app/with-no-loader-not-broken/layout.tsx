import { DisplayHeaders } from '../display-headers';

/** Add your relevant code here for the issue to reproduce */
export default function BrokenPage({ children }) {
  return (
    <div>
      <div
        style={{ border: '1px solid blue', margin: '0 0 20px', padding: 20 }}
      >
        <div>
          It's fine in <code>layout.tsx</code> when there's no{' '}
          <code>loader.tsx</code> next to it:
        </div>
        <DisplayHeaders />
      </div>
      <div
        style={{ border: '1px solid green', margin: '0 0 20px', padding: 20 }}
      >
        <div>Page</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
