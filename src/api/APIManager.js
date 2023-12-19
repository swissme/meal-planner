import fetch from 'node-fetch';

const apiKey = "79b37623500f4ea89389ae12237046c7";
const apiURL = "https://api.spoonacular.com/recipes/"

const complexSearch = async (foodQuery, number) => {
    const complexSearchURL = "complexSearch?query=" + foodQuery + "&number=" + number;

    return getResponse(complexSearchURL);
}

const getResponse = async (endpoint) => {
    try {
        const headers = {
            "x-api-key": apiKey
        };
          
        const response = await fetch(
            apiURL + endpoint,
            { 
                method: 'GET', 
                headers: headers 
            }
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export default complexSearch;