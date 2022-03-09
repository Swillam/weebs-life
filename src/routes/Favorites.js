import '../css/manga.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MangaCards  from '../utils/MangaCards'
import parseJson from './Random'

function fetchManga(id){
    fetch(`https://api.jikan.moe/v4/random/${id}`)
        .then(response => response.json())
        .then(data => {
          const manga = parseJson(data.data)
          return manga
        })
}

function Favorites() {
    const favorites = JSON.parse(localStorage.getItem("Favorites")) ?? []
  return (
  <div className="favorites">
      <h1>Favorites</h1>
        {favorites.map( (mangaID) => {
            const manga = {}/* await fetchManga(mangaID)*/
            return (<MangaCards value={manga}/>)
        })}
  </div>
  );
}

export default Favorites;
