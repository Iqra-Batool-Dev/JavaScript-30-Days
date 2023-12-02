// Q No.01- Print out all the cat names in to catNames variable.
const url2 = 'https://api.thecatapi.com/v1/breeds'
const fetchApi = async ()=>{
    const catApi = await fetch(url2)
    const catsData = await catApi.json()
    catsData.forEach(element => {
        console.log(`Name: ${element.name}`)
    });
}
fetchApi()