import styled from "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch />
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}

            />
            
        </div>
    </FormStyle>
  )
}


const FormStyle = styled.form `

@media (min-width: 45rem) {
   margin: 0rem 0rem;
}
@media (min-width: 70rem) {
    margin: 0rem 10rem;
}
@media (min-width: 90rem) {
    margin: 0rem 20rem;
}
    
    div {
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 93%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

`