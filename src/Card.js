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
    const backgroundImage = cardBackgroundImages[stringHash(id) % cardBackgroundImages.length];

    return (
        <form className={classNames("card", `card-school-${school.toLowerCase()}`)} onSubmit={preventDefault}>
            <img className="card--background" src={backgroundImage} alt="" />
            <div className="card--school-color" />
            <div className="card--content">
                <section className={"card--name"}>
                    <input title="Name" required placeholder="Name" type="text" name="name" value={name} onChange={onAttributeChanged} />
                </section>
                <section className={"card--school"}>
                    <input title="School" required placeholder="School" type="text" name="school" list="spell-schools" value={school} onChange={onAttributeChanged} />
                </section>
                <section className={"card--save"}>
                    <input title="Saves" required placeholder="Save" type="text" name="save" list="spell-saves" value={save} onChange={onAttributeChanged} />
                </section>
                <section className={"card--subschool"}>
                    <input title="Subschool" required placeholder="Subschool" type="text" name="subschool" list={`spell-subschools-${school.toLowerCase()}`} value={subschool} onChange={onAttributeChanged} />
                </section>
                <section className={"card--descriptors"}>
                    <input title="Descriptors" required placeholder="Descriptors" type="text" name="descriptors" value={descriptors} onChange={onAttributeChanged} />
                </section>
                <section className={"card--range"}>
                    <input title="Range" required placeholder="Range" type="text" name="range" value={range} onChange={onAttributeChanged} />
                </section>
                <section className={"card--duration"}>
                    <input title="Duration" required placeholder="Duration" type="text" name="duration" value={duration} onChange={onAttributeChanged} />
                </section>
                <section className={"card--description"}>
                    <textarea title="Description" required placeholder="Description" name="description" value={description} onChange={onAttributeChanged} />
                </section>
                <section className={"card--level"}>
                    <input title="Level" required placeholder="Level" type="text" name="level" value={level} onChange={onAttributeChanged} />
                </section>
                <section className={"card--components"}>
                    <textarea title="Components" required placeholder="Components" name="components" value={components} onChange={onAttributeChanged} />
                </section>
                <section className={"card--materials"}>
                    <textarea title="Materials" required placeholder="Materials" name="materials" value={materials} onChange={onAttributeChanged} />
                </section>
                <section className={"card--source"}>
                    <input title="Source name" required placeholder="Source name" type="text" name="sourceName" className={"card--source-name"} value={sourceName} onChange={onAttributeChanged} />
                    <input title="Source page" required placeholder="Source page" type="text" name="sourcePage" className={"card--source-page"} value={sourcePage} onChange={onAttributeChanged} />
                </section>
            </div>
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
