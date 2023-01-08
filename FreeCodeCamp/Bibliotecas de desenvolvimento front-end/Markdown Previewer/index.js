marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();


const defaultMarkdown = `# Greetings Earthlings! 
## Welcome to my markdown previewer

[freeCodeCamp](https://www.freecodecamp.org/)

Front End Libraries Projects
- Random Quote Machine
- Markdown Previewer
- Drum Machine
- Javascript Calculator
- Pomodoro Clock

this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> example of blockquote

Inline \`code\`

\`\`\`
// code block

function sum (x, y) {
  return x + y;
}
\`\`\`

![Random Animals](https://loremflickr.com/320/240)
`;

function App(){
    const [text, setText] = React.useState(defaultMarkdown);
    
    return(
        <div className="text-center px-4">
            <h1 className="p-4">My markdown previewe</h1>
            <textarea className="textarea" name="text" id="editor" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <h2 className="mt-3">Output</h2>
            <Preview markdown={text}></Preview>
        </div>
    );
}

function Preview({markdown}){
    return(
        <div dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer}),}} id="preview"></div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));