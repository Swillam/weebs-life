import '../css/random.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingButton from '../utils/LoadingButton'
import Manga from './Manga'
import { useState,useEffect } from 'react';


function parseJson(obj){
  return {
    id: obj.mal_id,
    image: obj.images.jpg.image_url,
    title: obj.title,
    title_english: obj.title_english,
    type: obj.type,
    chapters: obj.chapters,
    volumes: obj.volumes,
    status: obj.status,
    publishing: obj.publishing,
    genres : obj.genres.map( (genre) => genre.name),
    synopsis: obj.synopsis
  }
}


function Random() {
  const [isLoading, setLoading] = useState(false);
  const [randomManga,setManga] = useState({})
    
  useEffect(() => {
    if (isLoading) {
      fetch('https://api.jikan.moe/v4/random/manga')
        .then(response => response.json())
        .then(data => {
          const manga = parseJson(data.data)
          setManga(manga)
          setLoading(false);
        })
    }
  }, [isLoading]);

  return (
      <div className="randomDiv">
          
          <h1>Random</h1>
          <Manga value={randomManga}/><br/>
          <LoadingButton isLoading={isLoading} onClick={() => setLoading(true)}/>
          </div>
  
  );
}
  
export default Random;
