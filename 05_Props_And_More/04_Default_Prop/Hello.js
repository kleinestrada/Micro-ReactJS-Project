class Hello extends React.Component{
    static defaultProps = {
        from: 'Anonymous',
        energy: 1
    }
    render(){
        let energy = "!".repeat(this.props.energy)
        return(
        <div>
            <p>Hello {this.props.to} this is from {this.props.from}{energy}</p>
        </div>
        )
    }
}