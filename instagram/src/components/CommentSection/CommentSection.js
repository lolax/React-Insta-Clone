import React from 'react';
import styles from './CommentSection.css'
import { EventEmitter } from '../../events.js'

const CommentSection = ({data, index}) => (
    <div className='comments-container'>
        {data.comments.map(comment => {
            return <div className='comment'>
                        <span className='user'>{comment.username}&nbsp;</span>
                        {comment.text}
                    </div>
        })}
        <div className='timestamp'>{data.timestamp}</div>
        <div className='add-comment'>
            <form id={index} onSubmit={(event) => EventEmitter.dispatch('addComment', event)}>
                <input 
                    className='comment-input' 
                    type='text' 
                    placeholder='Add a comment...' 
                    onChange={(event) => EventEmitter.dispatch('handleChange', event)}
                />
            </form>
            <img className='elipses' src={require('../../icons/insta_dots.png')} alt='more options button'/>
        </div>
    </div>
)

export default CommentSection;