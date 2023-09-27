export async function GET() {
  return new Response('<a href="/its-ok">Cookie set, test it out</a>', {
    status: 200,
    headers: {
      'Set-Cookie': `testcookie=heyo`,
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
