import React from 'react';
import "./Toolbar.css";

const Toolbar = ({
  onImportChanged,
  onExportClicked
}) => (
  <section className="toolbar">
    <form>
      <label>
        <input onChange={onImportChanged} type="file" accept="application/json" style={{display:"none"}} />
        <span>Import...</span>
      </label>
    </form>
    <span onClick={onExportClicked}>Export...</span>
  </section>
);

export default Toolbar;
