class App extends React.Component {
    render() {
        return(
            <div>
                <Friend 
                    name="Elton"
                    Hobbies={['Piano', 'Singing', 'Dancing']}   
                />
                <Friend 
                    name="John"
                    Hobbies={['Singing', 'Guitar']}   
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));