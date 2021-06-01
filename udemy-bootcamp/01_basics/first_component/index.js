class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello There!</h1>
                <p>Hi! This is my first component!</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))