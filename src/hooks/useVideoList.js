import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideoList = (page) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            const database = getDatabase();
            const videoRef = ref(database, 'videos');
            // eslint-disable-next-line prefer-template
            const videoQuery = query(videoRef, orderByKey(), startAt('' + page), limitToFirst(8));

            try {
                setError(false);
                setLoading(true);
                // request firebase to get data
                const snapshot = await get(videoQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideos();
    }, [page]);

    return {
        videos,
        loading,
        error,
        hasMore
    };
};

export default useVideoList;
