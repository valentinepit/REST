import './App.css';
import axios from 'axios'
import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./components/Users";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


class App extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            "users": []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState({
                    "users": users
                })
            }).catch(error => console.log(error))

    }

    render() {
        return (
            <div className="flex-container">
                <Navbar/>
                <UserList users={this.state.users}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
