import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Typography } from "@mui/material";

const productNav = [
  {
    group: "Portable Fan",
    items: [
      "Handheld Fan",
      "Small Portable Fan",
      "Slide Fan",
      "Table Fan",
      "Stand Fan",
      "Tower Fan",
    ],
  },
  {
    group: "Installation Fan",
    items: ["Cycle Fan", "Wall Fan", "Ceiling Fan"],
  },
  { group: "Industrial Fan", items: ["Industrial Fan"] },
  { group: "Ventilation Fan", items: ["Ventilation Fan"] },
  { group: "Air Purifier", items: ["Air Purifier"] },
  { group: "Air Cooler", items: ["Air Cooler"] },
  {
    group: "Spare Parts",
    items: ["Blades", "Fan Grill", "Remote Control", "Fan Motor"],
  },
];

const siteNav = ["About Us", "Blog", "Warranty & Services", "Contact Us"];

export default function Home() {
  return (
    <>
      <Box component="footer" sx={{ mt: 4, py: 4, bgcolor: "grey.200" }}>
        <Container maxWidth="lg">
          {/* Product Navigation */}
          <Box sx={{ columns: { xs: 1, sm: 2, md: 4 }, gap: 3 }}>
            {productNav.map((category, index) => (
              <Box key={index} sx={{ breakInside: "avoid", mb: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                  gutterBottom
                >
                  {category.group}
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <Typography sx={{ fontSize: "0.8rem" }}>
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}

            {/* Site Navigation */}
            <Box sx={{ mt: 2 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {siteNav.map((link, index) => (
                  <li key={index}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
