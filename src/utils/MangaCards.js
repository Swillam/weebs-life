import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/manga.css'

function MangaCards(props){
    const manga = props.value
    if (Object.keys(manga).length !== 0){
        return (
            <div className='MangaCards'>
                <img src={manga.image} alt="Manga Cover"/>
                <h2>{manga.title}</h2>
            </div>
        )
    }

    else{
        return(<div></div>)
    }
}

export default MangaCards