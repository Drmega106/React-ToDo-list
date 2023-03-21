import { useState , useEffect, useRef } from "react";


function Editmodal(props) {
    let [title, settitle] = useState('');
    let [desc, setdesc] = useState('');
 
    let taskinfo ={
            name : title,
            des : desc,
            done : false
        }

    let setinputs = () => {
        settitle('');
        setdesc('')
    }

    useEffect (
        setinputs, [props.show]
    )
    let input = useRef()
    return <>
     <div id="modal" className={props.show ? "show" : "hide"}>
        <div className="overlay" >
        </div>
        <div className="modal">
               <form onSubmit={(event) => event.preventDefault()} >
                 <div className="close" onClick={props.close}>x</div >
                <label htmlFor="edittitle" id="edittitlelb">title:</label>
                 <input type="Text" placeholder="Task title" 
                id="edittitle" name="edittitle" ref={input}
                 value={title} required
                 onChange={(event) => settitle(event.target.value)}
                 ></input>
                <label htmlFor="editdes" id="deslb"
                >Description:</label>
                <textarea required type="Text" placeholder="Task description" 
                id="editdes"
                value = {desc}
                onChange = {(e) => setdesc(e.target.value)}></textarea>
                <button type="submit" className="savebtn" onClick= { () => input.current.value !== "" || undefined ? props.editthetask(taskinfo) : false }>Save</button>
                <button type="reset" className="resetbtn" onClick={setinputs}>Reset</button>
               </form >
        </div>
        </div>
    </>
};


export default Editmodal;