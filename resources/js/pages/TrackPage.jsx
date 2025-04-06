import { Inertia } from '@inertiajs/inertia';
import { useEffect, useState } from 'react';

export default function TrackPage({ trackId }) {
    const [trackData, setTrackData] = useState(null);

    useEffect(() => {
        Inertia.get(route('getTrack', { trackId }), (data) => {
            setTrackData(data);
        });
    }, [trackId]);

    if (!trackData) {
        return <div>Loading...</div>;
    }

    // Assuming the response structure, adjust based on actual API response
    const { name, artist_name, album_name, image } = trackData.results[0];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img src={image} alt={album_name} style={{ maxWidth: '300px', borderRadius: '8px' }} />
            <h1 style={{ margin: '20px 0' }}>{name}</h1>
            <p><strong>Artist:</strong> {artist_name}</p>
            <p><strong>Album:</strong> {album_name}</p>
        </div>
    );
}