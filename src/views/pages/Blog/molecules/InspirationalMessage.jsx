import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Stack, useTheme } from "@mui/material";
import { Text } from "../../../../components/base";
import { useBlogStyle } from "../styles";
import { useDispatch } from "react-redux";
import { getAllInspirationMessages } from "../../../../store/actions/userActions";



const InspirationalMessage = () => {
  const theme = useTheme();
  const styles = useBlogStyle({ theme });

  const [inspirationMesaages, setInspirationMessages] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllInspirationMessages())
      .then((result) => {
        // console.log("========result", result?.data?.payload?.all);
        setInspirationMessages(result?.data?.payload?.all);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      }).finally(() => {
        setLoading(false);
      });
  }, [setInspirationMessages, dispatch]);
  return (
    <>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
      ) : (
        <Grid container rowSpacing={3} marginY={3}>
          {inspirationMesaages?.map((message, index) => (
            <Grid key={index} item xs={12}>
              <Stack sx={styles.inspirationalGridItemStack}>
                {/* Italic Text Heading */}
                <Stack flexDirection={"row"}>
                  <Text sx={styles.inspirationalGridItemTextItalic}>
                    {message?.message}
                  </Text>
                  <Text width={"50%"} />
                </Stack>

                {/* Down Text Stack */}
                <Stack flexDirection={"row"}>
                  <Text width={"50%"} />
                  <Stack
                    width={"50%"}
                    flexDirection="row"
                    gap={1.5}
                    alignItems={"center"}
                  >
                    <Text>{message?.author_name}</Text>
                    <Text sx={styles.inspirationalGridAuthor}>
                      {`' ${message?.reference} '`}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default InspirationalMessage;
