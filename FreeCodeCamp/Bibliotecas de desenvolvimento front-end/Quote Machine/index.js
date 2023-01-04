function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [ramdomQuotes, setRamdomQuotes] = React.useState("");
    const [color, setColor] = React.useState("#73a");

    React.useEffect(() => {
      async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length)
        setRamdomQuotes(data[randIndex]);
      }
      fetchData();
    }, [])

    const getNewQuote = () => {
        const colors = [
            "#000",
            "#fff",
            "#16a",
            "#99b"
        ]

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRamdomQuotes(quotes[randIndex]);
        setColor(colors[randColorIndex])
    }
    

    return(
        <div style={{backgroundColor:color, minHeight: "100vh"}}>
            <div className="container pt-5" style={{backgroundColor: color}}>
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div>
                        <div className="card-body">
                            {ramdomQuotes ? (<><h5 className="card-title">-{ramdomQuotes.author || "No author"}</h5><p className="card-text">&quot;{ramdomQuotes.text}&quot;</p></>) : (<h2>Loading</h2>)}
                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">New quotes</button>
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + ramdomQuotes.text + '" ' + ramdomQuotes.author)} target="_blank" className="btn btn-warning"><i class="fa fa-twitter"></i></a>
                                <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quotes&tags=freecodecamp&text" + encodeURIComponent('"' + ramdomQuotes.text + '" ' + ramdomQuotes.author)} className="btn btn-danger"><i className="fa fa-tumblr"></i></a>                            
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
} 

ReactDOM.render(<App/>, document.getElementById("app"))
