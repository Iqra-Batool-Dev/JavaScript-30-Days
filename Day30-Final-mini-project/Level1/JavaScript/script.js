const total = document.querySelector('.total')
const counter = document.querySelector('.counter')
const inputBox = document.querySelector('.search')
const nameBtn = document.querySelector('.btn1')
const nameIcon = document.querySelector('#name-icon')
const capitalBtn = document.querySelector('.btn2')
const capIcon = document.querySelector('#capital-icon')
const pop = document.querySelector('.btn3')
const popIcon = document.querySelector('#pop-icon')
const middleSection = document.querySelector('#middle-section')
const chartSection = document.querySelector('#last-section')
const graphTable = document.querySelector('.graph-table')
const pop2 = document.querySelector('.population')
const langButton = document.querySelector('languages')

total.innerHTML = countries.length

let countriesData =  countries
// creating middle section

const createSection =(data)=>{
    middleSection.innerHTML = ''
    data.forEach(country => {
        // creating box
        const mainBox = document.createElement('div')
        mainBox.setAttribute('class' , 'mainBox')
        middleSection.appendChild(mainBox)

        // adding flag into the mainBox
        const flagDiv = document.createElement('div')
        flagDiv.setAttribute('class', 'image')
        flagDiv.src = country.flag  
        flagDiv.style.background = `Url(${country.flag})`
        flagDiv.style.backgroundPosition = 'center'
        flagDiv.style.backgroundSize = 'cover'
        mainBox.appendChild(flagDiv)

        //adding name of country into mainbox
        const name = document.createElement('h2')
        name.setAttribute('class' , 'countryName')
        name.innerHTML = country.name
        mainBox.appendChild(name)

        // adding detail part into main box
        const details  = document.createElement('div')
        details.setAttribute('class' , 'details')
        mainBox.appendChild(details)

        // adding capital of country
        const capital = document.createElement('p')
        capital.setAttribute('class' , 'capital')
        capital.innerHTML= `Capital: ${country.capital}`
        details.appendChild(capital)

        // adding languages 
        const langs = document.createElement('p')
        langs.setAttribute('class' , 'languages')
        langs.innerHTML = `Languages: ${country.languages}`
        details.appendChild(langs)
        
        // adding population 
        const population = document.createElement('p')
        population.setAttribute('class', 'population')
        population.innerHTML = `Population: ${country.population}`
        details.appendChild(population)

        //
    })
}

// working of event listener with input box

inputBox.addEventListener('input' , ()=>{
    let string  = inputBox.value.toLowerCase()
    countriesData= countriesData.filter((country)=> country.name.toLowerCase().includes(string))
    createSection(countriesData)

    let num = countriesData.length
    counter.innerHTML = `${num} countries matched the search criteria`
    if(num==250){
        counter.innerHTML = ''
    }
})

createSection(countriesData)

//name button processing
nameBtn.addEventListener('click', ()=>{
    nameIcon.classList.toggle('fa-arrow-down')
    nameIcon.classList.toggle('fa-arrow-up')
    if(nameIcon.classList.contains('fa-arrow-up')) {
        countriesData.sort((a,b) => {
            let aa = a.name.toLowerCase()
            let bb = b.name.toLowerCase()
            if(aa > bb)
                return -1
            if(aa < bb) 
                return 1
        })
    } 
    else{
        countriesData.sort((a,b) => {
            let aa = a.name.toLowerCase()
            let bb = b.name.toLowerCase()
            if(aa > bb)
                return 1
            if(aa < bb) 
                return -1
        })
    }
    createSection(countriesData)
})

// capital button processing

capitalBtn.addEventListener('click', ()=>{
    capIcon.classList.toggle('fa-arrow-down')
    capIcon.classList.toggle('fa-arrow-up')
    if(capIcon.classList.contains('fa-arrow-up')) {
        countriesData.sort((a,b) => {
            let aa = a.capital
            let bb = b.capital
            if(aa > bb)
                return -1
            if(aa < bb) 
                return 1
        })
    } 
    else{
        countriesData.sort((a,b) => {
            let aa = a.capital
            let bb = b.capital
            if(aa > bb)
                return 1
            if(aa < bb) 
                return -1
        })
    }
    createSection(countriesData)
})

// population button processing

pop.addEventListener('click', ()=>{
    popIcon.classList.toggle('fa-arrow-down')
    popIcon.classList.toggle('fa-arrow-up')
    if(popIcon.classList.contains('fa-arrow-up')) {
        countriesData.sort((a,b) => {
            return b.population-a.population
        })
    } 
    else{
        countriesData.sort((a,b) => {
            return a.population - b.population
        })
    }
    createSection(countriesData)
})

// stats section

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
      graphTable.appendChild(row)
  
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
  
  pop.addEventListener("click", () => {
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