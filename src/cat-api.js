export { fetchBreeds };
export { fetchCatByBreed };
import { selectEl } from './index'
import { loaderEl } from './index'

function fetchBreeds() {
  selectEl.classList.add('none')
  loaderEl.classList.add('block')
  
    const apiKey = 'live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG'
    const baseUrl = 'https://api.thecatapi.com/v1/breeds'
   return fetch(`${baseUrl}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
     
      throw new Error(response.status);
    }
    return response.json();
  })
}
function fetchCatByBreed(breedId) {
    selectEl.classList.add('none')
  loaderEl.classList.add('block')
  const apiKey = 'live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG'
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
       
      throw new Error(response.status);
      }
      return response.json()
  })
}

    
