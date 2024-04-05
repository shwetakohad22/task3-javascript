const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) { 
    const data = JSON.parse(xhr.responseText); 
    data.forEach(country => {
      const flag = country.flags.svg;
      if (flag) {
        console.log("country=> "+country.name.common+": "+"Flag:"+flag);
      }
    });
  }
};
xhr.send();



