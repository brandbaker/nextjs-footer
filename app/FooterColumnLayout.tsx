"use client";

import { Box, Typography, Link } from "@mui/material";

const productNav = [
  {
    group: "Portable Fan",
    items: [
      { name: "Handheld Fan", link: "/handheld-fan" },
      { name: "Small Portable Fan", link: "/small-portable-fan" },
      { name: "Slide Fan", link: "/slide-fan" },
      { name: "Table Fan", link: "/table-fan" },
      { name: "Stand Fan", link: "/stand-fan" },
      { name: "Tower Fan", link: "/tower-fan" },
    ],
  },
  {
    group: "Installation Fan",
    items: [
      { name: "Cycle Fan", link: "/cycle-fan" },
      { name: "Wall Fan", link: "/wall-fan" },
      { name: "Ceiling Fan", link: "/ceiling-fan" },
    ],
  },
  {
    group: "Industrial Fan",
    items: [{ name: "Industrial Fan", link: "/industrial-fan" }],
  },
  {
    group: "Ventilation Fan",
    items: [{ name: "Ventilation Fan", link: "/ventilation-fan" }],
  },
  {
    group: "Air Purifier",
    items: [{ name: "Air Purifier", link: "/air-purifier" }],
  },
  { group: "Air Cooler", items: [{ name: "Air Cooler", link: "/air-cooler" }] },
  {
    group: "Spare Parts",
    items: [
      { name: "Blades", link: "/blades" },
      { name: "Fan Grill", link: "/fan-grill" },
      { name: "Remote Control", link: "/remote-control" },
      { name: "Fan Motor", link: "/fan-motor" },
    ],
  },
];

const siteNav = [
  { name: "About Us", link: "/about-us" },
  { name: "Blog", link: "/blog" },
  { name: "Warranty & Services", link: "/warranty-services" },
  { name: "Contact Us", link: "/contact-us" },
];

export default function FooterColumnLayout() {
  const combined = [
    ...productNav.map((group) => ({ ...group, showTitle: true })),
    { group: "Information", items: siteNav, showTitle: false },
  ];

  return (
    <Box sx={{ columns: { xs: 1, sm: 2, md: 4 }, gap: 3 }}>
      {combined.map((category, index) => (
        <Box
          key={index}
          sx={{ breakInside: "avoid", mb: 2, mt: category.showTitle ? 0 : 3 }}
        >
          {category.showTitle && (
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
              gutterBottom
            >
              {category.group}
            </Typography>
          )}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <Typography
                  sx={{
                    fontSize: category.showTitle ? "0.8rem" : "1rem",
                    textTransform: category.showTitle ? "none" : "uppercase",
                    fontWeight: category.showTitle ? "normal" : "bold",
                  }}
                >
                  <Link href={item.link} sx={{ textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}
