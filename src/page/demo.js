import React from "react";

const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange} />
);

class Demo extends React.Component {
    state = {
        text: '',
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <MyInput value={this.state.text} onChange={this.onTextChange} />
        );
    }
    onTextReset = () => {
        this.setState({ text: '' });
    }
}