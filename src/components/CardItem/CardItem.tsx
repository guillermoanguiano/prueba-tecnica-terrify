"use client";
import React, { useState } from "react";
import { CardActionArea, CardActions, CardMedia } from "@mui/material";
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
    <>
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
                quality={100}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </S.ImageWrapper>
          </CardMedia>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <S.WatchButton
            size="small"
            color="inherit"
            variant="outlined"
            onClick={handleClickOpen}
          >
            Watch
          </S.WatchButton>
        </CardActions>
      </S.CustomCard>

      <ModalVideo
        isModalOpen={isModalOpen}
        url={mediaCard.video}
        handleClose={handleClose}
      />
    </>
  );
};
