import React from 'react';
import PropTypes from "prop-types";
import stringHash from "string-hash";
import './Card.css';
import { cardBackgroundImages } from "./resources";
import castTimeIcon from "./resources/gear.svg";
import durationIcon from "./resources/hourglass.svg";
import rangeIcon from "./resources/reticle.svg";
import saveIcon from "./resources/shield.svg";
// import AutoScalingInput from "./AutoScalingInput";

const preventDefault = (e) => e.preventDefault();

const fitElement = (e) => {
    const el = e.target;
    const parent = el.parentElement;

    if (parent) {
        const pWidth = parent.offsetWidth;
        const eWidth = el.offsetWidth;
        const scale = Math.min(1, pWidth / eWidth);
        el.style.transform = `scale(${scale})`;
    }
};

const Card = ({
    id,
    name = "",
    school = "",
    castTime = "",
    level = "",
    components = "",
    range = "",
    duration = "",
    save = "",
    description = "",
    source = "",
    onAttributeChanged
}) => {
    const backgroundImage = cardBackgroundImages[stringHash(id) % cardBackgroundImages.length];

    return (
        <form school={(school && school.toLowerCase()) || null} save={save || null} className="card" onSubmit={preventDefault}>
            <img className="card--background" src={backgroundImage} alt="" />
            <div className="card--school-color" />
            <header>
                <section className="card--name">
                    <input title="Name" autocomplete="off" required placeholder="Name" type="text" name="name" value={name} onChange={onAttributeChanged} onBlur={fitElement} />
                </section>
                <section className="card--save-icon">
                </section>
            </header>
            <div className="card--content">
                <section className="card--school">
                    <input title="School" required placeholder="School" type="text" name="school" list="spell-schools" value={school} onChange={onAttributeChanged} />
                </section>
                <hr />
                <section className="card--casttime">
                    <div className="card--icon"><img src={castTimeIcon} alt="Casting time" /></div>
                    <input title="Casting time" required placeholder="Casting time" type="text" list="spell-casttimes" name="castTime" value={castTime} onChange={onAttributeChanged} />
                </section>
                <section className="card--range">
                    <div className="card--icon"><img src={rangeIcon} alt="Range" /></div>
                    <input title="Range" required placeholder="Range" type="text" name="range" list="spell-ranges" value={range} onChange={onAttributeChanged} />
                </section>
                <section className="card--duration">
                    <div className="card--icon"><img src={durationIcon} alt="Duration" /></div>
                    <input title="Duration" required placeholder="Duration" type="text" name="duration" value={duration} onChange={onAttributeChanged} />
                </section>
                <section className="card--save">
                    <div className="card--icon"><img src={saveIcon} alt="Save" /></div>
                    <input title="Saves" required placeholder="Save" type="text" name="save" list="spell-saves" value={save} onChange={onAttributeChanged} />
                </section>
                <hr />
                <section className="card--description">
                    <textarea title="Description" required placeholder="Description" name="description" value={description} onChange={onAttributeChanged} />
                </section>
                <section className="card--components">
                    <input type="text" title="Components" required placeholder="Components" name="components" value={components} onChange={onAttributeChanged} />
                </section>
                <hr />
                <footer>
                    <section className="card--source">
                        <input title="Source" required placeholder="Source" type="text" name="source" className="card--source-name" value={source} onChange={onAttributeChanged} />
                    </section>
                    <section className="card--level">
                        <label>
                            <span>Level&nbsp;</span>
                            <input title="Level" required placeholder="Level" type="text" name="level" value={level} onChange={onAttributeChanged} size="1" />
                        </label>
                    </section>
                </footer>
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
