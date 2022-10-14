import styled from "styled-components";
import FirstScene from "components/domain/FirstScene";
import ScollDown from "components/base/ScrollDown"
import getData from "lib/api/api"
import { useQuery } from "@tanstack/react-query"
import Slide from "components/base/Slide";

const Section = styled.div`
    height: 100vh;
    /* width: 100%; */
    background-color:black;
    overflow-x: hidden;
    /* border-top: 10px dotted white; */
`

const Home = ()=>{
    const { data, isLoading } = useQuery(["movie","nowPlaying"],getData)
    console.log(data,isLoading)

    return(
        <>
            <Section>
                <FirstScene />
                <Slide />
                <ScollDown />
            </Section>
        </>
    )
}

export default Home;