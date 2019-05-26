import React from "react";
import PropTypes from "prop-types";
// import Layout from "../components/Layout";
import styled from "styled-components";
import Profiles from "../components/Profiles";

const Wrapper = styled.div`
  display: grid;
  /* height: 100vh; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* padding: 10%;  */
`;
const One = styled.div`
  background-color: lavender;
  /* grid-column: 1/2; 
  grid-row: 1/2;  */
`;
const Two = styled.div`
  background-color: lawngreen;
`;
const Three = styled.div`
  background-color: lightcoral;
  /* grid-column: 1/2;  */
`;
const Header = styled.h1``;

export const FoundersPageTemplate = ({ title, image, intro }) => {
  return (
    <Wrapper>
      <One>
        <Header>{title}</Header>
      </One>
      <Two>
        <img
          src={`${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }`}
        />
        <h1>Two</h1>
      </Two>
      <Three>
        <h1>Three</h1>
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
        image={founders.frontmatter.image}
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
          heading
          description
          blurbs {
            text
            image {
              id
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
