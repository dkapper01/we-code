import React from "react";
import PropTypes from 'prop-types'
import { FoundersPageTemplate } from "../../templates/founders-page";

const FoundersPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <FoundersPageTemplate 
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    intro={{ blurbs }}
   // content={widgetFor('body')}
     />
  )
};

FoundersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}


export default FoundersPagePreview;
