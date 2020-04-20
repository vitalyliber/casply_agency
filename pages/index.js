import Head from "next/head";
import OpenSourceSection from "../components/OpenSourceSection";
import ToolsSection from "../components/ToolsSection";

const description = "Application development Casply Agency";

const Home = () => (
  <div className="container">
    <Head>
      <title>Casply Agency</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container">
      <h1 className="title text-center mt-4">
        <span className="agencyName">Casply</span> Agency
      </h1>
      <p className="text-muted text-center mb-5">
        Create your next application with us
      </p>
      <ToolsSection />
      <OpenSourceSection />
      <div className="container">
        <div className="row justify-content-center">
          <a
            href="tg://resolve?domain=vitalyliber"
            className="btn btn-success btn-lg mt-4 mb-3"
          >
            Talk to us
          </a>
        </div>
      </div>
    </main>

    <footer className="mt-4">
      <a className="text-dark" href="/#" rel="noopener noreferrer">
        Casply Agency <img src="/casply_agency.svg" alt="Casply Logo" />
      </a>
    </footer>

    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .agencyName {
        color: crimson;
      }
    `}</style>
  </div>
);

export default Home;
