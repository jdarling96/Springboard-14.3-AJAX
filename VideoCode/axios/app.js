
/*async function getData () {
const response = await axios.get('https://swapi.dev/api/planets/')   //cant call await without async. response wont run till our promise is resolved
const { next, results } = response.data
console.log('this line is after axios.get'); 
for(let planet of results) {
  console.log(planet.name)
} 
const response2 = await axios.get(next);
const results2 = response2.data.results
for(let planet of results2 ) {
  console.log(planet.name)
} 

}
getData();
*/

 async function getLaunches() {
  const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
  renderLaunches(res.data);
 
  
}

function renderLaunches(launches) {
  const ul = document.querySelector('#launches')
  for(let launch of res.data) {
    ul.append(makeLaunchLI(launch))
   
   //newLI.style.fontFamily

        }
}  
   function makeLaunchLI(launch) {
    const newLI = document.createElement('LI')
    const mission = document.createElement('B')
    mission.innerText = launch.mission_name
    newLI.append(mission)
    ul.append(newLI)
    newLI.innerHTML += ` - {launch.rocket.rocket_name}`
    return newLI;

   }
   
   const btn = document.querySelector('#get-launches')
   btn.addEventListener('click', getLaunches)