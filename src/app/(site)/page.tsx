import { Box } from "@mui/material";

// Components
import { CardItem } from "@/components";

// API
import { mediaApi } from "@/api";

export default async function Home() {
  const media = await mediaApi.getMedia();
  await new Promise((res) => setTimeout(res, 1000));

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 2, lg: 3 },
      }}
    >
      {media.map((media) => (
        <CardItem key={media.id} mediaCard={media} />
      ))}
    </Box>
  );
}
