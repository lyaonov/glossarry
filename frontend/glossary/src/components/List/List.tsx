import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Box, ListItem, ListItemButton, ListItemText, Modal, Typography } from '@mui/material';
import { EllipsisText, StyledList, grayColor2, modalBoxStyle } from '../../styled/styled';

const fetchData = async () => (await fetch('/terms')).json();

interface TerminInfo {
    label: string;
    description: string;
}

interface TerminProps {
    text: string;
    definition: string;
    onClick: (data: TerminInfo) => void;
}

const Termin: FC<TerminProps> = memo(({ text, definition, onClick }) => {
    const secondary = useMemo(() => {
        return <EllipsisText>{definition}</EllipsisText>;
    }, [definition]);

    const handleClick = useCallback(() => {
        onClick({ label: text, description: definition });
    }, [definition, onClick, text]);

    return (
        <ListItem key={text}>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={text} secondary={secondary} />
            </ListItemButton>
        </ListItem>
    );
});

const DataFetcher: FC = () => {
    const { data, isLoading, isError } = useQuery('terms', fetchData);
    const terminsData: TerminInfo = data || {};

    const [termin, setTermin] = useState<TerminInfo | null>(null);

    const handleOpen = useCallback((data: TerminInfo) => {
        setTermin(data);
    }, []);

    const handleClose = useCallback(() => {
        setTermin(null);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const terminElements = Object.entries(terminsData).map(([term, definition]) => (
        <Termin onClick={handleOpen} key={term} text={term} definition={definition} />
    ));

    const modalElement = (
        <Modal
            open={!!termin}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBoxStyle}>
                <Typography
                    textAlign="center"
                    color={grayColor2}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                >
                    {termin?.label}
                </Typography>
                <Typography
                    textAlign="center"
                    color={grayColor2}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                >
                    {termin?.description}
                </Typography>
            </Box>
        </Modal>
    );

    return (
        <>
            {terminElements}
            {modalElement}
        </>
    );
};

export const TerminsList: FC = memo(() => {
    return (
        <StyledList component="div">
            <DataFetcher />
        </StyledList>
    );
});
