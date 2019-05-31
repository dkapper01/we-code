import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ProfileGrid = ({ gridItems }) => (
  <React.Fragment>
    {gridItems.map(item => (
      <Wrapper key={item.text}>
        <div
          style={{
            width: "210px",
            display: "block"
          }}
        >
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <p>
          {item.text}
        </p>
      </Wrapper>
    ))}
  </React.Fragment>
);

const Wrapper = styled.div`
  width: 210px;
  background: cadetblue;
  align-items: center;
  margin: 0;
  /* display: flex; */
  /* flex-wrap: wrap;  */
`;

ProfileGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default ProfileGrid;
