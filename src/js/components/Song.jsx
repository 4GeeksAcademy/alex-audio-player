import { React } from 'react';
import styles from '../../styles/song.module.css'


const Song = ({ songs, getUrl }) => {
  
    return (
        <div style={{ background: 'black', color: 'white' }}>
            {songs.map((song) => {
                return <div onClick={getUrl} key={song.id} className={`${styles.song}`} id={song.id} data-url={song.url} style={{ borderBottom: '1px solid grey' }}>

                    <p  > <span>{song.id}</span> {song.name} -</p>
                </div>
            })}
        </div>
    );
};

export default Song;