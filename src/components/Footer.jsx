import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Made with <FavoriteIcon fontSize="small" /> {year}
      </p>
    </footer>
  );
}

export default Footer;
