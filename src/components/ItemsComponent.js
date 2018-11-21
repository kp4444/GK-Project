import React from 'react'
const ItemsComponent=({tasks, done, action, addTask, inputRef, authenticated})=> {
			let lis = []
			let mark = done === false ? '\u2713' : 'x';
      for(let i in tasks){
        if(tasks[i].completed === done){
          lis.push(<li key={i}>{tasks[i].task}
          	<span onClick={ ()=> action(i) }>{mark}</span></li>)
        }
      }
    if(!authenticated){ return null }
    return (
      <div>

        {done
          ? (<ul className="items"> {lis} </ul>)
          : (
          	<div>
	            <form  onSubmit={addTask}>
				 				<input ref={inputRef} type="text" />
				 			</form>
				 			<ul className="items"> {lis} </ul>
			 			</div>
          )
        }
      </div>
    );
}
export default ItemsComponent;
