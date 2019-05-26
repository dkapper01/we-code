import React from "react";
import PropTypes from "prop-types";
// import Layout from "../components/Layout";
import styled from "styled-components";
import Profiles from "../components/Profiles";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const One = styled.div`
  background-color: lavender;
  grid-column: 1/5; 
  grid-row: 1/2; 
`;

const Three = styled.div`
  background-color: lightcoral;
  grid-row: 2/2; 
  grid-column: 1/5; 
`;
const Header = styled.h1``;

export const FoundersPageTemplate = ({ title, image, intro }) => {
  return (
    <Wrapper>
      <One>
        <Header>{title}</Header>
      </One>
      <Three>
        <Profiles gridItems={intro.blurbs} />
      </Three>
    </Wrapper>
  );
};

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
      frontmatter: PropTypes.object,
    }),
  }),
}

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
