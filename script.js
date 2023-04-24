let searchBtn = document.getElementById("Searchbtn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {

        result.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="Wrapper">
            <div class="data-wrapper">
                <h4>Capital: </h4>
                <span>${data[0].capital[0]}</span>

            </div>
        </div>
        <div class="Wrapper">
            <div class="data-wrapper">
                <h4>Region: </h4>
                <span>${data[0].continents[0]}</span>
                
            </div>
        </div>
        <div class="Wrapper">
            <div class="data-wrapper">
                <h4>Population: </h4>
                <span>${data[0].population}</span>
                
            </div>
        </div>
        `;


    })
    .catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `<h3> The input field cannot be empty</h3>`;
        }
        else {
            result.innerHTML = `<h3>Please enter a valid country name. </h3>`;
        }
    })
    ;

});



