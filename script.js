let searchBtn = document.getElementById("Searchbtn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);

});



