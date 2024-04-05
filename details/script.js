const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region ;
      const subregion = country.subregion ;
      const population = country.population;

      console.log("Country: "+name);
      console.log("Region: " +region);
      console.log("Subregion: "+subregion);
      console.log("Population: "+population);
    });
  }
};
xhr.send();