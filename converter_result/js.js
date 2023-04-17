
const retrieveSearchResults = async (url) => {
    let searchResults = await requestData(url);

    // Проверка на undefined - аналог того, если код ответа не 200
    if(searchResults && searchResults.hasOwnProperty('usd') && searchResults.hasOwnProperty('euro')) {
        renderCurrency(searchResults);
    }
}

const requestData = async (url) => {
    try {
        const response = await fetch(url);
        if(response.status === 200) {
            const data = await response.json();
            return data;
        } 
    } catch(err) {
        console.error(err);
    }
}

const renderCurrency = (results) => {
    let usd = String(results.usd/100).replace(/\./g, ','); // сотые
    let euro = String(results.euro/100).replace(/\./g, ','); // сотые

    let currency = 
    `<div class="currency">
        <h2 class="currency__title">Курс валют</h2>
        <div class="currency__stats">
            <p class="currency__count">USD 
                <span>${usd}</span>
            </p>
            <p class="currency__count">EUR 
                <span>${euro}</span>
            </p>
        </div>
    </div>`;

    let converter_block = document.querySelector('.converter__block');
    converter_block.insertAdjacentHTML(
        'afterbegin',
        `${currency}`
    );
}
// Ссылка на условный сервак
retrieveSearchResults('https://kopeika.qa.studio/get_currency/');
