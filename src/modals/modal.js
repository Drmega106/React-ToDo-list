import { useEffect, useState } from "react";


function Modal(props) {
    let [title, settitle] = useState('');
    let [desc, setdesc] = useState('');
 
    let taskinfo ={
            name : title,
            des : desc,
            done : false 
        }

    let setinputs = () => {
        settitle("");
        setdesc("")
    }

    useEffect (
        setinputs, [props.show]
    )
    return <>
     <div id="modal" className={props.show ? "show" : "hide"}>
        <div className="overlay" >
        </div>
        <div className="modal">
               <form onSubmit={(e) => e.preventDefault()}>
                <div className="close" onClick={props.close}>x</div >
               <label htmlFor="title" id="titlel">Title:</label>
                <input required type="Text" placeholder="Task title" 
                id="title" name="title"
                 value= {title}
                 onChange={(event) => settitle(event.target.value)}
                 ></input>
                <label htmlFor="des" id="desl"
                >Description:</label>
                <textarea type="Text" placeholder="Task description" 
                id="des"
                value = {desc}
                onChange = {(e) => setdesc(e.target.value)}></textarea>
                <button type="submit" className="savebtn" onClick={ () => input.current.value !== "" || undefined ? props.addtask(taskinfo) : false }>Save</button>
                <button type="reset" className="resetbtn" onClick={setinputs}>Reset</button>
               </form>
        </div>
        </div>
    </>
};


export default Modal;
