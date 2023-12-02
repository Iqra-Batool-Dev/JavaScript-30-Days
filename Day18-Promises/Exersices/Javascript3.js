const countriesApi = "https://restcountries.com/v2/all";
const catsApi = "https://api.thecatapi.com/v1/breeds";

// Q No. 01- Read the cats api and find the average weight of cat in metric unit.

const fetchApi = async () => {
  try {
    const response = await fetch(catsApi);
    const data = await response.json();
    const weights = data.map((catObj) => parseFloat(catObj.weight.metric));
    const sumOfWeights = weights.reduce((sum, weight) => sum + weight, 0);
    const average = sumOfWeights / weights.length;
    //displaying average weight

    console.log(`Average Weight: ${average.toFixed(2)} kg`);
  } catch (err) {
    console.error(err);
  }
};
fetchApi();

// Q No. 02- Read the countries api and find out the 10 largest countries

fetch(countriesApi)
  .then((response) => response.json())
  .then((data) => {
    // sort countries in descending order according to area
    const sortedArray = data.sort((a, b) => b.area - a.area);

    // slice first 10 largest countries from sorted array
    const largest10Countries = sortedArray.slice(0, 10);

    // print those 10 countries
    console.log("10 Largest Countries:", largest10Countries);
  })
  .catch((err) => {
    console.error(err);
  });

// Q No. 03- Read the countries api and count total number of languages in the world used as officials.

fetch(countriesApi)
  .then((response) => response.json())
  .then((data) => {
    const LanguagesSet = new Set();
    data.forEach((country) => {
      const officialLanguages = country.languages;
      officialLanguages.forEach((language) => {
        LanguagesSet.add(language.name);
      });
    });
    const totalLanguages = LanguagesSet.size;

    // print the total Number of official languages
    console.log(`Total Number of Official Languages: ${totalLanguages}`);
  })

  .catch((err) => {
    console.error(err);
  });
