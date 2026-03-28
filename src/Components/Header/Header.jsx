import { format } from "date-fns";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";

const Header = () => {
  const date = new Date();

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center mt-14 mb-8">
      <Link to="/">
        <img className="w-[400px]" src={Logo} alt="" />
      </Link>
      <p className="my-3 text-accent">Journalism Without Fear or Favour</p>
      <p className="text-neutral text-lg">
        {format(date, "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
