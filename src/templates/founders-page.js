import React from "react";
import PropTypes from "prop-types";
// import Layout from "../components/Layout";
import styled from "styled-components";
import ProfileGrid from "../components/ProfileGrid";

export const FoundersPageTemplate = ({ title, image, intro }) => {
  return (
    <Wrapper>
      <ProfileGrid gridItems={intro.blurbs} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 750px;
  margin: 0 auto 0 auto;
  height: auto;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

FoundersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  childImageSharp: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const FounderPage = ({ data }) => {
  const { markdownRemark: founders } = data;
  return (
    <div>
      <FoundersPageTemplate
        title={founders.frontmatter.title}
        // image={founders.frontmatter.image}
        intro={founders.frontmatter.intro}
      />
    </div>
  );
};

FounderPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default FounderPage;

export const foundersPageQuery = graphql`
  query FounderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 210, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        image {
          childImageSharp {
            fluid(maxWidth: 210, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
