// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users', { username: 'ButtersTheChicken', email: "butters@gmail.com", age: 1 });
//   console.log(res);
// }

// createUser();


async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users/username', {params:{token}})
  console.log(res)
} 

async function signUp(username, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user:{ name, username, password } })
  console.log(res)
}

//signUp('jdarling96', 'password', 'josh darling');


async function login (username, password) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user:{ username, password } })
  console.log(res)
  return res.data.token
}

//signUp('jdarling96', 'password', 'josh darling');
async function getUsersWithAuth(){
  const token = await login('jdarling96', 'password');
  getUsers(token)
}

async function createStory(){
  const token = await login('jdarling96', 'password');
  const newStory = {
     token,
    story: {
      author: "Josh Darling",
      title: "The best story ever",
      url: "http://google.com"
    }
  }
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory)
  console.log(res);

}


getUsersWithAuth();

