import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import stringHash from "string-hash";
import './Card.css';
import { cardBackgroundImages } from "./resources";
// import AutoScalingInput from "./AutoScalingInput";

const preventDefault = (e) => e.preventDefault();

const Card = ({
    id,
    name = "",
    school = "",
    subschool = "",
    descriptors = "",
    level = "",
    components = "",
    materials = "",
    range = "",
    duration = "",
    save = "",
    description = "",
    sourceName = "",
    sourcePage = "",
    onAttributeChanged
}) => {
    const cardStyle = {
        backgroundImage: `url(${cardBackgroundImages[stringHash(id) % cardBackgroundImages.length]})`
    };

    return (
        <form style={cardStyle} className={classNames("card", `card-school-${school.toLowerCase()}`)} onSubmit={preventDefault}>
            <section className={"card--name"}>
                <input required placeholder="Name" type="text" name="name" value={name} onChange={onAttributeChanged} />
            </section>
            <section className={"card--school"}>
                <input required placeholder="School" type="text" name="school" list="spell-schools" value={school} onChange={onAttributeChanged} />
            </section>
            <section className={"card--save"}>
                <input required placeholder="Save" type="text" name="save" list="spell-saves" value={save} onChange={onAttributeChanged} />
            </section>
            <section className={"card--subschool"}>
                <input required placeholder="Subschool" type="text" name="subschool" list={`spell-subschools-${school.toLowerCase()}`} value={subschool} onChange={onAttributeChanged} />
            </section>
            <section className={"card--descriptors"}>
                <input required placeholder="Descriptors" type="text" name="descriptors" value={descriptors} onChange={onAttributeChanged} />
            </section>
            <section className={"card--range"}>
                <input required placeholder="Range" type="text" name="range" value={range} onChange={onAttributeChanged} />
            </section>
            <section className={"card--duration"}>
                <input required placeholder="Duration" type="text" name="duration" value={duration} onChange={onAttributeChanged} />
            </section>
            <section className={"card--description"}>
                <textarea required placeholder="Description" name="description" value={description} onChange={onAttributeChanged} />
            </section>
            <section className={"card--level"}>
                <input required placeholder="Level" type="text" name="level" value={level} onChange={onAttributeChanged} />
            </section>
            <section className={"card--components"}>
                <textarea required placeholder="Components" name="components" value={components} onChange={onAttributeChanged} />
            </section>
            <section className={"card--materials"}>
                <textarea required placeholder="Materials" name="materials" value={materials} onChange={onAttributeChanged} />
            </section>
            <section className={"card--source"}>
                <input required placeholder="Source name" type="text" name="sourceName" className={"card--source-name"} value={sourceName} />
                <input required placeholder="Source page" type="text" name="sourcePage" className={"card--source-page"} value={sourcePage} />
            </section>
        </form>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    school: PropTypes.string,
    subschool: PropTypes.string,
    descriptors: PropTypes.string,
    level: PropTypes.string,
    components: PropTypes.string,
    materials: PropTypes.string,
    range: PropTypes.string,
    duration: PropTypes.string,
    save: PropTypes.string,
    description: PropTypes.string,
    sourceName: PropTypes.string,
    sourcePage: PropTypes.string,
    onAttributeChanged: PropTypes.func.isRequired
};

export default Card;
