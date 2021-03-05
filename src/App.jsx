import React from 'react';
import List from './components/List'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      todos: [],
    }
  }

  handleChange = (e) => {
    this.setState ({ value : e.target.value })  //入力された文字
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.value === ''){
      alert('やることを入力してください'); //空文字の登録を不可にする
    } else {
      this.state.todos.push(this.state.value)  //todosにvalueを追加
    this.setState({  //setState()内でstateの値を変更
      todos: this.state.todos,
      value: '',  //フォームに入力されている文字を空にする
    })
    }
  }

  handleRemove = (i) => {   //引数でiを受け取る
    this.state.todos.splice(i,1)  //i番目の要素を削除する
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return(
      <div>
        <h1>Todoリスト作成</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.value}/><input type="submit" value="保存"/>
        </form>
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;