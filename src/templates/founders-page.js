import React from "react";
import PropTypes from "prop-types";
// import Layout from "../components/Layout";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid; 
  /* height: 100vh; */
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  /* padding: 10%;  */
`
const One = styled.div`
  background-color: lavender;
  /* grid-column: 1/2; 
  grid-row: 1/2;  */
`
const Two = styled.div`
 background-color: lawngreen;
`
const Three = styled.div`
  background-color: lightcoral;
  /* grid-column: 1/2;  */
`
const Header = styled.h1` 
`


export const FoundersPageTemplate = ({ title }) => {
  return (
    <Wrapper>
      <One>
      <Header>
      {title}
      </Header>
      </One>
      <Two>
        <h1>Two</h1>
      </Two>
      <Three>
        <h1>Three</h1>
      </Three>
    </Wrapper>
  );
};

FoundersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const FounderPage = ({ data }) => {
  const { markdownRemark: founders } = data
  return (
    <div>
      <FoundersPageTemplate title={founders.frontmatter.title} />
    </div>
  );
};

export default FounderPage;

export const foundersPageQuery = graphql`
  query FounderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
` 