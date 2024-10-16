import React from "react";
import Header from "../../../components/AppBar/Header";
import Footer from "../../../layouts/Landing/Footer";
import { Stack, useTheme } from "@mui/material";
import { Text } from "../../../components/base";
import { usePrayerRegardsStyle } from "./styles";

const PrayerRegards = () => {
  const theme = useTheme();
  const styles = usePrayerRegardsStyle({ theme });
  return (
    <>
      <Header />
      {/* Prayer Success Start */}
      <Stack
        spacing={2}
        sx={styles.paragraphStack}
        alignItems={"start"}
        justifyContent={"center"}
        flexDirection="column"
      >
        <Text sx={styles.successText}>Success!</Text>
        {/* Paragraph Stack Start */}
        <Stack sx={styles.textStack} spacing={2}>
          <Text>
            Thank you for entrusting us with your prayer request. Your heartfelt
            words have been received, and we want you to know that your prayer
            is important to us.
          </Text>
          <Text>
            Your request will be uplifted by our dedicated team and community.
            Just as countless prayers have echoed through the halls of Shekinah
            Haitian SDA Church over the years, your intentions will be woven
            into this sacred tapestry of faith and support.
          </Text>
          <Text>
            May you find solace in knowing that your concerns have reached
            caring hearts and that our collective prayers will accompany you on
            your journey.
          </Text>
          <Text component="div">
            If there are any specific updates or additional details you would
            like to share, please feel free to reach out to us at{" "}
            <Text component="span" sx={styles.hyperLinkText}>
              Info@shekinahsda.org.
            </Text>
          </Text>
          <Text>
            Thank you again for allowing us to join you in prayer. May you feel
            the comfort and strength that comes from being part of our Shekinah
            Haitian SDA Church family.
          </Text>
        </Stack>
        {/* Paragraph Stack End */}
      </Stack>
      {/* Prayer Success End */}
      <Footer />
    </>
  );
};

export default PrayerRegards;
