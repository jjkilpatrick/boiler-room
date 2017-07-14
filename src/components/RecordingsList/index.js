import React from 'react';

import { 
    gql, 
    graphql 
} from 'react-apollo';

import Length from '../Length'
import Location from '../Location'
import RecordingInfo from '../RecordingInfo'

const List = ({ data: {loading, error, recordings }}) => {

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return <ul className="list-group">{ 
        recordings.map( r => 
            <li key={r.id} className="list-group-item">
                <h4><a href={r.link}>{r.name}</a></h4>
                <RecordingInfo>
                    <Location dark>{r.location}</Location>
                    <Length dark>{r.length}</Length>
                </RecordingInfo>
                <p>{r.description}</p>
            </li> ) }
    </ul>;
};

const recordingsListQuery = gql`
    query RecordingsListQuery {
        recordings {
            id
            name
            location
            length
            description
            link
        }
    }
`;

const RecordingsList = graphql(recordingsListQuery)(List);

export default RecordingsList;
