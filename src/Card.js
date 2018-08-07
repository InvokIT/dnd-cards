import React from 'react';
import classNames from "classnames";
import style from './Card.css';

const Card = ({
    name,
    school,
    subschool,
    descriptors = [],
    level,
    components = [],
    materials = [],
    range,
    duration,
    description,
    bookRef,
    onPropertyChange
}) => {
    
    return (
        <article className={classNames(style.card, style[`school-${school}`])}>
            <div className={style.content}>
                <header className={style.name}>
                    <input type="text" value={name} onChange={onPropertyChange.bind("name")} />
                </header>
                <section className={style.school}>
                    <input type="text" value={school} onChange={onPropertyChange.bind("school")} />
                </section>
                <section className={style.range}>
                    <input type="text" value={range} onChange={onPropertyChange.bind("range")} />
                </section>
                <section className={style.duration}>
                    <input type="text" value={duration} onChange={onPropertyChange.bind("duration")} />
                </section>
                <section className={style.description}>
                    <textarea onChange={onPropertyChange.bind("description")}>{description}</textarea>
                </section>
                <section className={style.bookRef}>
                    <div className={style.bookRefName}>{bookRef.name}</div>
                    <div className={style.bookRefPage}>{bookRef.page}</div>
                </section>
            </div>
        </article>
    );
};

export default Card;