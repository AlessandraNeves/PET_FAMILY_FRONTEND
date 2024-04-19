import * as React from 'react';
import '../assets/css/pet-details.css';

import {useLocation } from "react-router-dom"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
//import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import PetsIcon from '@mui/icons-material/PetsOutlined';
import VaccinesIcon from '@mui/icons-material/VaccinesOutlined';
import MedicationIcon from '@mui/icons-material/MedicationOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PetMedicines from '../components/PetMedicines'
import PetVaccines from '../components/PetVaccines'
import PetHistory from '../components/PetHistory'

export default function PetDetails() {

  let { state } = useLocation() ;

  const [expanded, setExpanded] = React.useState('medicine-panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='content-pet-details'>
      <div className='space-1'>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <PetsIcon fontSize="large" color='secondary'/>
              </IconButton>
            }
            title={state.pet.name}
            subheader={state.pet.birthday}
          />
          {/* <CardMedia
            component="img"
            height="194"
            image={`${state.pet.photo}`}
            alt="Pet"
          /> */}
          <CardContent>
            <Typography variant="subtitle1"  gutterBottom component="div">
              {`${state.pet.domain} - ${state.pet.breed} - ${state.pet.gender} `}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <b>Peso:</b> {`${state.pet.weight} Kg`}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <b>Microchip:</b> {state.pet.microchip}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className='space-2'>
        {/* PRESCRIÇÃO DE MEDICAMENTOS */}
        <Accordion 
          expanded={expanded==='medicine-panel'}
          onChange={handleChange('medicine-panel')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="medicine-content"
            id="medicine-header"
          >
            <MedicationIcon />
            <Typography fontSize={18} fontWeight={400} paddingLeft={1}>Medicamento(s) prescrito(s)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PetMedicines medicines={state.pet.medicines} view={'pet'}/>
          </AccordionDetails>
        </Accordion>
        {/* PRESCRIÇÃO DE VACINAS */}
        <Accordion 
          expanded={expanded==='vaccine-panel'}
          onChange={handleChange('vaccine-panel')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="vaccine-content"
            id="vaccine-header"
          >
            <VaccinesIcon />
            <Typography fontSize={18} fontWeight={400} paddingLeft={1}>Vacina(s) prescita(s)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PetVaccines vaccines={state.pet.vaccines}/>
          </AccordionDetails>
        </Accordion>
        {/* HISTÓRICO DE SAÚDE */}
        <Accordion 
          expanded={expanded==='history-panel'}
          onChange={handleChange('history-panel')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="disease-content"
            id="disease-header"
          >
            <HistoryIcon />
            <Typography fontSize={18} fontWeight={400} paddingLeft={1}>Histórico de Saúde</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PetHistory history={state.pet.history}/>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}