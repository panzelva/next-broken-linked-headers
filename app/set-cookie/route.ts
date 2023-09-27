export async function GET() {
  return new Response('<a href="/">Cookie set, test it out</a>', {
    status: 200,
    headers: { 'Set-Cookie': `testcookie=heyo` },
  });
}
