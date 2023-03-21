function GenerateRandomEmoji(){
    const emoji = ['🍎', '🥝', '🍌' ]
    return emoji[Math.floor(Math.random() * emoji.length)]
}

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Slot Machines!</h1>
        <Slot_Machine 
            emoji1= {GenerateRandomEmoji()}
            emoji2 = {GenerateRandomEmoji()}
            emoji3 ={GenerateRandomEmoji()} />
    </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));