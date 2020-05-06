import React from 'react'

const Box = (props) => {

    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('drag_id', target.id)
        setTimeout(() => {
            target.style.visibility = "hidden"
        }, 0)
    }

    const dragOver = e => {
        e.preventDefault()
    }

    return (
        <div
            className="box"
            id={props.box.id}
            style={{ backgroundColor: props.box.color }}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.box.name}
        </div>
    );

}

export default Box;