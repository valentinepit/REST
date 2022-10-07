import './App.css';
import axios from 'axios'
import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./components/Users";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectList from "./components/Projects";
import React from "react";
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import NotFound404 from "./components/NotFound404";
import TodoList from "./components/Todo";
import ProjectDetail from "./components/ProjectDetail";
import TodoFilter from "./components/Todo_detail";
import LoginForm from "./components/auth";
import Cookies from "universal-cookie";


class App extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            "users": [],
            "projects": [],
            "todo": [],
            "projectDetail": [],
            "token": "",
            "auth": {"username": "", "is_auth": false}
        }
    }

    logout() {
        console.log("HHHHHHHHHHHHHHHH")
        this.set_token("")
        this.setState({"users": []})
        this.setState({"projects": []})
        this.setState({"todo": []})
        this.setState({"auth.username": ""})
        this.setState({'auth': {username: "PIT", is_auth: false}})


    }

    set_headers() {
        let headers = {
            'Content-Type': "application/json"
        }
        if (this.is_auth()) {
            headers["Authorization"] = "Token " + this.state.token
        }
        return headers
    }

    is_auth() {
        return !!this.state.token
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({"token": token}, () => this.load_data())
    }

    get_token_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({"token": token}, () => this.load_data())
    }

    get_token(username, password) {
        const data = {username: username, password: password}
        axios.post("http://127.0.0.1:8000/api-token/", data)
            .then(response => {
                this.set_token(response.data['token'])
                this.setState({auth: {username: username, is_auth: true}})
            })
            .catch(error => {
                alert('Wrong Login or password')
                // this.setState({auth: {username: username, is_auth: true}})
            });
    }

    load_data() {
        const headers = this.set_headers();
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                const users = response.data.results
                this.setState({
                    "users": users
                })
            }).catch(error => console.log(error))


        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(response => {
                const projects = response.data.results
                console.log(response.data)
                this.setState({
                    "projects": projects
                })
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                const todo = response.data.results
                console.log(response.data)
                this.setState({
                    "todo": todo
                })
            }).catch(error => console.log(error))

    }

    componentDidMount() {
        this.get_token_storage()
    }

    render() {
        return (
            <BrowserRouter className="flex-container">
                <div className="flex-container">
                    <Navbar auth={this.state.auth} logout={() => this.logout()}/>
                    {/*<Navbar/>*/}
                    <Routes>
                        <Route index='/' element={<UserList users={this.state.users}/>}/>
                        <Route exact path='/login' element={<LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Route exact path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/projects/:projectId'
                               element={<ProjectDetail projects={this.state.projects}/>}/>
                        <Route exact path='/todo' element={<TodoList todo={this.state.todo}/>}/>
                        <Route exact path='/todo/:todoId' element={<TodoFilter notes={this.state.todo}/>}/>
                        <Route path='*' element={<NotFound404/>}/>
                    </Routes>
                    <Footer projects={this.state.projects}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
