import './App.css';
import Header from './components/header'
import 'antd/dist/antd.min.css';
import { PlayCircleOutlined } from '@ant-design/icons'
import Home from './components/home'

function App() {
    return (
        <div className="App">
            <div className="header">
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
            </div>
            <Header />
            <Home />
        </div>
  );
}

export default App;
