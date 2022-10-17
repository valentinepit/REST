import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', users: [], repository: ''}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleUsersChange(event) {
        let users = []
        if (!event.target.selectedOptions) {
            this.setState({"users": users})
            return;
        }
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push((event.target.selectedOptions.item(i).value))
        }
        this.setState({"users": users})

    }

    handleSubmit(event) {
        this.props.create_project(this.state.name, this.state.users, this.state.repository)
        event.preventDefault()
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" className="form-control" value={this.state.name}
                               onChange={(event) => this.handleChange(event)}/>
                    < /div>
                    <div className="form-group">
                        <label>Users</label>
                        <select name="users" multiple onChange={(event) => this.handleUsersChange(event)}
                                className="form-control"
                                id="exampleFormControlSelect1">
                            {this.props.users.map((item) => <option value={item.id}>{item.firstName}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Repository</label>
                        <input type="text" name="repository" className="form-control" value={this.state.repository}
                               onChange={(event) => this.handleChange(event)}/>
                    < /div>
                    <button type="submit" className="btn btn-primary" value="Save">Save</button>
                </form>

            </div>
        )
    }
}

export default ProjectForm