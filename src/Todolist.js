import React, { Component } from "react"
import Todoitem from './Todoitem'

class Todolist extends Component {

    render() {
        let {items} = this.props
        return (
            <div>
                <ul>
                    {
                        items.map(todo => <li><Todoitem /></li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Todolist