class Hello extends React.Component{
    render(){
        let energy = "!".repeat(this.props.energy)
        return(
        <div>
            <p>Hello {this.props.to} this is from {this.props.from}{energy}</p>
            <img src={this.props.img} />
        </div>
        )
    }
}