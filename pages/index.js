import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clockSvg from "../public/clock.svg";
import branchSvg from "../public/branch.svg";
import tickSvg from "../public/tick.svg";
import fb from "../public/fb.svg";
import insta from "../public/insta.svg";
import twitter from "../public/twitter.svg";
import Linkedin from "../public/linkedin.svg";

const url = {
  fb: "https://www.facebook.com/mutualcryptofund/",
  linkedIn: "https://www.linkedin.com/company/mutualcryptofund/",
  insta: "https://www.instagram.com/mutualcryptofund/",
  twitter: "https://twitter.com/LomashBidua",
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Mutual Funds for Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <nav className="header">
            <h2>MutualCryptoFund</h2>
          </nav>
        </header>
        <section className="mainDisplay">
          <div className="text">
            <h2>Mutual funds for crypto</h2>
            <div className="subheading">
            We at Mutual Crypto Fund understand the volatility involved in the cryptocurrency market and hence we aim to provide a hassle-free wealth generating experience to our customers so that they can safely invest their hard-earned money while we manage the market risk to provide maximum benefits to our customers.
            <p>
              If you like our vision, then we invite you to give us a chance by registering with us and we will get in touch with you soon."
            </p>
            </div>
            <a href="https://forms.gle/LcYfJNxRdYXN13xz9" target="_blank">
              <button className="interested btn">I'm interested</button>
            </a>
          </div>
        </section>

        <section className="features">
          <div className="features-heading">
            <h3> One fund to rule them all.</h3>
            <div>Select from a wide range of crypto mutual funds</div>
          </div>

          <div className="feature-list">
            <div className="feature">
              <div>
                <Image src={clockSvg} alt="Clock Svg" />
              </div>
              <div className="feature-heading">Hassle Free Investement</div>
              <div>
                We analyse and then channelize your funds to make your
                investments hassle free.
              </div>
            </div>
            <div>
              <div className="feature">
                <Image src={branchSvg} alt="Branch Svg" />
              </div>
              <div className="feature-heading">Diversified portfolio</div>
              <div>
                We invest in range of good & selected cryptocurrencies so your
                risk minimized & returns are maximized.
              </div>
              Branch
            </div>
            <div className="feature">
              <div>
                <Image src={tickSvg} alt="Tick Svg" />
              </div>
              <div className="feature-heading">Start & Stop At anytime</div>
              <div>
                You can start at any time & stop at any time totally at your
                convenience.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-heading">Home to Crypto Mutual Funds</div>
        <div className="icon-stack">
          <a href={url.fb} target="_blank">
            <Image src={fb} alt="facebook page" />
          </a>
          <a href={url.insta} target="_blank">
            <Image src={insta} alt="Instagram page" />
          </a>
          <a href={url.twitter} target="_blank">
            <Image src={twitter} alt="Twitter Page" />
          </a>
          <a href={url.linkedIn} target="_blank">
            <Image src={Linkedin} alt="Linkedin Page" />
          </a>
        </div>

        <div></div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          margin: 0 auto;
        }

        .header {
          display: flex;
          padding: 0.75rem 0;
          max-width: 1200px;
          align-items: center;
          margin: 0 auto;
          justify-content: space-between;
        }

        .header h2 {
          font-weight: var(--bold);
          color: var(--blue);
          font-size: 1.5rem;
        }

        .mainDisplay {
          background-image: url("https://images.unsplash.com/photo-1617854611335-e54f6f1b1f42?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=executium-QQB01oqSbe8-unsplash.jpg");
          // background-image: url("https://images.unsplash.com/photo-1627538993300-61f001db23e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=executium-EM3BTKStjiA-unsplash.jpg");
          filter: contrast(80%);
          background-size: cover;
          height: 475px;
          color: var(--white);
          background-repeat: no-repeat;
          background-position: center center;
        }

        .text {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .text h2 {
          font-weight: var(--bold);
          padding: 1rem 0;
          margin: 0;
        }

        .subheading {
          max-width: 60%;
          font-size: 24px;
        }

        .btn {
          border: none;
        }

        .subheading {
          padding: 1rem 0;
          max-width: 60%;
          line-height: 1.3;
        }

        .interested {
          color: var(--white);
          background-color: var(--blue);
          padding: 1rem 1.5rem;
          font-weight: var(--bold);
          font-size: 1rem;
          border-radius: 10px;
        }

        .features {
          margin: 0 auto;
          padding: 2rem 0 0 0;
          max-width: 1200px;
        }

        .features-heading {
          text-align: center;
        }

        .features-heading h3 {
          font-size: 36px;
          font-weight: var(--regular);
          margin: 0 0 1rem 0;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 50px;
          padding: 2rem 0;
        }

        .feature-heading {
          padding: 0.5rem 0 1rem 0;
          font-weight: var(--bold);
        }

        footer {
          display: flex;
          font-family: inherit;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .footer-heading {
          padding: 1rem 0;
          font-size: 1.25rem;
        }
        .icon-stack {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-stack > a {
          display: inline-block;
          padding-right: 2rem;
        }

        @media only screen and (max-width: 412px) {
          .mainDisplay {
            height: 500px;
            padding: 1rem;
          }

          .subheading {
            max-width: 95%;
          }

          .features {
            padding: 1rem;
          }

          .feature-list {
            display: block;
            padding: 1rem;
          }

          .feature {
            padding: 1rem 0;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Rubik", sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        button {
          font-family: inherit;
        }
        a {
          color: inherit;
          font-family: inherit;
          text-decoration: none;
        }

        :root {
          --blue: #0052ff;
          --white: #fff;
          --black: #161c26;
          --bold: 700;
          --regular: 400;
        }
      `}</style>
    </div>
  );
}
