import React from "react";
import PropTypes from 'prop-types'
import { FoundersPageTemplate } from "../../templates/founders-page";

const FoundersPagePreview = ({ entry, widgetFor }) => (
  <FoundersPageTemplate 
   title={entry.getIn(['data', 'title'])}
  // content={widgetFor('body')}
    />
);

FoundersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}


export default FoundersPagePreview;
