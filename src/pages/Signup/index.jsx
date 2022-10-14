import styled from "styled-components";
import LoginBackground from "assets/image/LoginBackground.jpeg"
import motion from "assets/image/motion.gif"


const Container = styled.div`
    height: 100vh;
`;

const Content = styled.div`
    background-image: url(${LoginBackground});
    background-size: cover;
    background-repeat: no-repeat;
    /* width: 80%; */
    margin: 0 auto;
    height:100vh;
    /* border-radius: 500px; */
    box-shadow: 0px 2px 7px 6px;
`;

const Form = styled.div`
    /* background-color: rgba(0,0,0,0.9); */
    background-image: url(${motion});
    background-repeat: no-repeat;
    background-size: 105%;
    background-position: center;
    border-radius: 10px;
    position: absolute;
    top:50%;
    left:50%;
    width: 700px;
    height: 600px;    
    transform: translate(-50%,-50%);
    box-shadow: 0px 0px 10px 7px rgba(0,0,0,0.3);
`;

const Log = styled.h1`
    color:rgb(255,255,255);
    font-size:45px;
    margin-top: 50px;
    margin-left: 67px;
`;

const Input = styled.input`
    width: 310px;
    height: 35px;
    font-size:18px;
    margin-bottom: 14px;
    margin-top: 4px;
    border: 0;
    border-radius:5px;
`
const Label = styled.label`
    color : white;
    font-size: 20px;
    font-weight: bold;
`

const Button = styled.button`
    width:140px;
    height: 50px;
    margin-top: 30px;
    color:white;
    background-color: #ff3838;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 3px black;
    cursor: pointer;
    border:0.5px solid rgba(0,0,0,0.6);
    font-weight: bold;
`
//React-hook-form없이 State값을 이용하여 회원가입 form구현하기.

const SignUp = ()=>{

    return(
        <Container>
            <Content>
                <Form>
                    <Log>SignUp</Log>
                    <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                        <Label>Name</Label>
                        <Input placeholder="Input your name, please." />
                        <Label>Email</Label>
                        <Input placeholder="Please enter your e-mail." />
                        <Label>Password</Label>
                        <Input placeholder="Please enter a password." />
                        <Label>Confirm password</Label>
                        <Input placeholder="Please enter a password." />
                        <Button>Submit</Button>
                    </form>
                </Form>
            </Content>
        </Container>
    )
}

export default SignUp;
