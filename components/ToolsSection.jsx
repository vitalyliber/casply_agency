import React from "react";
import Grid from "./Grid";

const ToolsSection = () => {
  return (
    <Grid
      list={[
        {
          title: "Web",
          desc: "We use React for creating the best user experience.",
          link: "https://reactjs.org",
          blank: true,
        },
        {
          title: "Mobile",
          desc: "We prefer React Native for a speed of development.",
          link: "https://reactnative.dev",
          blank: true,
        },
        {
          title: "API",
          desc: "We choose Ruby on Rails for fast growing startups.",
          link: "http://rubyonrails.org",
          blank: true,
        },
        {
          title: "DevOps",
          desc: "We build, run, and operate applications apps with Dokku.",
          link: "http://dokku.viewdocs.io/dokku/getting-started/installation",
          blank: true,
        },
      ]}
    />
  );
};

export default ToolsSection;
