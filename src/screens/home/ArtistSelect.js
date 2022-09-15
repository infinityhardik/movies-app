import * as React from 'react';
import { InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@mui/material';
import defaultArtists from "../../assets/artists"



export default function GenreSelect({ setFilterObject, filterObject }) {
    const [artists, setArtists] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setArtists(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        // Logging the Input of User for Debugging
        // console.log(event.target.value);

        setFilterObject({ ...filterObject, artists: event.target.value })
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: 240, maxWidth: 240 }}>
                <InputLabel id="artistSearchLabel">Artists</InputLabel>
                <Select
                    labelId="artistSearchLabel"
                    id="artistSearch"
                    multiple
                    value={artists}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {defaultArtists.map((item) => (
                        <MenuItem key={item.id} value={item.first_name + " " + item.last_name}>
                            <Checkbox checked={artists.indexOf(item.first_name + " " + item.last_name) > -1} />
                            <ListItemText primary={item.first_name + " " + item.last_name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
