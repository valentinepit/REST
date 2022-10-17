import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', user: '', project: ''}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleUsersChange(event) {
        let user = ''
        if (!event.target.selectedOptions) {
            this.setState({"user": user})
            return;
        }
        user = (event.target.selectedOptions.item(0).value)

        this.setState({"user": user})

    }

    handleProjectChange(event) {
        let project = ''
        if (!event.target.selectedOptions) {
            this.setState({"project": project})
            return;
        }
        project = (event.target.selectedOptions.item(0).value)
        this.setState({"project": project})

    }

    handleSubmit(event) {
        this.props.create_todo(this.state.text, this.state.user, this.state.project)
        event.preventDefault()
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                     <div className="form-group">
                        <label htmlFor="">Text</label>
                        <input type="text" name="text" className="form-control" value={this.state.text}
                               onChange={(event) => this.handleChange(event)}/>
                    < /div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">User</label>
                        <select name="users" className="form-control"
                                onChange={(event) => this.handleUsersChange(event)}>
                            {this.props.users.map((item) => <option value={item.id}>{item.firstName}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Projects</label>
                        <select name="projects" className="form-control"
                                onChange={(event) => this.handleProjectChange(event)}>
                            {this.props.projects.map((item) => <option value={item.id}>{item.name}</option>)}
                        </select>
                    < /div>
                    <button type="submit" className="btn btn-primary" value="Save">Save</button>
                </form>

            </div>
        )
    }
}

export default TodoForm