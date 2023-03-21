function getNum() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  class NumPicker extends React.Component {
    render() {
      const num = getNum()
      let msg;
      if(num === 7){
          msg = 
              <div>
                  <h2>Lucky Daaawwg!</h2>
                  <img src="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></img>
              </div>
      } else {
          msg = <p>Nice Try... You mind trying again?</p>
      }
  
      return (
        <div>
          <h1>Your number is: {num}</h1>
          {msg}
        </div>
      );
    }
  }