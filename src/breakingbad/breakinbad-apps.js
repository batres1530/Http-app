const fetchQoutes    = async () => {
     const respuesta = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
     const data      = await respuesta.json();
     console.log(data[0]);
     return data;
}

export const BreakingBadApps = async  (element) => {
    document.querySelector('#app-title').innerHTML  = `BreakingBad App`;
    element.innerHTML = ` Cargando...`;
    // await fetchQoutes();
    // declaramos la creacione de los elementos html
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQouteButton= document.createElement('button');
    // creamos el boton 
    nextQouteButton.innerText = 'Sieguente cita';

    const renderQuote = (data) => {
        if (data && data.length > 0) {
            const quoteData = data[0];
            quoteLabel.innerHTML = quoteData.quote;
            authoLabel.innerHTML = quoteData.author;
            element.replaceChildren(quoteLabel, authoLabel, nextQouteButton);
        } else {
            console.error("No se encontraron datos en la respuesta de la API");
        }
    };
    // añadir listeners
    nextQouteButton.addEventListener('click',  async() => {
        element.innerHTML = ` Cargando...`;
        const quote = await fetchQoutes(); 
        renderQuote(quote);
        
    });
    fetchQoutes()
    .then(renderQuote)
    

};