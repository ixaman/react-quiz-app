import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

const Videos = () => {
    const [page, setPage] = useState(1);
    const { videos, loading, error, hasMore } = useVideoList(page);
    return (
        <>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => setPage(page + 8)}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <div style={{ textAlign: 'center', color: 'white' }}>
                            You have seen it all !
                        </div>
                    }
                >
                    {videos.map((video) =>
                        video.noq > 0 ? (
                            <Link
                                to={`/quiz/${video.youtubeID}`}
                                state={{ videoTitle: video.title }}
                                key={video.youtubeID}
                            >
                                <Video title={video.title} noq={video.noq} id={video.youtubeID} />
                            </Link>
                        ) : (
                            <Video
                                title={video.title}
                                noq={video.noq}
                                key={video.youtubeID}
                                id={video.youtubeID}
                            />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No data found !</div>}
            {error && <div>There was an error !</div>}
            {loading && <div>Loading...</div>}
        </>
    );
};

export default Videos;
