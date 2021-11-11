import React, { Component } from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

// 1.初始化mobx容器仓库
class Store {
    @observable count = 0
    @action.bound increment = () => {
        this.count++
    }
}
// 2.在组件中使用mobx容器状态
@observer
class App extends React.Component {
    render() {
        const { store } = this.props
        console.log(store)
        return (
            <div>
                <h1>App component</h1>
                <p>{store.count}</p>
                <p>
                    <button onClick={store.increment}>Increment</button>
                </p>
            </div>
        );
    }
}

// 3.在组件中发起action修改容器状态
class Index extends Component {
    render() {
        return (
            <div>
                <App store={new Store()}/>
            </div>
        );
    }
}

export default Index;