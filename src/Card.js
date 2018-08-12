import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import './Card.css';

const preventDefault = (e) => e.preventDefault();

const Card = ({
    name = "",
    school = "",
    subschool = "",
    descriptors = "",
    level = "",
    components = "",
    materials = "",
    range = "",
    duration = "",
    description = "",
    sourceName = "",
    sourcePage = "",
    onAttributeChanged
}) => {
    return (
        <form className={classNames("card", `card-school-${school}`)} onSubmit={preventDefault}>
            <section className={"card--name"}>
                <input placeholder="Name" type="text" name="name" value={name} onChange={onAttributeChanged} />
            </section>
            <section className={"card--school"}>
                <input placeholder="School" type="text" name="school" value={school} onChange={onAttributeChanged} />
            </section>
            <section className={"card--subschool"}>
                <input placeholder="Subschool" type="text" name="subschool" value={subschool} onChange={onAttributeChanged} />
            </section>
            <section className={"card--descriptors"}>
                <input placeholder="Descriptors" type="text" name="descriptors" value={descriptors} onChange={onAttributeChanged} />
            </section>
            <section className={"card--range"}>
                <input placeholder="Range" type="text" name="range" value={range} onChange={onAttributeChanged} />
            </section>
            <section className={"card--duration"}>
                <input placeholder="Duration" type="text" name="duration" value={duration} onChange={onAttributeChanged} />
            </section>
            <section className={"card--description"}>
                <textarea placeholder="Description" name="description" value={description} onChange={onAttributeChanged} />
            </section>
            <section className={"card--level"}>
                <input placeholder="Level" type="text" name="level" value={level} onChange={onAttributeChanged} />
            </section>
            <section className={"card--components"}>
                <textarea placeholder="Components" name="components" value={components} onChange={onAttributeChanged} />
            </section>
            <section className={"card--materials"}>
                <textarea placeholder="Materials" name="materials" value={materials} onChange={onAttributeChanged} />
            </section>
            <section className={"card--source"}>
                <input placeholder="Source name" type="text" name="sourceName" className={"card--source-name"} value={sourceName} />
                <input placeholder="Source page" type="text" name="sourcePage" className={"card--source-page"} value={sourcePage} />
            </section>
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
    sourceName: PropTypes.string,
    sourcePage: PropTypes.string,
    onAttributeChanged: PropTypes.func.isRequired
};

export default Card;
