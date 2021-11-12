import React, { Component } from 'react';
import { observable, action, makeObservable, autorun, computed, configure, runInAction, when, reaction } from 'mobx'
import { observer } from 'mobx-react'

//强制只能使用action改变observable数据
configure({
    enforceActions: 'observed'
})
// 1.初始化mobx容器仓库
class Store {
    constructor() {
        makeObservable(this)  //mobx6+版本需要加这句数据才能被监测
    }
    @observable count = 0
    @observable foo = 'bar'
    @action.bound increment (){
        this.count++
    }
    @observable price = 10
    @observable num = 5
    @computed get totalPrice() {
        console.log(this.num)
        return this.price * this.num
    }
    //修改数据
    @action.bound change = () => {
        this.count = 10
        this.foo = 'hello'
        this.foo = 'world'
    }

    @action.bound asyncChange () {
        setTimeout( () => {
            //1.定义action函数
            //this.changeCount()
            //2.直接调用action函数
            // action('changeFoo', () => {
            //     this.foo = 'hello'
            // })()
            //3.runInAction
            // runInAction( () => {
            //     this.count = 60
            // })
        },100)
    }

    @action.bound changeCount (value = 20) {
        this.count = value
    }
}
const store = new Store()
//autorun第一次就自动执行，监测数据每次改变都会执行该方法
autorun(() => {
    console.log('autorun: ', store.count, store.foo, store.num)
})
//when,满足自定义逻辑时执行一次，只执行一次
when(
    () => {
        return store.count > 100
    },
    () => {
        console.log('when => ', store.count)
    }
)
//reaction,只有当被观测的数据改变时才执行，每次触发条件都会执行
reaction(
    () => {
        return store.count
    },
    (data, reaction) => {
        console.log('reaction=>', data)
        //手动停止reaction的监听
        //console.log(reaction)
        //reaction.dispose()
    }
)
store.changeCount(300)
store.changeCount(500)

//store.change()
//const change = store.change
//change()
// runInAction( () => {
//     store.count = 15
//     store.foo = 'aaa'
// })
//store.asyncChange()

// 2.在组件中使用mobx容器状态
@observer
class App extends React.Component {
    render() {
        const { store } = this.props
        return (
            <div>
                <h1>App component</h1>
                <p>{store.count}</p>
                <p>
                    <button onClick={store.increment}>Increment</button>
                </p>
                <p>Total:{store.totalPrice}</p>
                <p>Total:{store.totalPrice}</p>
                <p>Total:{store.totalPrice}</p>
                <p>Total:{store.totalPrice}</p>
                <p>Total:{store.totalPrice}</p>
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