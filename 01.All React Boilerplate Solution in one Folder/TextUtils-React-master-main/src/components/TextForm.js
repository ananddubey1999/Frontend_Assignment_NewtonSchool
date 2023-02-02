import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
     
    const handleTitleClick = () => {
        // console.log("Uppercase function was clicked " + text)
        props.showAlert(" Converted to Title Case","success")
        const words = text.trim().split(" ")
        const newwords = []
        for (let word of words) {
          newwords.push(word[0].toUpperCase() + word.slice(1,))
        }
    
        setText(newwords.join(" "))
       
      }
    
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea placeholder='Type or paste your content here' className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
             id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-warning mx-1 my-1' onClick={handleTitleClick}>Covert to Titlecase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
// in this section first i creat div for text area from bootstrap in wich i use placeholder then take another div for container and also use 
// h1 for heading(in which i use props)
// in the div-container i use some button (in which i use onclick={handleLoClick} for making changes.)



{/*                       <---------UseState Explaination--------->


export default function TextForm(props) {   // yaha pe hum onclick fun ki help se text ko upperCase me change kr ke setText me update kr rahe--5
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }/'
    
    const handleOnChange = (event)=>{   // ye onchange fun hai jisme(event.target.value) current text ko (jo empty hai) new jo bhi hum 
        setText(event.target.value)    // textArea me likhenge usee add kr de raha hai (yahi onChange fun hai).
    }-----3

 const [text, setText] = useState(''); // yaha pe hum useState fun ko use kr ke D structuring kr rahe hai jaha pe text(jo abhi empty hai)
                                    // pr ye onChange fun me update ho raha hai (setText ke andr)------2


// ye textArea ka div hai jisme text as a value pass huaa hai-----1
        <div className="mb-3">
            <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>


<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button> 

 ye apn ek onclick button banaye jiska fun hai handleUpClick----4


   <-------------------- 2nd div explaination -------------------->


    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>

            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>



        word =  word ke liye hum {text.split(" ").length} use krenge aur baaki usme condition laga denge ki starting me 0 ho.

       characters = characters ke liye hum {text.length}  use krenge aur baaki usme condition laga denge ki starting me 0 ho.

   Minutes read = Minutes read ke liye hum {0.008 * text.split(" ").length} use krenge aur baaki usme condition laga denge ki starting me 0 ho.
     yaha pe 0.008 each(single) word ki reading time hai


     Preview = iske liye hum {text.length} use krenge aur baaki usme condition laga denge ki starting me 0 ho.


*/}