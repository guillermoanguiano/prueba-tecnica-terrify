import styled from "@emotion/styled";
import { Button, Card } from "@mui/material";

const CustomCard = styled(Card)`
    width: 345px;
    border-radius: 10px;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;

const WatchButton = styled(Button)`
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: center;
    border-radius: 10px;
`

export { CustomCard, ImageWrapper, WatchButton };