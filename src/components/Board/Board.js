import React, { Component } from 'react'
import initialData from '../Data/initialData'

import Box from '../Board/Box/Box'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: initialData
        }
    }

    findIndex = (boxes, id) => {
        let result = -1;
        boxes.forEach((box, index) => {
            if (box.id === id) {
                result = index;
            }
        })
        return result;
    }

    swapBox = (dragId, dropId) => {
        let { boxes } = this.state
        const fromIndex = this.findIndex(boxes, dragId)
        const toIndex = this.findIndex(boxes, dropId)
        const fromBox = boxes[fromIndex]
        const toBox = boxes[toIndex]
        boxes.splice(fromIndex, 1, toBox)
        boxes.splice(toIndex, 1, fromBox)
        this.setState({
            boxes: boxes
        })
    }

    handleDrop = e => {
        const drag_id = e.dataTransfer.getData('drag_id')
        e.preventDefault()
        const drop_id = e.target.id
        this.swapBox(drag_id, drop_id)
        const box = document.getElementById(drag_id)
        box.style.visibility = 'visible'
    }

    render() {
        return (
            <div
                className="board"
                onDrop={this.handleDrop}
            >
                {this.state.boxes.map(box => {
                    return (
                        <Box
                            key={box.id}
                            box={box}
                            draggable="true"
                        />)
                })}
            </div>
        );
    }
}

export default Board;