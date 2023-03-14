import React from 'react'
import Questions from './Questions'

const Questionlist = ({ questionList }) => {
    return (

        <>
            {questionList.map((question) => {
                return (
                    <Questions question={question} key={question._id} />

                )

            })}
        </>


    )
}

export default Questionlist
