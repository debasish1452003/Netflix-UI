import React from 'react'
import CardSlider from './CardSlider'

export default React.memo(function Slider({ movies, tv }) {
    const getMoviesFromRange = (from, to) => {
        return movies.slice(from, to);
    }
    return (
        <div>
            <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
            <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
            <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20, 30)} />
            <CardSlider title="Netflix Exclusive" data={getMoviesFromRange(30, 40)} />
            <CardSlider title="Action Moves" data={getMoviesFromRange(40, 50)} />
            <CardSlider title="Epic Movies" data={getMoviesFromRange(50, 60)} />

        </div>
    )
});
