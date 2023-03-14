import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import TagsList from './TagsList'
import './tags.css'


const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: 'java-script',
        tagDesc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT....'
    }, {
        id: 2,
        tagName: 'python',
        tagDesc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax...'
    },
    {
        id: 3,
        tagName: 'java',
        tagDesc: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This tag is frequently used alongside other'
    }, {
        id: 4,
        tagName: 'php',
        tagDesc: 'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsofts .NET family of tools'
    }]
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'> Using the right tags makes it easier for others to find and answer your question.</p>

                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id} />

                        )
                        )

                    }
                </div>

            </div>

        </div>
    )
}

export default Tags
