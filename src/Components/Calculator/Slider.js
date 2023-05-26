import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { setSelectedTheme, calculatorState} from "./reduxSlice";
import { useDispatch, useSelector} from "react-redux";
import { styled } from '@mui/system';

const Root = styled('span')`
  padding:0;
  position: absolute;
  display: inline-block;
  width: 62px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export default function ThemeToggler() {
  const dispatch = useDispatch();
  const { selectedTheme, togglerBgColor } = useSelector(calculatorState);
  // console.log(selectedTheme);
  return (
    <Box
      sx={{
        width: 95,
        height:27,
        backgroundColor:`${togglerBgColor}`,
        px: 2,
        py: 0.4,
        borderRadius: 7,
        position:'relative'
      }}
    >
      <Slider
        aria-label="Temperature"
        value={selectedTheme}
        onChange={(e) => {dispatch(setSelectedTheme({value: e.target.value}))}}
        step={1}
        min={1}
        max={3}
        marks
        sx={{
          "& .MuiSlider-thumb": {
            color: `${selectedTheme === 3 ? `hsl(176, 100%, 44%)` : 'hsl(25, 98%, 40%)'}`,
            height: 15,
            width: 15,
            border: "none",
            boxShadow: "none"
          },
          "& .MuiSlider-track": {
            backgroundColor:`${togglerBgColor}`,
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
        slots={{ root: Root}}
      />
    </Box>
  );
}
