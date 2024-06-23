import { Slide } from "@mui/material";
import { type TransitionProps } from "@mui/material/transitions";
import { type Ref, forwardRef } from "react";

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: Ref<unknown>
  ) => <Slide {...props} ref={ref} direction="down" />
);

Transition.displayName = "Transition";

export { Transition };
