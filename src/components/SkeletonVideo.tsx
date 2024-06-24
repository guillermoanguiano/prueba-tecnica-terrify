import { Box, Skeleton } from "@mui/material";
import React from "react";

type SkeletonVideoProps = {
  width?: number;
  height?: number;
  count?: number;
};

export const SkeletonVideo = ({
  width = 210,
  height = 120,
  count = 1,
}: SkeletonVideoProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="rounded" width={width} height={height} />
        </Box>
      ))}
    </>
  );
};
