import React from 'react';
import classNames from "classnames";
import style from './Card.css';

const Card = ({
    name,
    schoolsAndDescriptors,
    level,
    components,
    materials,
    range,
    duration,
    description,
    bookRef,
    onPropertyChange
}) => {
    const school = /^[^\s]*/.exec(schoolsAndDescriptors)[0];
    
    return (
        <article className={classNames(style.card, style[`school-${school}`])}>
            <div className={style.content}>
                <header className={style.name}>
                    <input type="text" value={name} onChange={onPropertyChange.bind("name")} />
                </header>
                <section className={style.school}>
                    <input type="text" value={schoolsAndDescriptors} onChange={onPropertyChange.bind("schoolsAndDescriptors")} />
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
                <section className={style.level}>
                    <input type="text" value={level} onChange={onPropertyChange.bind("level")} />
                </section>
                <section className={style.components}>
                    <textarea onChange={onPropertyChange.bind("components")}>{components}</textarea>
                </section>
                <section className={style.materials}>
                    <textarea onChange={onPropertyChange.bind("materials")}>{materials}</textarea>
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