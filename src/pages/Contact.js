import React from "react";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import about from "../image/about.jpeg";
import {
  Box,
  Link,
  TableContainer,
  Table,
  Typography,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import { fontSize, lineHeight } from "@mui/system";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          "& h4": { fontWeight: "bold" },
          "& p": { fontSize: "18px", lineHeight: "20px" },
          "@media (max-width:600px)": { mt: 1 },
        }}
      >
        <Typography variant="h4">Contact To My Resturent</Typography>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The 
        </p>
        <Box>
          <TableContainer component={Paper}>
            <Table area-aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      textAlign: "center",
                      m: 3,
                    }}
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "green", mr: 1 }} />
                    +88 01 222 333 44(toolfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AttachEmailIcon sx={{ color: "gold", mr: 1 }} />
                    www.helpline.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "blue", mr: 1 }} />
                    +88 01 222 333 44
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        
      </Box>
    </Layout>
  );
};

export default Contact;
