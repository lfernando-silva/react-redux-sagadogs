import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import BreedAlbum from './breedAlbum';

import {
    API_BREED_LIST_REQUEST,
    API_BREED_REQUEST
} from './types'

function Breeds(props) {
    const [breed, setBreed] = useState('Select Breed');

    useEffect(() => {
        if (!props.breedList) {
            props.getBreedList()
        }
    });

    return (
        <div>
            <div className="jumbotron row" style={{ marginRight: '2%', marginLeft: '2%', marginTop: '1%', marginBottom: '1%' }}>
                <div className="dropdown col-md">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {breed}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                        height: 'auto',
                        maxHeight: '200px',
                        overflowX: 'hidden',
                    }}>
                        {props.breedList && Object.keys(props.breedList).map((b) =>
                            (<a key={b} onClick={() => {
                                setBreed(b);
                                props.getBreed(b);
                            }} className="dropdown-item" href="#">{b}</a>))}
                    </div>
                </div>
            </div>
            {props.breed && <BreedAlbum breedImages={props.breed} />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        fetching: state.breedsReducer.fetching,
        breedList: state.breedsReducer.breedList,
        breed: state.breedsReducer.breed,
        error: state.breedsReducer.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBreedList: () => dispatch({ type: API_BREED_LIST_REQUEST }),
        getBreed: breed => dispatch({ type: API_BREED_REQUEST, breed })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);