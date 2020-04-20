addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))

})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //fetch from link and store contents (array) into variable
  const linkArray = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((res) => {
      //convert result into json
      return res.json();
    })
    .then((result) => {
      //grab link array from json object
      return result.variants;
    });
  
  //redirect site to first link
  return Response.redirect(linkArray[0]);

  //redirect site to second link
  return Response.redirect(linkArray[1]);
}
