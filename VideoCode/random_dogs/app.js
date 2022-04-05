async function getRandomDog () { 
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(res.data)
  const img = document.querySelector('#dog')
  img.src = res.data.message
  
 }



async function getDogByBreed (breed) { 
  try { 
  
  const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  const img = document.querySelector('#dog');
  img.src = res.data.message
  } catch(e) {
    alert('BREED NOT FOUND')
    getRandomDog()
  
  }


}

const form = document.querySelector('#search-form')
const input = document.querySelector('#search')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const text = input.value
  getDogByBreed(text);
  text.value = ''
  
})