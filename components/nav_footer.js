export default function Footer() {
  return (
    <nav>
      <footer className="bg-gray-200 text-center lg:text-left">
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          {" "}
          <div className="p-4 text-center text-gray-700"></div>
          <a className="flex justify-center bg-sky-700 px-4 py-2 text-white hover:bg-sky-900 sm:px-8 sm:py-3">
            {" "}
            © Made By Enzo Adam and P-A with Love.
          </a>
        </div>
      </footer>
    </nav>
  );
}
