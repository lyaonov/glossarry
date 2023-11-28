import { Box, List } from "@mui/material";
import styled from "styled-components";

export const grayColor1 = 'rgba(0, 0, 0, 0.12)'
export const grayColor2 = 'rgba(0, 0, 0, 0.52)'

export const modalBoxStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const MindMapContainer = styled(Box)`
  width: 70vw;
  height: 70vh;
  border: 1px solid ${grayColor1};
  border-radius: 20px;
`;

export const StyledList = styled(List)`
    color: ${grayColor2};
    padding: 10px;
    border: 1px solid ${grayColor1};
    border-radius: 20px;
    height: 70vh;
    width: 70vh;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 8px; /* For Chrome, Safari, and Opera */
    }
    scrollbar-width: thin; /* For Firefox */
`;

export const EllipsisText = styled.div`
    color: ${grayColor2};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Container = styled.div`
    width: 80vw;
    height: 60vh;

    padding: 10px;
    border: 1px solid ${grayColor1};
    border-radius: 20px;
    &:: .react-flow__panel .top {
        display: none;
    }
`;