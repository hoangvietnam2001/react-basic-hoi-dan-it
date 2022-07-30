import React from "react";

class FormComponent extends React.Component {

    state = {
        fName: "",
        lName: ""
    };
    handleOnChangeFirstName = (event) => {
        this.setState({
            fName: event.target.value
        })
    };
    handleOnChangeLastName = (e) => {
        this.setState({
            lName: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data input :", this.state);
    }
    render() {
        console.log("re-render:",this.state);
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.fName}
                        onChange={(e) => { this.handleOnChangeFirstName(e); }}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lName}
                        onChange={(e) => { this.handleOnChangeLastName(e); }}
                    />
                    <br />
                    <h1>Xin Chao Anh Em</h1>
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(e) => {this.handleSubmit(e)} } />
                </form>
            </>
        )
    }
}

export default FormComponent;