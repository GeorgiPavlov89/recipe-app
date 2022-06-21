import { useEffect, useState } from "react"
import  styled from 'styled-components'
import { useParams} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Recipe() {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("instructions")
    let params = useParams()

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    }
    useEffect(() => {
        fetchDetails();
    }, [params.name])

  return (
    <DetailsWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.tittle} />
        </div>
        <Info>
            
            <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab("instructions")}
            >
            Instructions
            </Button>
            <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab("ingredients")}
            >
            Ingredients
            </Button>
            
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
            )}
            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            
        </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    img {
        width:100%;
    }
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h3 {
        font-size:1rem;
    }
    @media (min-width: 45rem) {
        
        .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    div {
        width: 100%;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size:1.2rem ;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
}
`


const Button = styled.button`
    cursor: pointer;
    padding: 1rem;
    color: #313131;
    background-color: white;
    border: 1px solid black;
    font-weight: 600;
    width: 35%;
    height: 15%;
    margin: 1rem;
@media (min-width: 45rem){
    margin-right: 2rem;
    
}
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    @media (min-width: 45rem){
        margin-left: 10rem;
        display: block;
    }
    
`