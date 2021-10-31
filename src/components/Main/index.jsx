import React from "react";
import Note from "../Note";
import "./styles.css";
import { Twitter, Facebook } from '../Icons'

import ListOfBooks from "../../components/ListOfBooks";
import useApi from "../../hooks/useApi";
const url = "https://gutendex.com/books";

const Main = () => {
  const { data, error, isLoading } = useApi(url);

  if (error) console.log(error);

  return (
    <main className="container">
      <section id='some__books'>
        <h2 className="section__title">Some of our latest eBooks</h2>

        {error ? "" : <ListOfBooks isLoading={isLoading} data={data} />}

        <p className="paragraph">
          <strong>50 years of eBooks 1971-2021</strong>. The{" "}
          <a
            href="https://www.gutenberg.org/ebooks/1"
            className="anchor-hovered"
          >
            first eBook
          </a>{" "}
          for reading enjoyment and unlimited free redistribution was created on
          July 4, 1971 by founder Michael S. Hart.{" "}
          <a
            href="https://www.gutenberg.org/about/background/50years.html"
            className="anchor-hovered"
          >
            {" "}
            Read more about this lasting innovation
          </a>
          . Project Gutenberg is grateful to all volunteers who helped to reach
          this milestone anniversary. Project Gutenberg offers a vibrant and
          growing collection of the world’s great literature. Read, enjoy, and
          share!
        </p>

        <p className="paragraph">
          <strong>No fee or registration!</strong> Everything from Project
          Gutenberg is gratis, libre, and completely without cost to readers. If
          you find Project Gutenberg useful, please consider a small donation to
          help Project Gutenberg digitize more books, maintain its online
          presence, and improve Project Gutenberg programs and offerings. Other
          ways to help include digitizing, proofreading and formatting, or
          reporting errors.
        </p>

        <p className="paragraph">
          <strong>No special apps needed!</strong> Project Gutenberg eBooks
          require no special apps to read, just the regular Web browsers or
          eBook readers that are included with computers and mobile devices.
          There have been reports of sites that charge fees for custom apps, or
          for the same eBooks that are freely available from Project Gutenberg.
          Some of the apps might have worthwhile features, but none are required
          to enjoy Project Gutenberg eBooks.
        </p>
      </section>

      <section>
        <h2 className="section__title">Find Free eBooks</h2>
        <ul className="list">
          <li>
            <a
              href="https://www.gutenberg.org/ebooks/"
              className="anchor-hovered"
            >
              {" "}
              Search and browse
            </a>
            . By author, title, subject, language, type, popularity, and more.
          </li>
          <li>
            <a
              href="https://www.gutenberg.org/ebooks/bookshelf/"
              className="anchor-hovered"
            >
              Bookshelves
            </a>{" "}
            of related eBooks.
          </li>
          <li>
            <a
              href="https://www.gutenberg.org/browse/scores/top"
              className="anchor-hovered"
            >
              Frequently downloaded
            </a>
            : Top 100, or ranked{" "}
            <a
              href="https://www.gutenberg.org/ebooks/search/?sort_order=downloads"
              className="anchor-hovered"
            >
              by popularity
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.gutenberg.org/ebooks/offline_catalogs.html"
              className="anchor-hovered"
            >
              Offline catalogs
            </a>
            :handy eBook listings and metadata to consult offline.
          </li>
          <li>
            <a
              href="https://www.gutenberg.org/ebooks/search/?query=&submit_search=Search&sort_order=release_date"
              className="anchor-hovered"
            >
              Recently added
            </a>
            . The latest new and updated eBooks.
          </li>
          <li>
            {" "}
            Visit{" "}
            <a href="http://self.gutenberg.org/" className="anchor-hovered">
              self.gutenberg.org
            </a>{" "}
            for free eBooks by contemporary authors.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section__title">Get Help</h2>
        <Note>
          <ul>
            <li>
              <a
                className="anchor-hovered"
                href="https://www.gutenberg.org/help/faq.html"
              >
                Frequently Asked Questions
              </a>{" "}
              about Project Gutenberg.
            </li>
            <li>
              <a
                className="anchor-hovered"
                href="https://www.gutenberg.org/help/"
              >
                Help, How-To and FAQs
              </a>
              : In depth information about many topics.
            </li>
            <li>
              <a
                className="anchor-hovered"
                href="https://www.gutenberg.org/help/mobile.html"
              >
                Tablets, phones and eReaders How-To
              </a>
              : Using tablets, Kindle, Nook, cell phone, and other mobile
              devices and readers.
            </li>
          </ul>
        </Note>
      </section>

      <section>
        <h2 className="section__title">How to Help</h2>
        <ul className="list">
          <li>
            <a className="anchor-hovered" href="https://www.pgdp.net/">
              {" "}
              Distributed Proofreaders
            </a>{" "}
            welcomes new volunteers. This is the main source of new Project
            Gutenberg eBooks. Getting started is easy, and just a page a day
            will help!
          </li>
          <li>
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/help/errata.html"
            >
              Fix and improve
            </a>{" "}
            Project Gutenberg by reporting errors, bugs, typos, and suggesting
            changes.
          </li>
          <li>
            Record audiobooks with our friends at{" "}
            <a className="anchor-hovered" href="https://librivox.org/">
              LibriVox
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section__title">Special Areas</h2>
        <ul className="list">
          <li>
            {" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/about/"
            >
              {" "}
              About Project Gutenberg
            </a>
            .{" "}
          </li>
          <li>
            {" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/donate/"
            >
              Donating to Project Gutenberg
            </a>
            .{" "}
          </li>
          <li>
            {" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/ebooks/feeds.html"
            >
              Feeds
            </a>{" "}
            of new eBooks.{" "}
          </li>
          <li>
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/policy/linking.html"
            >
              {" "}
              Linking to Project Gutenberg
            </a>
            and{" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/policy/robot_access.html"
            >
              roboting or crawling
            </a>{" "}
            the site.
          </li>
          <li>
            {" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/about/partners_affiliates.html"
            >
              Partners and affiliates
            </a>
            .{" "}
          </li>
          <li>
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/policy/permission.html"
            >
              Permissions, copyright, licensing, and trademark information
            </a>
            .{" "}
          </li>
          <li>
            What does{" "}
            <a
              className="anchor-hovered"
              href="https://www.gutenberg.org/about/background/free_ebook.html"
            >
              free eBook
            </a>{" "}
            (No Cost or Freedom?) mean?{" "}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section__title">Terms of Use</h2>
        <Note>
          <p className="paragraph">
            Project Gutenberg eBooks may be freely used in the United States
            because most are not protected by U.S. copyright law. They may not
            be free of copyright in other countries. Readers outside of the
            United States must check the copyright terms of their countries
            before accessing, downloading or redistributing eBooks. We also have
            a number of copyrighted titles, for which the copyright holder has
            given permission for unlimited non-commercial worldwide use.
          </p>
          <p className="paragraph">
            The Project Gutenberg website is for human users only. Use of
            automated tools to access the website may trigger a block of your
            access. This site utilizes cookies, captchas and related
            technologies to help assure the site is maximally available for
            human users. See full terms of use here.
          </p>
        </Note>
      </section>

      <section>
        <h2 className="section__title"> Social Media </h2>
        <div className='social'>

           <a href="https://www.facebook.com/project.gutenberg"> {Twitter} <small>Twitter</small>  </a>
        

            <a href="https://www.facebook.com/project.gutenberg">{Facebook} <small>Facebook</small></a>
   
        </div>
      </section>
    </main>
  );
};

export default Main;
