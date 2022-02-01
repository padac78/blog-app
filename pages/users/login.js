const fetch = require("isomorphic-unfetch");
import Navuser from "../../components/nav_user";
import Footer from "../../components/nav_footer";
import Link from "next/Link";

const Login = ({ login }) => {
  return (
    <body className="font-family-karla bg-white">
      <Navuser />

      <Footer />
    </body>
  );
};

module.exports = Login;
