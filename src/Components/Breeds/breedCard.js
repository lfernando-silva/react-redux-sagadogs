import React from 'react';

function BreedCard(props) {
    const {src} = props;

    const srcArray = src.split('/');

    const imgName = srcArray[srcArray.length - 1];

    return (
        <div className="col-md-3" style={{ marginBottom: '1%' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={src} className="card-img-top" alt={src} height="200" width="300" />
                <div className="card-body">
                    <h5 className="card-title">{imgName}</h5>
                </div>
            </div>
        </div>
    )
}

export default BreedCard