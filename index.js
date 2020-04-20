addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))

})

class AttributeRewriter {
  element(element) {
    // An incoming element, such as `div`
    console.log(`Incoming element: ${element.tagName}`)
    switch(element.n){}
  }

  comments(comment) {
    // An incoming comment
  }

  text(text) {
    // An incoming piece of text
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
  const link = await fetch(linkArray[index]);
  return link;
  //returns HTMLRewriter responce
  //return new HTMLRewriter()
   // .on('title', new AttributeRewriter('textContent'))
  //  .transform(link);

}
