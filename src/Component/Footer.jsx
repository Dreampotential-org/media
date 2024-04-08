import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Logo from "../Assets/SOM_horiz_Web.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {""}
      <Link color="inherit" href="media.com"></Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          margin={1}
          sx={{ flex: 1 }}
        >
          <img src={Logo} alt="BLOG" height={35} />
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
