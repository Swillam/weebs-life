import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/manga.css'
import { ReactComponent as Logo } from '../img/star.svg'
import { ReactComponent as LogoFill } from '../img/star-solid.svg'

import { useState,useEffect } from 'react';



function Manga(props){
    const [fav,setFav] = useState(false) 
    const manga = props.value

    useEffect(() => {
        var favorites = JSON.parse(localStorage.getItem("Favorites")) ?? []
        console.log("fav:",favorites)
        if (fav) {
            favorites.unshift({id: manga.id})
        }
        else{
            favorites = favorites.filter( elem => { return elem.id !== manga.id});
        }
        localStorage.setItem("Favorites",JSON.stringify(favorites),[manga])
      }, [fav,manga]);

    if (Object.keys(manga).length !== 0){
        var favicon = fav ? <LogoFill onClick={ () => {setFav(false)} } style={{ color: 'orange' }} />  :  <Logo onClick={ () => {setFav(true)} } style={{ color: 'orange' }} />
        return (
            <div className='Manga'>
                <div className='Cover'>
                    <img src={manga.image} alt="Manga Cover"/>
                    <h2>{manga.title}</h2>
                    <h4>{manga.title_english}</h4>
                </div>
                <div className='Detail'>
                    <div className='column'>
                        <div>
                            <p><span>Type :</span> {manga.type}</p>
                            <p><span>Chapters :</span> {manga.chapters}</p>
                            <p><span>Volumes :</span> {manga.volumes}</p>
                            <p><span>Publishing :</span> {manga.publishing ? 'Yes' : 'No'}</p>
                        
                        </div>
                        <div>
                            <span>Genre:</span>
                            <p>{manga.genres.join(', ')}</p>
                        </div>
                        {favicon}
                    </div>
                </div>
            </div>
        )
    }

    else{
        return(<div></div>)
    }
}



export default Manga