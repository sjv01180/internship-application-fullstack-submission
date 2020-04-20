addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))

})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const getMain = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((res) => {
      return res.json();
    });
    console.log(getMain);
  return new Response('Hello worker', {
    headers: { 'content-type': 'text/plain' },
  })
}
