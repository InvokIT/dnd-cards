import React from 'react';
import classNames from "classnames";
import style from './Card.css';

const BoundInput = ({name, value, onChange}) => (
    <input type="text" value={value} onChange={onChange.bind(name)} />
);

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
                <section className={style.description}>
                    <textarea onChange={onPropertyChange.bind("description")}>{description}</textarea>
                </section>
            </div>
        </article>
    );
};

export default Card;