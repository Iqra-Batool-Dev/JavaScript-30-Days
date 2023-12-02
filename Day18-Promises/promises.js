//First we see the  callback function
const doSomeThing = (callBack) => {
  setTimeout(() => {
    const skills = ["html", "css", "js"];
    callBack("here is an error", skills);
  }, 1000);
};

const callBack = (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
};

doSomeThing(callBack);

//Promise Constructor

// const anyName = new promise((resolve , reject)=>{
//     resolve('success')
//     reject('failure')
// })

//Example
//it will return the resolve value
const doPromise = new Promise((resolve, reject) => {
  const skill = ["html", "css", "js", "react", "php"];
  if (skill.length > 0) {
    resolve(skill);
  } else {
    reject("there is something wrong");
  }
});
doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  //now let's make a promise that will return a reject value

const myPromise = new Promise((resolve, reject) => {
  const skill = ["html", "css", "js", "react", "php"];
  if (skill.includes("Node")) {
    resolve(skill);
  } else {
    reject("Node.js does not exist");
  }
});
myPromise     //here i use chaining method in declaring than and catch                
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  // fetch()

  const url= "https://restcountries.com/v2/all"
  fetch(url)
  .then((response)=> response.json()) //accessing the API data as JSON
  .then((data)=>{
    console.log(data)
  })
  .catch((error)=>{
    console.error(error)
  })


  // Async and Await
  //Async

  const square = async function(n){
    return n*n
  }
  square(6).then((result)=>{
    console.log(`result is : ${result}`)
  })
  

  // await is always written in async function for fetching the data properly 
  const test = async function(){
    console.log("2: message")
    await console.log("3:message")
    console.log("4: message")
  }
  console.log("1: message")
  test()
  console.log("5: message")


  //Let us fetch API data using both promise method and async and await method.

  // using Promise
  const Url = 'https://restcountries.com/v2/all'
  fetch(Url)
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.error(err)
  })

  // using Async and Await

  const fetchData = async()=>{
    try{
      const response = await fetch(Url)
      const countries = response.json()
      console.log(countries)
    }
    catch(err){
      console.error(err)
    }
  }

  console.log("======async and await")
  fetchData()

  



  
