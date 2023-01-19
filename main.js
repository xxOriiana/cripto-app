
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(data => {
        // Crea una tabla HTML dinámicamente utilizando JavaScript.
        const table = document.createElement("table");
        table.setAttribute("class", "table");
        // Agrega los encabezados de la tabla
        const headerRow = table.createTHead().insertRow();
        headerRow.insertCell().innerHTML = "Name";
        headerRow.insertCell().innerHTML = "Value";
        headerRow.insertCell().innerHTML = "Coin";
        // Itera sobre los datos JSON y agrega cada criptomoneda a la tabla HTML.
        data.forEach(coin => {
            const row = table.insertRow();
            const nameCell = row.insertCell();
            const priceCell = row.insertCell();
            const iconCell = row.insertCell();
            nameCell.classList.add("name-price-cell");
            nameCell.innerHTML = coin.name;
            priceCell.classList.add("name-price-cell");
            priceCell.innerHTML = coin.current_price;
            iconCell.innerHTML = `<img src="${coin.image}">`;
        });
        // Agrega la tabla al documento HTML
        document.body.appendChild(table);


    })
    .catch(error => {
        console.log(error);
    });


setInterval(() => {
    // Código para actualizar los datos de la tabla
}, 1000 * 60 * 5);

