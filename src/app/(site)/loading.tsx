import { SkeletonVideo } from "@/components/SkeletonVideo";
import { Box } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
      <SkeletonVideo width={260} height={220} />
    </Box>
  );
}
