import React, { Fragment, useState } from "react";
import Editmodal from "../modals/Editmodal";
import Modal from "../modals/modal";
import Footer from "./Footer"
import Task from "./Task";





function App() {
    let [showmodal, setshowmodal] = useState(false);
    let [showEditmodal, setshowEditmodal] = useState(false);
    let [idx, setidx] = useState('')
    let index = idx;
    let [tasks, settasks] = useState(localStorage.tasks? JSON.parse(localStorage.tasks) : [])

    function addtolocal(tasks) {
        localStorage.tasks = JSON.stringify(tasks)
    }

    function close() {
       return setshowmodal(!showmodal)
    }
    function closeEditmodal() {
        return setshowEditmodal(!showEditmodal);
     }
    function addtask(taskinfo) {
        settasks([...tasks, taskinfo]);
        close();
    }
   
    function deletetask(clickedidx) {
        settasks(tasks.filter((e, idx) => idx !== clickedidx) )
    }

    function edittask(clickedidx) {
        setshowEditmodal(!showEditmodal);
        setidx(clickedidx);
    }
    function editthetask(taskinfo) {
       settasks(tasks.map((e,id) => {
            if(id === idx) {
                return e = taskinfo
            }
            return e
       }))
        setshowEditmodal(!showEditmodal);
    }

    function donetask(idx) {
        return settasks(tasks.map((e,id) => {
            if (idx === id) {
                return e = {...e, done : true};
            }
            return e;
        }))
    }

    function notdone(idx) {
        return settasks(tasks.map((e,id) => {
            if (idx === id) {
                return e = {...e, done : false};
            }
            return e;
        }))
    }

    addtolocal(tasks);


    return <Fragment>
        <Modal show={showmodal} close={close} addtask={addtask}/>
        <Editmodal show={showEditmodal} close={closeEditmodal} 
        editthetask={editthetask}/>
        <div className="container">
            <div className="taskcount">Tasks: <span>{tasks.length}</span></div>
            <div className="add" onClick={() => setshowmodal(!showmodal)}>
                    Add task
            </div>
            <div className="tasks">
            {tasks.map((e,idx) => {
                 return <Task key={idx} idx={idx} taskname={e.name} 
                 taskdes={e.des} 
                 num={idx + 1} 
                 deletetask={deletetask}
                 edittask = {edittask}
                 donetask = {donetask}
                 done= {e.done}
                 notdone = {notdone}/>
            })}
            </div>
        </div>
        <Footer />
    </Fragment>
};


export default App;