"use client";
import { Dialog } from "@mui/material";
import { Transition } from "./animations";
import { ArtPlayer } from "./Video";

type ModalVideoProps = {
  url: string;
  isModalOpen: boolean;
  handleClose: () => void;
};

export const ModalVideo = ({
  url,
  isModalOpen,
  handleClose,
}: ModalVideoProps) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
    >
      <ArtPlayer
        option={{
          url,
          theme: "#f00",
          pip: true,
          lang: "en",
          autoplay: true,
          fullscreen: true,
          hotkey: true,
          autoOrientation: true,
          miniProgressBar: true,
          muted: true,
          playbackRate: true,
        }}
        style={{
          width: "100%",
          height: "400px",
        }}
        getInstance={() => {}}
      />
    </Dialog>
  );
};
