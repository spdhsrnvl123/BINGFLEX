import Header from './components/header'
import 'antd/dist/antd.min.css';
import { PlayCircleOutlined } from '@ant-design/icons'
import Home from './components/home'
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 30px;
  padding: 1rem;
  font-weight: bold;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 100;
  .title {
  font-size: 2rem;
}
.container {
  margin-left: 23rem;
  display: flex;
  width: 100%;
  color: white;
}
.container li {
  font-size: 1rem;
  padding: 1em;
  margin-right: 1em;
  transition: 0.3s;
  cursor: pointer;
}
.container li:hover {
  text-decoration: underline;
}

.login {
  font-size: 1.2rem;
}
`

function App() {
    return (
        <div className="App">
            <Main>
                <PlayCircleOutlined style={{ fontSize: "2rem", marginRight: "0.3em" }} />
                <div className="title">BINGFLEX</div>
                <ul className="container">
                    <li>MAIN</li>
                    <li>SCHEDLUES</li>
                    <li>TICKETS</li>
                    <li>NEWS</li>
                    <li>CONTACT</li>
                </ul>
                <div className="login">SIGN OUT</div>
            </Main>
            <Header />
            <Home />
        </div>
  );
}

export default App;
