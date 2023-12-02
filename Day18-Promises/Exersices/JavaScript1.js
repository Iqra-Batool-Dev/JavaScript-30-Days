// ----------------LEVEL 01------------------
// Q No.01- Read the countries API using fetch and print the name of country, capital, languages, population and area.
const url = 'https://restcountries.com/v2/all'

const languagesName = (...languageSet) =>{
    const langArray =[]
    languageSet.forEach(object => {
        //pushing languages.name in lang array
        for (const element of object) {
            langArray.push(element.name)
        }
    });
    return langArray
}

const fetchData = async ()=>{
    let response = await fetch(url)
    let countries = await response.json()
    countries.forEach(element => {
        console.log(`Name: ${element.name}\n Capital: ${element.capital}\n Languages: ${languagesName(element.languages)}\n Population: ${element.population}\n Area: ${element.area}`)
    });
    
}
fetchData()
