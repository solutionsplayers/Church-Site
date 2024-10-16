import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/AppBar/Header";
import Footer from "../../layouts/Landing/Footer";
import { useDispatch } from "react-redux"; import Page from '../../components/page/page'
import {
  getPrayRequest,
  postPrayRequest,
} from "../../store/actions/userActions";
import { Text } from "../../components/base";

import { useSnackbar } from "notistack";
import { usePageStyle } from "./styles";

const PrayerRequest = ({ setProgress }) => {
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 1000)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const styles = usePageStyle({ theme });
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  //   const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",

    pray_request: "",
  });

  const [prayerRequest, setPrayerRequest] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // setSelectedCategoryId(event.target.value);
    // You can perform additional actions with the selected category ID here if needed

    setRequestForm({ ...requestForm, [event.target.name]: event.target.value });
  };
  // const getPrayerRequest = () => {
  //   dispatch(getPrayRequest())
  //     .then((result) => {
  //       // console.log("========result", result?.data?.payload);
  //       setPrayerRequest(result?.data?.payload);
  //     })
  //     .catch((err) => {
  //       console.log("Error fetching categories:", err);
  //     });
  // };

  // useEffect(() => {
  //   getPrayerRequest();
  // }, []);

  // console.log("===========prayerRequest===========", prayerRequest);
  // console.log("===========requestForm===========", requestForm);

  const submitPrayRequest = (e) => {
    e.preventDefault();

    console.log("Submitting prayer request:", requestForm);

    if (
      requestForm.name.length &&
      requestForm.email.length &&
      requestForm.pray_request.length
    ) {
      setLoading(true); // Set loading to true before the API call

      const formData = new FormData();
      formData.append("name", requestForm.name);
      formData.append("email", requestForm.email);
      formData.append("pray_request", requestForm.pray_request);

      dispatch(postPrayRequest(formData))
        .then((result) => {
          console.log("=======response========", result);
          setRequestForm({
            ...requestForm,
            name: "",
            pray_request: "",
          });
          enqueueSnackbar(result.data.message, {
            variant: "success",
          });
        })
        .catch((error) => {
          console.log("error in catch======", error);
          enqueueSnackbar(error, {
            variant: "error",
          })
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the API call is complete
        });
    } else {
      setLoading(false); // Set loading to false if the form validation fails
      enqueueSnackbar("Fill All inputs values", {
        variant: "error",
      });
    }
  };


  return (
    <>
      <Page title="Prayer-Request">
        <Header />
        <Box
          sx={{
            position: "relative",
            minHeight: "400px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: -70,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('/img25.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -70,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.70)",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "center",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Stack></Stack>
            <Text sx={{ fontSize: "32px", fontWeight: 600 }}>
              {" "}
              Prayer Request
            </Text>
            <Text sx={{ paddingX: isSmall ? 5 : 10, mb: 5, fontSize: isSmall ? '17px' : '20px' }}>
              Share your prayer requests with us. At Shekinah Haitian SDA Church,
              we stand together in faith, supporting one another through the power
              of prayer. Your concerns matter to us, and our community is here for
              you, seeking strength, healing, and peace together.
            </Text>
          </Box>
        </Box>
        <Box sx={{ padding: "30px 40px" }}>
          <Stack spacing={2}>
            <Text
              sx={{
                fontWeight: 800,
                fontSize: { xs: "23px", md: "28px" },
                lineHeight: "32.81px",
              }}
            >
              Prayer Requests Form
            </Text>
            <Text
              sx={{
                fontWeight: 400,
                fontSize: { xs: "17px", md: "24px" },
                lineHeight: "28.13px",
              }}
            >
              Please fill in this information so we can deliver your prayer
            </Text>
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              marginTop: "30px",
            }}
          >
            {/* <Box sx={{ display: "flex", gap: "20px" }}> */}
            {/* <input
              type="text"
              placeholder="First Name"
              style={{
                border: "none",
                backgroundColor: "#EDE8E8",
                color: "gray",
                padding: " 15px 20px",
                borderRadius: "8px",
                width: "100%",
              }}
              name="first_name"
              onChange={(event) => handleChange(event)}
              value={requestForm.first_name}
            /> */}
            <Box sx={styles.inputsBox}>
              <input
                type="text"
                placeholder="Full Name"
                style={styles.inputStyle}
                name="name"
                values={requestForm.name}
                onChange={(event) => handleChange(event)}
              />

              <input
                type="text"
                placeholder="Write Your Email"
                style={styles.inputStyle}
                name="email"
                values={requestForm.email}
                onChange={(event) => handleChange(event)}
              />


              <textarea
                rows={6}
                placeholder="Write Your Prayers"
                style={{
                  border: "none",
                  backgroundColor: "#EDE8E8",
                  color: "gray",
                  padding: "15px 20px",
                  borderRadius: "8px",
                }}
                name="pray_request"
                onChange={(event) => handleChange(event)}
                values={requestForm.pray_request}
              ></textarea>

              <div>
                {loading && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      // You might want to adjust the background color and opacity
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      zIndex: 999, // Make sure the overlay is behind the button
                    }}
                  ></div>
                )}
                <button
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: "black",
                    fontSize: isSmall ? '17px' : "24px",
                    borderRadius: "8px",
                    padding: "10px 40px",
                    border: "none",
                    marginTop: '',
                    position: 'relative',
                    fontWeight: 600,
                    zIndex: 1000, // Make sure the button is above the overlay
                  }}
                  onClick={submitPrayRequest}
                  disabled={loading}
                >
                  {loading ? 'wait...' : 'Pray Request'}
                </button>
              </div>


            </Box>
            {/* <input
            type="text"
            placeholder="Full Name"
            style={{
              border: "none",
              backgroundColor: "#EDE8E8",
              color: "gray",
              padding: " 15px 20px",
              borderRadius: "8px",
              width: "100%",
            }}
            name="name"
            onChange={(event) => handleChange(event)}
            values={requestForm.name}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              border: "none",
              backgroundColor: "#EDE8E8",
              color: "gray",
              padding: " 15px 20px",
              borderRadius: "8px",
              width: "100%",
            }}
            name="email"
            onChange={(event) => handleChange(event)}
            values={requestForm.email}
          />
          <textarea
            rows={6}
            placeholder="Write Your Prayers"
            style={{
              border: "none",
              backgroundColor: "#EDE8E8",
              color: "gray",
              padding: "15px 20px",
              borderRadius: "8px",
            }}
            name="pray_request"
            onChange={(event) => handleChange(event)}
            values={requestForm.pray_request}
          ></textarea>
          <div>
            <button
              // type="submit"
              style={{
                backgroundColor: "#E10B0B",
                color: "white",
                fontSize: "18px",
                borderRadius: "8px",
                padding: "10px 40px",
                border: "none",
              }}
              onClick={submitPrayRequest}
            >
              Submit Prayer
            </button>
          </div>
 */}


            {/* </Box> */}

            {/* <select
            style={{
              width: "100%",
              padding: " 15px 20px",
              border: "none",
              backgroundColor: "#EDE8E8",
              borderRadius: "8px",
            }}
            name=" category_id"
            onChange={(event) =>
              setRequestForm({
                ...requestForm,
                category_id: event.target.value,
              })
            }
            value={requestForm.category_id}
          >
            <option disabled value="">
              Select prayer request
            </option>
            {prayerRequest?.map((request, index) => (
              <option key={index} value={request?.id}>
                {request?.name}
              </option>
            ))}
          </select> */}



          </Box>
        </Box>
        <Footer />
      </Page>
    </>
  );
};

export default PrayerRequest;