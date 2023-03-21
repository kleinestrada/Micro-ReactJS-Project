function getMood(){
  const moods = ['Happy', 'Sad', 'Angry', 'Thankful', 'Relief', 'Stressed' ];
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
        {/* <h1>The cute puppy</h1>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg" /> */}
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
