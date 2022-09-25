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


class App extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            "users": [],
            "projects": [],
            "todo": [],
            "projectDetail": [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data.results
                this.setState({
                    "users": users
                })
            }).catch(error => console.log(error))


        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const projects = response.data.results
                console.log(response.data)
                this.setState({
                    "projects": projects
                })
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todo = response.data.results
                console.log(response.data)
                this.setState({
                    "todo": todo
                })
            }).catch(error => console.log(error))

    }

    render() {
        return (
            <BrowserRouter className="flex-container">
                <div className="flex-container">
                    <Navbar/>
                    <Routes>
                        <Route index='/' element={<UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                        {/*<Route index='/' element={<ProjectList projects={this.state.projects}/>}/>*/}
                        <Route exact path='/project_detail/:projectId' element={<ProjectDetail projects_detail={this.state.projects_detail}/>}/>
                        <Route exact path='/todo' element={<TodoList todo={this.state.todo}/>}/>
                        <Route path='*' element={<NotFound404/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
