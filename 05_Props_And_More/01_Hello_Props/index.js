class App extends React.Component {
    render() {
      return (
        <div>
          <Hello 
            to="Ringo" 
            from= "Paul" 
            energy={10}
            img="https://www.thesprucepets.com/thmb/3-kxAtZmAchP9y7PVFH2h1dKxqY=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
          />
    </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  