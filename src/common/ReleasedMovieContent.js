import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './ReleasedMovieContent.css'

const ReleasedMovieContent = ({ data }) => {

    function releaseDate(date) {
        let releaseDate = new Date(date);
        // console.log(releaseDate);
        return releaseDate.toDateString();
    }

    return (
        <ImageList sx={{
            height: 350
        }} cols={4}>
            {data.map((item) => (
                <ImageListItem key={item.id} className='imageItem'>
                    <img
                        src={item.poster_url}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={`Release Date : ${releaseDate(item.release_date)}`}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ReleasedMovieContent