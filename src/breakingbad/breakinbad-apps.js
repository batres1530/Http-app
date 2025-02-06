
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
    nextQouteButton.innerText = 'Next Quote';

    const renderQuate = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQouteButton);

    };
    renderQuate()
        .then(renderQuate )
        

};