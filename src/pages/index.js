import * as React from "react";
import { Helmet } from "react-helmet";

import Cursor from "../components/Cursor";
import "../assets/fonts/fonts.css";
import "../styles/main.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <Cursor />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jorav | Software Engineer</title>
      </Helmet>
      <section>
        <h1>hi, i am jorav, a software engineer based in jalandhar.</h1>
        <h2>
          this is just a holding page right now. when i get some time, i’m going
          to make a really fun and fancy personal site.
        </h2>
      </section>
    </main>
  );
};

export default IndexPage;
