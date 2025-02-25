import React from "react";
import { Box, Typography } from "@mui/material";


function Sponsorship() {
  return (
    <Box sx={{ my: "4rem", padding: "8rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="inherit"
          sx={{ fontWeight: "semi-bold", fontSize: "72px" }}
        >
          Why Sponsor Minare !
        </Typography>
        <Typography variant="caption" fontFamily={"revert"} fontSize={"18px"}>
          MINARE provides a unique platform to the young minds studying mining
          engineering and allied courses in leading technical institutes of the
          country to showcase their talent and skills. Your sponsorship of
          MINARE 2024 will ensure widespread publicity across a variety of
          platforms, including banners, posters, flyers, event kits, ID cards,
          Monday Morning - The NITRKL Newsletter, and social media platforms. As
          a proud sponsor, your brand will create awareness, along with
          increasing visibility and credibility. Necessary publicity material
          provided by you will be circulated among the participants and
          participating institutse. The campus ambassadors, integral to
          organization of Minare, shall spread your ideas. Your contribution
          shall also be publicized through departmental reports and website.{" "}
        </Typography>
      </Box>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1710250938/minare/wgyzc4eo87hjlh5zhsr8.png"
          alt="WhySponsortable"
        />
      </Box>
    </Box>
  );
}

export default Sponsorship;
