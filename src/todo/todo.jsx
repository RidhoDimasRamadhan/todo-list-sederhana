import React, { useState } from 'react'
import "../todo/todo.css"


function todo() {

    const [kalimat, setKalimat] = useState(['nama aku ridho dimas', 'nama aku budi sudarsono']);
    const [newTask,setNewTask] = useState("");

    function handlletask(event){
        setNewTask(event.target.value);
    }

    function add() {

        if(newTask.trim() != ""){
            setKalimat(x => [...x, newTask]);
            setNewTask("");
        }

    }

    function hapus(index) {
        setKalimat(kalimat.filter((_, i) => i !== index));
    }

    function up(index){
        if(index>0){
            const up = [...kalimat];
            [up[index],up[index-1]]= [up[index-1],up[index]];
            setKalimat(up);

        }
    }
    function down(index){
        if(index< kalimat.length -1){
            const up = [...kalimat];
            [up[index],up[index+1]]= [up[index+1],up[index]];
            setKalimat(up);

        }
    }

    return (
        <div className="todo">
            <h1>TODO LIST</h1>
            <input type="text" id='list' value={newTask} onChange={handlletask}  placeholder="masukkan kalimat disini" />
            <button onClick={add}> ADD LIST</button>

            <ol>
                {kalimat.map((asal, index) =>
                    <li key={index} >
                        <div className="list">
                            {asal} 
                            <button onClick={()=>hapus(index)}>delete</button>
                            <button onClick={()=> up(index)}>UP</button>
                            <button onClick={()=> down(index)}>DOWN</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default todo