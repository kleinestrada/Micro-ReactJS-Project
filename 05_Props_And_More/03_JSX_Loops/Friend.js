class Friend extends React.Component {
    render(){
        const {name, Hobbies} = this.props;
        const lis = Hobbies.map(x => <li>{x}</li>)
        return(
            <div>
                <h1>{name}</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}