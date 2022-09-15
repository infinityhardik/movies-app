import * as React from 'react';
import { InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@mui/material';
import defaultGenres from "../../assets/genre"



export default function GenreSelect({ setFilterObject, filterObject }) {
    const [genres, setGenres] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setGenres(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        // Logging the Input of User for Debugging
        // console.log(event.target.value);

        setFilterObject({ ...filterObject, genres: event.target.value })
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: 240, maxWidth: 240 }}>
                <InputLabel id="genreSearchLabel">Genres</InputLabel>
                <Select
                    labelId="genreSearchLabel"
                    id="genreSearch"
                    multiple
                    value={genres}
                    onChange={handleChange}
                    // input={<OutlinedInput label="" />}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {defaultGenres.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            <Checkbox checked={genres.indexOf(item.name) > -1} />
                            <ListItemText primary={item.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
