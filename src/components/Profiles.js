import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProfileGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.text} >
        <PreviewCompatibleImage imageInfo={item} />
        <p>{item.text}</p>
      </div>
    ))}
  </div>
)

ProfileGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ProfileGrid