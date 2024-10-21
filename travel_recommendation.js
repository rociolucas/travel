resetBtn = document.getElementById('searchButton');
searchBtn = document.getElementById('searchButton');
display = document.getElementById('resultsContainer');

function reset() {
    display.innerHTML = "";
    document.getElementById('searchInput').value = "";
}

searchBtn.addEventListener('click', async () => {
    SOURCE = "https://rociolucas.github.io/travel/travel_recommendation_api.json";

    fetch(SOURCE)
    .then(response => response.json())
    .then(destinationsArray => {
        showDestinations(destinationsArray);
    })

    function showDestinations(dataArray){
        input = document.getElementById('searchInput').value.toLowerCase();
        if (input == "beach" || input == "beaches") {
            dataArray = dataArray.beaches;
        } else if (input == "temple" || input == "temples") {
            dataArray = dataArray.temples;
        } else if (input == "japan") {
            dataArray = dataArray.countries[1].cities;
        } else if (input == "brazil") {
            dataArray = dataArray.countries[2].cities;
        } else {
            dataArray = dataArray.countries[0].cities;
        }

        reset();
        for (const item of dataArray){
        display.innerHTML += `
        <div class="beige box destination-box">
            <div>
                <img src="${item.imageUrl}" class="destination-image">  
                <br>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        </div>
        <br>`;
        
      }
    }

});

/*
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpiar resultados previos
    try {
        const response = await fetch(`travel_recommendation_api?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        data.forEach(destination => {
             const resultDiv = document.createElement('div');
             resultDiv.className = 'result';
             resultDiv.innerHTML = `
                 <img src="${destination.image}" alt="${destination.name}">
                 <h3>${destination.name}</h3>
                 <p>${destination.country}</p>
             `;
             resultsContainer.appendChild(resultDiv);
        });
    } catch (error) {
        console.error('Error al buscar destinos:', error);
        resultsContainer.innerHTML = '<p>Error al cargar resultados.</p>';
    }*/




       