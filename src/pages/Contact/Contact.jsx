import logo from "../../../public/images/logo.png";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 my-10">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let us to talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img src={logo} alt="" className="p-6 h-52 md:h-64" />
      </div>
      <htmlForm noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-xl font-semibold">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 border-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100 border-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xl font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100 border-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#23be0a] text-white"
        >
          Send Message
        </button>
      </htmlForm>
    </div>
  );
};

export default Contact;
