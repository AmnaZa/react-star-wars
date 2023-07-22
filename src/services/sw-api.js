

export async function getAllStarships(page = 1) {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    const data = await response.json();
    return data;
  }
  
  export async function getStarshipDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  