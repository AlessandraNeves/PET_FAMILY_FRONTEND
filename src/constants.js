export const LOGIN_CLIENT_ID = '688476484599-sfust0n3cm3js51k5dbilutfksh4qpu9.apps.googleusercontent.com'

export const GRAPHQL_API = `http://localhost:8000/graphql`

export const GRAPHQL_GET_PET_QUERY = 
`query {
    animals: allPets{
        id
        name
        birthday
        domain
        breed
        weight
        microchip
    }
}`