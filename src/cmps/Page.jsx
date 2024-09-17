import React from "react"

export const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    )
})