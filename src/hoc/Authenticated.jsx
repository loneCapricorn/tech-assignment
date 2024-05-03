import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../providers/AppContext";

const Authenticated = ({ children }) => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return children;
};

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticated;
