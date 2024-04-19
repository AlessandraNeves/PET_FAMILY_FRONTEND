import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar ({placeholder, data}) {
    return (
        <div>
            <div>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>   
                    <TextField sx={{ color: '#3D6B42', p:0, m:0, width: '180px'}} id="input-with-sx" label="Pesquisar por nome" variant="standard" />
                    <SearchIcon sx={{ color: '#3D6B42', mr: 1, my: 0.5}} />
                </Box>
            </div>
            <div className="result"></div>
        </div>
    )
}