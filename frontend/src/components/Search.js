import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: '',
            project_id: '',
            is_active: false,
            search_path: '',
        };
    }

    handleSearchChange(event) {
        let project = ''
        if (!event.target.value) {
            this.setState({"project": ""})
            return;
        }
        project = event.target.value
        this.setState({"project": project})

    }

    handleSubmit(event) {
        let filter_project = this.props.projects.filter((project) => project.name.includes(this.state.project))
        this.setState({"project_id": String(filter_project[0].id)})
        this.setState({"is_active": true})
        this.setState({"search_path": "projects/" + this.state.project_id})
        console.log(this.state.search_path)
        event.preventDefault()
    }

    render() {
        return (

            <div>
                {
                    this.state.is_active && this.setState({"is_active": false})
                }

                <form onSubmit={(event) => this.handleSubmit(event)} className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search"
                           aria-label="Search" name="project_name"
                           onChange={(event) => this.handleSearchChange(event)}/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                {
                    this.state.is_active && <Navigate to={this.state.search_path}/>
                }
            </div>
        )
    }
}

export default SearchBox