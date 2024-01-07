  const subtitle = document.querySelector(".subtitle");
  const popButton = document.querySelector(".population");
  const langButton = document.querySelector(".languages");
  const graphTitle = document.querySelector(".graph-title");
  const graphTable = document.querySelector(".graph-table");

  // showing number of countries
  subtitle.innerHTML = `Currently, we have ${countries.length} countries`;

// find top ten countries with highest population
  const population = (number) => {
    let allPopulation = [];
    let totalPopulation = 0;
    countries.forEach((element) => {
      let obj = {};
      obj[element.name] = element.population;
      allPopulation.push(obj);
      totalPopulation += element.population;
    });

    allPopulation.sort((a, b) => {
      return Object.values(b) - Object.values(a);
    });

    finalData = [];
    for (let i = 0; i < number; i++) {
      finalData.push(allPopulation[i]);
    }

    finalData.unshift({ world: totalPopulation });
    return finalData;
    // console.log(finalData)
    };

  // find ten most spoken languages in the world

  const allLanguages = [];
  countries.forEach((element) => {
    let languages = element.languages;
    languages.forEach((lang) => allLanguages.push(lang));
  });
  // making elements unique in allLanguages array
  const languageSet = new Set(allLanguages);
  // console.log(languageSet)

  // total number of languages
  const totalLang = languageSet.size;
  console.log(totalLang);

  // traversing allLanguages array and langSet to count the languages number

const countLang = (allLanguages, number) => {
  let counter = [];
  languageSet.forEach((element) => {
    let mostLang = {};
    let filteredArray = allLanguages.filter((lang) => lang === element);
    let count = filteredArray.length;
    mostLang[element] = count;
    counter.push(mostLang);
  });
  counter.sort((a, b) => {
    return Object.values(b) - Object.values(a);
  });

  const finalData = [];
  for (let i = 0; i < number; i++) {
    finalData.push(counter[i]);
  }
  return finalData;
};

// creating visual representation of calculations
const createGraphs = (data, total) => {
  data.forEach((element) => {
    // creating row
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    //creating name column
    const name = document.createElement("div");
    name.setAttribute("class", "col1");
    name.innerHTML = Object.keys(element);
    row.appendChild(name);

    //creating bar graph column
    const barColumn = document.createElement("div");
    barColumn.setAttribute("class", "col2");
    row.appendChild(barColumn);

    // creating bar
    const bar = document.createElement("div");
    bar.setAttribute("class", "bar");
    bar.style.width = `${(Object.values(element) / total) * 100}%`;
    barColumn.appendChild(bar);

    //creating values column
    const number = document.createElement("div");
    number.setAttribute("class", "number");
    number.innerHTML = Object.values(element);
    row.appendChild(number);
    graphTable.appendChild(row);
  });
};

popButton.addEventListener("click", () => {
  graphTable.innerHTML = "";
  graphTitle.textContent = "10 Most populated countries in the world";
  createGraphs(population(10), Object.values(population(10)[0]));
});

langButton.addEventListener("click", () => {
  graphTable.innerHTML = "";
  graphTitle.textContent = "10 Most popular languages in the world";
  let data = countLang(allLanguages, 10);
  createGraphs(data, totalLang);
});
