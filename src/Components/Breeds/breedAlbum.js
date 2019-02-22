import React from 'react';
import BreedCard from './breedCard';

const style = { marginRight: '2%', marginLeft: '2%', marginTop: '1%', marginBottom: '1%' }

function BreedAlbum(props) {
    const { breedImages } = props;

    return (
        <div 
            className="jumbotron row"
            style={style}
        >
           {breedImages.map(b => <BreedCard key={b} src={b} />)}
        </div>
    )
}

export default BreedAlbum;