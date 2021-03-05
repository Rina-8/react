import React from 'react';

class List extends React.Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
  }


  remove(elem) {
    let value = elem.target.querySelector('li')
    this.props.handleRemove(value);
  }

  render(){

    let todos = this.props.todos.map((elem, i) => {
      return <li key={i}>
                {elem}
                <button>完了</button>
                <button onClick={this.remove}>削除</button>
              </li>
    });

    return(
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default List;