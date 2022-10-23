import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { UserOutlined,UserAddOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { useState } from "react";
import Logo from "components/base/Logo";

const TopCotainer =styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    color: white;
    font-weight: bold;
    position: fixed;
    /* top:2%; */
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.4);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.443);
`

const Content = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red;*/
    li{
        font-size: 22px;
        padding: 20px;
        &:hover{
            transform: scale(1.2);
            transition:0.3s;
        }
    }
`

const Title = styled.div`
    font-size: 35px;
    display: flex;
    align-items: center;
`

const Item = styled.li`
    position: relative;
`

const Circle = styled(motion.div)`
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: red;
    border-radius: 7px;
    left: 0;
    right: 0;
    bottom: 8px;
    margin: 0 auto;
`

const Search = styled.span`
    color : white;
    display: flex;
    align-items: center;
    position: relative;
`

const Input = styled(motion.input)`
    transform-origin: right center;
    position: absolute;
    left: -210px;
    width: 200px;
    padding: 8px 5px;
    height: 23px;
    padding-left: 40px;
    font-size: 16px;
    z-index: -1;
    color:white;
    background-color: transparent;
    border: 1px solid white;
    :focus{
        outline: none;
    }
`

const Header = ()=>{
    const homeMatch = useMatch("/");
    const tvshowMatch = useMatch("/tvshows");
    const applicationMatch = useMatch("/application");
    const mapMatch = useMatch("/map");
    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearch = ()=> setSearchOpen((prev) => !prev)

    return(
        <TopCotainer>
            <Container>
                <Title><Logo /><Link to={"/"}>INGFLEX</Link></Title>
                <Content>
                    <Item>
                        <Link to="/">HOME{homeMatch && <Circle layoutId="circle" />}</Link>
                    </Item>
                    <Item>
                        <Link to="/tvshows">TV SHOWS{tvshowMatch && <Circle layoutId="circle" />}</Link>
                    </Item>
                    <Item>
                        <a href="https://spdhsrnvl123.github.io/BINGFLEX-APP/" target="_blank">APP{applicationMatch && <Circle layoutId="circle" />}</a>
                    </Item>
                    <Item>
                        <Link to="/map">MAP{mapMatch && <Circle layoutId="circle" />}</Link>
                    </Item>
                </Content>
                <Content>
                <Search>
                    <motion.svg
                        style={{cursor:"pointer"}}
                        onClick={toggleSearch}
                        animate={{ x:searchOpen ? -200 : 0 }}
                        transition= {{ type : "linear"}}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                        ></path>
                    </motion.svg>
                    <Input 
                        transition={{type:"linear"}}
                        initial= {{scaleX:0}}
                        animate = {{ scaleX:searchOpen ? 1 : 0}}
                        placeholder="Search for movie or tv show..."
                    />
                </Search>
                    <Link to={`/login`} style={{fontSize:"20px",marginRight:"17px",marginLeft:"17px"}}><UserOutlined style={{fontSize :"25px"}} /></Link>
                    <Link to={`/signup`} style={{fontSize:"20px", marginRight:"14px"}}><UserAddOutlined style={{fontSize :"25px"}} /></Link>
                </Content>
            </Container>
        </TopCotainer>
    )
}

export default Header;
