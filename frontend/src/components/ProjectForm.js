import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        console.log("props", this.props.users)
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
        let users =[]
        if (!event.target.selectedOptions) {
            this.setState({"users": users})
            return;
        }
        for(let i = 0; i < event.target.selectedOptions.length; i++) {
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
                        <input type="text" name="name" placeholder="Name"
                               value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group">

                        <label htmlFor="">Users</label>
                        <select name="users" multiple onChange={(event) => this.handleUsersChange(event)}>
                            {this.props.users.map((item) => <option value={item.id}>{item.firstName}</option>)}
                        </select>>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Repository</label>
                        <input type="url" name="repository" placeholder="repository"
                               value={this.state.repository} onChange={(event) => this.handleChange(event)}/>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProjectForm