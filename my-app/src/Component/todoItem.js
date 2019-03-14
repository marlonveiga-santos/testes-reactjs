import React, {Component} from 'react';
import './todoItem.css';

class ToDoItem extends Component {

    handleCheck = e => {
        if (this.myCheck.className === "ToDoItem-Check") {            
                this.myCheck.setAttribute("class","ToDoItem-Checked");
                this.myItem.setAttribute("class","ToDoItem-Text-Finished");
        }

        else if (this.myCheck.className === "ToDoItem-Checked"){
                this.myCheck.setAttribute("class","ToDoItem-Check");
                this.myItem.setAttribute("class","ToDoItem-Text");
        }
    };

    render() {
       
        return (
            <div className="ToDoItem">
                <p ref={item => {this.myItem = item;}} className="ToDoItem-Text">{this.props.item}</p>
                <button ref={check => {this.myCheck = check;}} className="ToDoItem-Check"
                     onClick={this.handleCheck}>&#x2713;
                </button>
                <button className="ToDoItem-Delete"
                     onClick={this.props.deleteItem}> &#x2212;
                </button>
            </div>
        );
    }
}

export default ToDoItem;