import styled from 'styled-components'
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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

export default function AlertBlock() {
    return (
      <AlertStack>
        <Stack sx={{ 
       width: "100%",
       background: "#333",
       borderRadius: "5px",
       contrastText: 'white',
       }}>
          <Alert variant="outlined" severity="success" color="error" style={alertTextStyle}>
            Transaction confirmed 
          </Alert>
          <AlertClose>×</AlertClose>
        </Stack>
      </AlertStack>
    );
  }