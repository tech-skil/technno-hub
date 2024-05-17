import React from "react";
import { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const sty = {
    color: props.mode === 'dark' ? '#f6f1f1' : 'black',
    // backgroundColor: props.mode === 'dark' ? 'gray' : '#f6f1f1',
    // color:'light',
    // backgroundColor:'dark'
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
      props.showalert(
      "Converted to  UpperCase !","success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showalert(
      "Converted to LowerCase !","success");
  };

  const handleClearClick = () => {
    setText("");
    props.showalert("Cleared Text utils successfuly!","success");

  };


  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text:', err);
      });
      props.showalert("Copied successfuly!","success");
  };

  const handleRemoveWhiteSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showalert("Removed Extra spaces successfuly!","success");
  };

  const [isSpeaking, setIsSpeaking] = useState(false);
  let msg = new SpeechSynthesisUtterance(text);

  const handleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      msg.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(msg);
      setIsSpeaking(true);
    }

  };
   React.useEffect(() => {
  return () => {
    window.speechSynthesis.cancel();
  };
}, []);
  return (
    

    <div  style={{ color: props.mode === 'dark' ? 'white' : 'black'  }}>

      <h3>{props.heading}</h3>
      <div className="mb-3 ">
      <textarea
      value={text}
      // className={`form-control bg-${props.mode} `}
      className={`form-control ${
        props.mode === 'dark' ? 'propsbg' : ' white'
      }   `}
      id="exampleFormControlTextarea1"
      rows="8"
      onChange={handleOnChange}
      style={sty}
    />
      </div>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lower Case</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className={`btn btn-primary mx-1 my-2 ${copied ? 'copied' : ''}`} onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-1 my-2" onClick={handleRemoveWhiteSpace}>Remove White Space</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-1 my-2" onClick={handleSpeech}>{isSpeaking ? 'Stop Speech' : 'Start Speech'}</button>
        
      <div   >
        <h6 className="my-3">Words {text.split(/\s+/).filter((element) => element.length !== 0).length} and Characters {text.replace(/\s/g, '').length}</h6>
        <p>{0.088 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes to Read</p>
        <p>Text complexity {(text.replace(/\s+/g, '').length / 100) * 0.5}</p>
        <h1>Preview</h1>
        <div  >
          <p >{text.length > 0 ? text : "You can enter your text!"}</p>
        </div>
      </div>
    </div>
  );
};
