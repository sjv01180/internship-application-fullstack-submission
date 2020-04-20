let VARIANT;
let siteCookie;
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))

})

class ElementHandler {
  element(element) {
    // An incoming element
    element.replace(`<title>Site title ${VARIANT}</title>`, {html: true})
  }
}

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
  
  //grabs random link (index is a random number between 0 and 1)
  let index = Math.floor(Math.random() * linkArray.length);
  //reassigns global string for modifying title
  VARIANT = (index % 2 == 0) ? "1" : "2" ;

  //creates response for the HTMLRewriter to transform
  let response = await fetch(linkArray[index]);

  //returns HTMLRewriter response
  return new HTMLRewriter()
    .on('title', new ElementHandler())
    .transform(response);
}
