function areEqual(){
    var len = arguments.length;
    for (var i = 1; i< len; i++){
       if (arguments[i] === null || arguments[i] !== arguments[i-1])
          return false;
    }
    return true;
 }

class Slot_Machine extends React.Component{
    render(){
        const {emoji1,emoji2,emoji3} = this.props;
        const colors = {fontSize: '50px', backgroundColor: 'purple'}
        const textcolor = [{backgroundColor: 'green', color: 'white'}, {backgroundColor:'red' , color: 'white'}]
        let txtstype
        let msg;
        if(areEqual(emoji1, emoji2, emoji3)){
            msg = 'Lucky! Congrats'
            txtstype = textcolor[0]
        }else{
            msg = 'Sorry. Try Again'
            txtstype = textcolor[1]
        }
        return(
        <div className="Machine">
            <p style={colors}>{emoji1} {emoji2} {emoji3}</p>
            <p style={txtstype}>{msg}</p>
        </div>
        )
    }
}