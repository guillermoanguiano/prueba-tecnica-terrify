import { mediaApi } from "@/api";
import { CardItem } from "@/components";
import { Box } from "@mui/material";

export default async function Home() {
  const media = await mediaApi.getMedia();
  await new Promise((res) => setTimeout(res, 1000));

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
      {media.map((media) => (
        <CardItem key={media.id} mediaCard={media} />
      ))}
    </Box>
  );
}
