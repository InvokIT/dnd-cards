import { connect } from 'react-redux';
import Toolbar from "./Toolbar";
import { importFile, exportFile } from "./actions/storage";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onImportChanged: (e) => {
      const file = e.target.files[0];
      if (file) {
        dispatch(importFile(file));
      }
      e.target.form.reset();
    },
    onExportClicked: (e) => dispatch(exportFile())
  };
};

const ToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;