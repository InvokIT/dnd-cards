import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import style from './Card.css';

const preventDefault = (e) => e.preventDefault();

const Card = ({
    name,
    school,
    subschool,
    descriptors,
    level,
    components,
    materials,
    range,
    duration,
    description,
    bookRef,
    onAttributeChanged
}) => {
    return (
        <form className={classNames(style.card, style[`school-${school}`])} onSubmit={preventDefault}>
            <div className={style.content}>
                <header className={style.name}>
                    <input type="text" name="name" value={name} onChange={onAttributeChanged} />
                </header>
                <section className={style.school}>
                    <input type="text" name="school" value={school} onChange={onAttributeChanged} />
                </section>
                <section className={style.subschool}>
                    <input type="text" name="subschool" value={subschool} onChange={onAttributeChanged} />
                </section>
                <section className={style.descriptors}>
                    <input type="text" name="descriptors" value={descriptors} onChange={onAttributeChanged} />
                </section>
                <section className={style.range}>
                    <input type="text" name="range" value={range} onChange={onAttributeChanged} />
                </section>
                <section className={style.duration}>
                    <input type="text" name="duration" value={duration} onChange={onAttributeChanged} />
                </section>
                <section className={style.description}>
                    <textarea name="description" onChange={onAttributeChanged}>{description}</textarea>
                </section>
                <section className={style.level}>
                    <input type="text" name="level" value={level} onChange={onAttributeChanged} />
                </section>
                <section className={style.components}>
                    <textarea name="components" onChange={onAttributeChanged}>{components}</textarea>
                </section>
                <section className={style.materials}>
                    <textarea name="materials" onChange={onAttributeChanged}>{materials}</textarea>
                </section>
                <section className={style.bookRef}>
                    <div className={style.bookRefName}>{bookRef.name}</div>
                    <div className={style.bookRefPage}>{bookRef.page}</div>
                </section>
            </div>
        </form>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    school: PropTypes.string,
    subschool: PropTypes.string,
    descriptors: PropTypes.string,
    level: PropTypes.string,
    components: PropTypes.string,
    materials: PropTypes.string,
    range: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    bookRef: PropTypes.shape({
        name: PropTypes.string,
        page: PropTypes.string
    }),
    onPropertyChange: PropTypes.func.isRequired
};

export default Card;