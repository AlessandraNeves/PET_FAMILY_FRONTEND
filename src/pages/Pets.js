import "../assets/css/pet.css"
//import pets from "../assets/json/pets.json"
import SearchBar from "../components/SearchBar"
import PetCard from "../components/PetCard"
import Switch from "@mui/material/Switch"
import { useState } from "react"

export default function Pets() {

  //const [petList, setList] = useState(pets.animals)  // eslint-disable-next-line

  const [petList, setPetList] = useState([])

  //const GRAPHQL_API = 'http://localhost:8000/graphql'

  // const GRAPHQL_GET_PET_QUERY = `
  //     {
  //       allPets{
  //         id,
  //         name
  //       }
  //     }`

      fetch('http://localhost:8000/graphql/', {
        method: 'POST' ,
        header: {
          "accept": "application/json", 
          "Content-type": "application/json"
        },
        body: JSON.stringify({ 
          query: `query {
            allPets{
              id,
              name
            }
          }`
        })
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        setPetList(data)
      })

  // const consumirAPI = async (gqlEndpoint, gqlQuery, gqlVariables = {}) => {
    // const response = await fetch(gqlEndpoint, {
    //   method: "POST" ,
    //   header: {
    //     "ContentType": "application/text/json",
    //     "Accept": "application/text/json",
    //   },
    //   body: JSON.stringify({ query: gqlQuery, variables: gqlVariables})
    // })
  // }

  // useEffect(() => {
  //   consumirAPI(GRAPHQL_API, GRAPHQL_GET_PET_QUERY)
  //     .then(res => setPetList(res.data.animals))
  //     .catch(error => console.log(error))
  // })
 

   return (
     <div className="content-pet">
         <div className="header-pet">
           <div className="header-pet-btn">
             <button className="btn-pet-add">+ ADICIONAR PET</button>
           </div>
           <div className="header-pet-switch">
               <Switch />
               <span className="header-pet-switch">Exibir inativos</span>
           </div>
           <div className="header-pet-search">
             <SearchBar placeholder="Pesquisar" />
           </div>
         </div>
         <hr className="separator"/>

         <section className="main-pets">
             {petList.map((p, index) => (
                 <PetCard key={index} pet={p}/>
                            ))}
         </section>

         <footer></footer>
    </div>
   )
}