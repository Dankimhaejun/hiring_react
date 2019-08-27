import React from 'react'

export default function Home({history}) {
    console.log(history)
    return (
        <div>
            <div>투두들어가는버튼
                <input type="button" value="투두버튼크게만들어줘" onClick={() => {history.push('/users')}}/>
            </div>
            <h1>게시판들어가는버튼
                <input type="button" value="게시판버튼크게만들어줘"/>
            </h1>
        </div>
    )
}
