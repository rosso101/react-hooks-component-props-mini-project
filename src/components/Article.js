import React from 'react'

function Article({
    title,
    date = "January 1, 1970",
    minutes,
    preview
}) {

    const calculateEmojis = (minutes) => {
        const emojis = [];

        if (minutes < 30) {
            const coffeeCups = Math.ceil(minutes / 5);
            for (let i = 0; i < coffeeCups; i++) {
            emojis.push('☕️');
            }
        } else {
            const bentoBoxes = Math.ceil(minutes / 10);
            for (let i = 0; i < bentoBoxes; i++) {
            emojis.push('🍱');
            }
        }

        return emojis;
        };

    return (
    <article>
        <h3>{title}</h3>
        <div id='small'>
            <small>{date}</small>
            <small>
                {calculateEmojis(minutes).map((emoji, index) => (
                <span key={index}>{emoji}</span>
                ))}
                {` ${minutes} min read`}
            </small>
        </div>
        <p>{preview}</p>
    </article>
    )
}

export default Article;
