import '../App.css';
import petMedicines from "../assets/json/petMedicines.json"

import PetMedicines from '../components/PetMedicines'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBar from "../components/SearchBar"

import { useState } from "react"

export default function Medicines() {

    const [medicineList, setMedicineList] = useState(petMedicines.medicines)  // eslint-disable-next-line

    return (
        <div >
            <div className="header-medicine">
                <div className="float-left"><Typography variant="h5">Medicamentos</Typography></div>
                <div className="float-right"><SearchBar placeholder="Pesquisar" data={petMedicines} /></div>
            </div>
            
            <div>
                <Box
                    display="flex" 
                    minWidth={1200} 
                    alignItems={"center"} 
                    justifyContent={"center"}
                    padding={5}
                >
                    <PetMedicines medicines={medicineList} view={'all'}/>
                </Box>
            </div>
        </div>
    )

}