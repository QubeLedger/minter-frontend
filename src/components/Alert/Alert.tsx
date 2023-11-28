import styled from 'styled-components'
import Alert, { AlertColor } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from 'react';
import { useAlertStore } from '../../hooks/useAlertStore';
import Snackbar from "@mui/material/Snackbar";
import { useShowAlert } from '../../hooks/useShowModal';
import { AlertType } from "../../hooks/useAlertStore";
import { render } from 'react-dom';
import { AlertTitle } from '@mui/material';

const AlertStack = styled.div`
        width: 280px;
        margin-left: auto;
        margin-top: 10px;
        margin-right: 10px;
        position: relative;
        box-shadow: inset;
        align-items: center;
        display: flex;
`

const AlertClose = styled.h3`
        font-size: 21px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
        'Helvetica Neue', sans-serif;
        position: absolute;
        margin-left: 12.2em;
        margin-top: 0px;
        color: white;
        font-weight: 500;
        cursor: pointer;
`

const alertTextStyle = {
        color: "white",
        height: "45px",
        fontSize: "15px",
        paddingTop: "10px"
};

function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
}

export default function AlertBlock() {

        const [showAlerts, setShowAlert] = useShowAlert();
        const [alertsStore, setAlerts] = useAlertStore();

        const close = async () => {
                setShowAlert({b: false})
                await delay(1000)
                while(alertsStore.length > 0) {
                        alertsStore.pop()
                }
        };

        return (
                <AlertStack>
                        <Stack sx={{ 
                        width: "100%",
                        background: "#333",
                        borderRadius: "5px",
                        contrastText: 'white',
                        }}>
                                <Snackbar
                                open={showAlerts.b}
                                autoHideDuration={6000}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                onClose={close}
                                >
                                        <Alert variant="outlined" severity={alertsStore[0]?.Type || 'error'} color={alertsStore[0]?.Color || "error"} style={alertTextStyle}>
                                                <AlertTitle>{alertsStore[0]?.Text}</AlertTitle>
                                        </Alert>
                                </Snackbar>
                        </Stack>
                </AlertStack>
        );
}