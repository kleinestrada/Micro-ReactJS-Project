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
        let msg;
        if(areEqual(emoji1, emoji2, emoji3)){
            msg = 'Lucky! Congrats'
        }else{
            msg = 'Sorry. Try Again'
        }
        return(
        <div>
            <p>{emoji1} {emoji2} {emoji3}</p>
            <p>{msg}</p>
        </div>
        )
    }
}