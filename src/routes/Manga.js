import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/manga.css'

function Manga(props){
    const manga = props.value
    if (Object.keys(manga).length !== 0){
        return (
            <div className='Manga'>
                <div className='Cover'>
                    <img src={manga.image} alt="Manga Cover"/>
                    <h2>{manga.title}</h2>
                    <h3>{manga.title_english}</h3>
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


/*
type: obj.type,
chapters: obj.chapters,
volumes: obj.volumes,
status: obj.status,
publishing: obj.publishing,
genres : genres
*/