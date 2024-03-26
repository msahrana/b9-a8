const AboutUs = () => {
  return (
    <div className="text-justify space-y-4 my-5">
      <section>
        <h1 className="text-xl font-bold">About Us</h1>
        <p>
          Welcome to Book Outlet! We are passionate about books and strive to
          provide our customers with an extensive selection of titles at
          unbeatable prices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p>
          Our mission is to promote literacy and a love for reading by offering
          affordable access to quality books. We believe that everyone should
          have the opportunity to explore the world through literature.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">Our Values</h2>
        <ul>
          <li>
            <span className="font-semibold">Accessibility:</span> We aim to make
            reading accessible to all individuals, regardless of their
            background or financial status.
          </li>
          <li>
            <span className="font-semibold">Quality:</span> We curate our
            collection carefully, ensuring that each book meets our standards of
            excellence.
          </li>
          <li>
            <span className="font-semibold">Community Engagement:</span> We
            actively engage with our community of readers through events,
            promotions, and social media.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold">Our Team</h2>
        <p>
          Behind the Book Outlet is a dedicated team of book lovers who are
          committed to helping you find the perfect read. Get to know us!
        </p>
        {/* You can include profiles or descriptions of key team members here */}
      </section>

      <section>
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>
          <span className="font-semibold">Have a question or feedback?</span> We
          weed love to hear from you! Contact us via email, phone, or visit our
          store.
        </p>
        <p>
          <span className="font-semibold">Email:</span> info@bookoutlet.com
        </p>
        <p>
          <span className="font-semibold">Phone:</span> +88017 22 44 52 88
        </p>
        <p>
          <span className="font-semibold">Address:</span> Kerani Para, Rangpur,
          Bangladesh.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">Join Our Newsletter</h2>
        <p>
          Stay updated on the latest book releases, promotions, and events by
          subscribing to our newsletter.
        </p>
        {/* You can include a newsletter signup form here */}
      </section>

      <section>
        <h2 className="text-xl font-bold">Follow Us</h2>
        <p>
          Connect with us on social media to stay connected and join the
          conversation!
        </p>
        {/* You can include social media icons/links here */}
      </section>
    </div>
  );
};

export default AboutUs;
