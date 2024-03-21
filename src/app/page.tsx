"use client";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { RecoilRoot } from "recoil";
import Switcher from "@/components/Switcher/Switcher";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainList from "@/components/MainLIst/MainList";
import "@/scss/styles.scss";

const Home: FC = (): ReactElement => {
  return (
    <RecoilRoot>
      <header className="section">
        <nav className="nav section">
          <div className="container">
            <Switcher />
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="container">
          <MainHeader />
          <MainList />
        </div>
      </main>
      <footer className="footer section">
        <div className="footer__inner">
          <div className="container my-auto">
            <div className="flex">
              <div className="ml-auto">
                <>Made with love by </>
                <Link
                  href="https://rabota.by/resume/8698ffa4ff0b1c38fd0039ed1f4b6476487767"
                  target="_blank"
                  className="footer__link"
                >
                  Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </RecoilRoot>
  );
};

export default Home;
