import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { setSelectedTheme, calculatorState} from "./reduxSlice";
import { useDispatch, useSelector} from "react-redux";

export default function ThemeToggler() {
  const dispatch = useDispatch();
  const { selectedTheme } = useSelector(calculatorState);
  // console.log(selectedTheme);
  return (
    <Box
      sx={{
        width: 95,
        height:30,
        backgroundColor: "hsl(223, 31%, 20%)",
        px: 2,
        py: 0,
        borderRadius: 7
      }}
    >
      <Slider
        aria-label="Temperature"
        value={selectedTheme}
        onChange={(e) => {dispatch(setSelectedTheme({value: e.target.value}))}}
        step={1}
        min={1}
        max={3}
        sx={{
            "& .MuiSlider-sizeMedium":{
                p:0,
                height:0
            },
          "& .MuiSlider-thumb": {
            color: `${selectedTheme === 3 ? `hsl(176, 100%, 44%)` : 'hsl(25, 98%, 40%)'}`,
            height: 15,
            width: 15,
            border: "none",
            boxShadow: "none"
          },
          "& .MuiSlider-track": {
            opacity: 0
          },
          "& .MuiSlider-rail": {
            opacity: 0
          },
          ".MuiSlider-thumb.Mui-focusVisible": {
            boxShadow: "none"
          },
          ".MuiSlider-thumb:hover": {
            boxShadow: "none"
          }
        }}
      />
    </Box>
  );
}
