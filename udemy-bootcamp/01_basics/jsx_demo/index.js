class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1622271329044-0c1887e33959?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80" />
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))