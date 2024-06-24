import React from "react";
import { Box } from "@mui/material";

// Components
import { SkeletonVideo } from "@/components/SkeletonVideo";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 2, lg: 3 },
        alignItems: "center",
        justifyContent: { xs: "center", lg: "flex-start" },
      }}
    >
      <SkeletonVideo width={350} height={200} count={9} />
    </Box>
  );
}
