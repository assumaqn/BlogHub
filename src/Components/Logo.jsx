import { Link } from "react-router-dom";
import image from "../../public/Logo.png";

function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          color: "rgb(76, 88, 178)",
          fontSize: "1.2rem",
          fontWeight: "900",
        }}
      >
        <img src={image} alt="Logo" />
        BlogHub
      </span>
    </Link>
  );
}

export default Logo;
