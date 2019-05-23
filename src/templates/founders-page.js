import React from "react";
import PropTypes from 'prop-types'
import Layout from "../components/Layout";

export const FoundersPageTemplate = ({ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content

  return (
    <div>
      
    </div>
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           {/* <PageContent className="content" content={content} /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

FoundersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FounderPage = () => {
  return (
    <Layout>
      <h1>This is the founders page</h1>
    </Layout>
  );
};

export default FounderPage;
