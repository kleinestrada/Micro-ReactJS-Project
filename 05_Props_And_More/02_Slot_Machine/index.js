function GenerateRandomEmoji(){
    const emoji = ['🍎', '🥝', '🍌' ]
    return emoji[Math.floor(Math.random() * emoji.length)]
}

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Slot Machines!</h1>
          <h2>Rules:</h2>
          <Slot_Machine 
            emoji1= "🍎"
            emoji2 = "🥝"
            emoji3 ="🥝" />
        <Slot_Machine 
            emoji1= "🍌"
            emoji2 = "🍌"
            emoji3 ="🍌" />
        <h2>Actual Slot Machine</h2>
        <Slot_Machine 
            emoji1= {GenerateRandomEmoji()}
            emoji2 = {GenerateRandomEmoji()}
            emoji3 ={GenerateRandomEmoji()} />
    </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));