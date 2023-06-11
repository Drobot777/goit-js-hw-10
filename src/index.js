import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'
export { selectEl }
export { loaderEl }

const divEl = document.querySelector('.cat-info')
const selectEl = document.querySelector('.breed-select')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')

fetchBreeds()
    .then((breeds) => renderBreedCats(breeds))
    .catch((error) => addRemoveClass())

function renderBreedCats(breeds) {
  const breedCats =  breeds.map(({ id, name }) => ` <option value="${id}">${name}</option> ` ) 
    return selectEl.innerHTML = breedCats,
        selectEl.classList.remove('none'),
    loaderEl.classList.remove('block')
    }

selectEl.addEventListener('change', (e) => {
fetchCatByBreed(e.currentTarget.value)
        .then((cat) => createCatInforms(cat))
        .catch((error) => addRemoveClass())
})

function createCatInforms(arry) {
    let object;
    let url;
    let description;
    let temperament;
    let name;
    arry.forEach(element => {
        object = element.breeds,
        url = element.url
    });
    object.forEach((en) => {
        description = en.description,
            temperament = en.temperament,
            name = en.name
    })
    return divEl.innerHTML =
        ` <img src="${url}" alt="Cat" width="460" />
        <div class ="box">
        <h1>${name}</h1>
        <p>${description}</p>
        <p><b>Temperament:</b>${temperament}</p></div>`,
           selectEl.classList.remove('none'),
    loaderEl.classList.remove('block')

}

function addRemoveClass() {
  return loaderEl.classList.remove('block'),
  errorEl.classList.add('block')
  }       


    
    

