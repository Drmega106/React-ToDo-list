import React from "react";



function Task(props) {
    return <>
        <div className="task">
            <div className="taskname">
               <span className="tasknum">{props.num}</span> {props.taskname}
            </div>
            <div className="taskdes">
                {props.taskdes}
            </div>
            <div className= {props.done? "show done" : "hide"}><div>Done</div><span onClick={() => props.notdone(props.idx)}>Not Done</span></div>
            <div className="deletebtn" onClick={() => props.deletetask(props.idx)}>Delete</div>
            <div className="editbtn" onClick={() => props.edittask(props.idx)}>Edit</div>
            <div className="donebtn" onClick={() => props.donetask(props.idx)}>Done</div>
    </div>
    </>

};

export default Task;