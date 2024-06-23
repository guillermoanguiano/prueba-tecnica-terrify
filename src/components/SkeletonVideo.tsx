import { Box, Skeleton } from "@mui/material";
import React from "react";

type SkeletonVideoProps = {
  width?: number;
  height?: number;
};

export const SkeletonVideo = ({
  width = 210,
  height = 120,
}: SkeletonVideoProps) => {
  return (
    <Box>
      <Skeleton variant="rectangular" width={width} height={height} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};
