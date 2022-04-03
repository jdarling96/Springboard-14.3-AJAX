const firstReq = new XMLHttpRequest();       // Requests take time. Javascript relies on the browser to make the request and tell javascript to run its code
firstReq.addEventListener('load', function () {  // similiar to setTimeout request utlize callbacks to wait for browsers to run the callback code
  const data = JSON.parse(this.response)
  for(let planet of data.results){
    console.log(planet.name)
  } 
   const nextUrl = data.next
   const newUrl = new XMLHttpRequest();
   newUrl.addEventListener('load', function () {   // in order to get the second page from out starwars api we depend on the firt request
    const data = JSON.parse(this.response)         // therefor we have to nest our second request and repeat the steps depeding on that first request to pass
    for(let planet of data.results){
      console.log(planet.name)
    } 

   })
   newUrl.addEventListener('error', () => {
     console.log('error')
   })
   newUrl.open('GET', nextUrl)
   newUrl.send();
});

firstReq.addEventListener('error', () => {
  console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log("SENDING REQUEST......")           // We will see this first in the log since requests take time

// this is the built in method for browsers we will use AXIOS