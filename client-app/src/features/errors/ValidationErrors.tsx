import React from 'react'
import { Message } from 'semantic-ui-react'


interface Props{
    errors:any
}

export default function ValidationErrors({errors}:Props) {
    return (
        <Message error>
            {errors &&
            <Message.List>
                {errors.map((error:string,i:number)=>(
                    <Message.Item key={i}>
                        {error}
                    </Message.Item>
                ))}
                </Message.List>}
        </Message>
    )
}
