"use client";
import React, { useState } from "react";
import { Box, CardActionArea, CardActions, CardMedia } from "@mui/material";
import Image from "next/image";

// Components
import { ModalVideo } from "../ModalVideo";

// Interfaces
import { Media } from "@/interfaces";

// Styled Components
import * as S from "./CardItem.styled";

type CardItemProps = {
  mediaCard: Media;
};

export const CardItem = ({ mediaCard }: CardItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <S.CustomCard sx={{ mx: { xs: "auto", lg: 0 } }}>
        <CardActionArea
          onClick={handleClickOpen}
          disableTouchRipple
          disableRipple
        >
          <CardMedia>
            <S.ImageWrapper>
              <Image
                src={mediaCard.image}
                alt="Media Image"
                fill
                quality={80}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </S.ImageWrapper>
          </CardMedia>
        </CardActionArea>
      </S.CustomCard>

      <ModalVideo
        isModalOpen={isModalOpen}
        url={mediaCard.video}
        handleClose={handleClose}
      />
    </Box>
  );
};
