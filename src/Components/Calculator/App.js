
import { TextField, Typography, Container, Box, Grid, Button } from '@mui/material';
import React from 'react';
import ThemeToggler from './Slider';
import { setSelectedTheme, calculatorState} from "./reduxSlice";
import { useDispatch, useSelector} from "react-redux";


const App = () => {
  const [ result, setResult ] = React.useState("")
  const dispatch = useDispatch();
  const { selectedTheme, numberKeys, bodyBackground, screen, themeTxtColor, keypadTheme, equalBtn } = useSelector(calculatorState);


  return (
    <>
    <Box role="main" sx={{height:'100vh', backgroundColor:`${bodyBackground}`, display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Container disableGutters maxWidth="xs" sx={{px:{xs:2, md:4}}}>
      <Box sx={{display:'flex', justifyContent:'space-between', py:1, alignItems:'center', mb:1}}>
        <Typography variant='h4' component='h4' sx={{pt:3, color:`${themeTxtColor}`}}>calc</Typography>
        <Box role="theme-selector" sx={{ display:'flex', alignItems:'center'}}>
        <Typography variant='subtitle2' component='p' sx={{pt:4, color:`${themeTxtColor}`}}>THEME</Typography>
        <Box component='span' sx={{ml:2, display:'flex', alignItems:'center', flexDirection:'column', width:'fit-content'}}>
        <Typography variant='caption' component='caption' 
        sx={{letterSpacing:25, pl:1.4, pb:0, width:90, color:`${themeTxtColor}`}}>123</Typography>
        <ThemeToggler />
        </Box>
        </Box>
      </Box>

    {/* Result screen */}
    <TextField variant="standard" fullWidth
      value={12456}
        // onChange={(e) => dispatch(setCardholderName({ value: e.target.value }))}
        sx={{input:{py:2, px:2, verticalAlign:'center',color:`${themeTxtColor}`,
            backgroundColor:`${screen}`,
            textAlign:'right',
            fontSize:'3rem',
            borderRadius:3, cursor:'default'}
      }}
      InputProps={{ disableUnderline: true, readOnly: true, }}
      />

    {/* Keypad container */}
      <Grid container columns={{ xs:12 }}
      sx={{backgroundColor:`${keypadTheme}`, borderRadius:3, my:2, gap:2, justifyContent:'space-evenly', px:2, py:2.5}}>
        {numberKeys?.map((item, index) => (
          <Grid item xs={2} key={index} 
          sx={{textAlign:'center', }}>
            <Button variant="contained" 
            sx={{py:1, 
            boxShadow:`${item.boxShadow}`,
            backgroundColor:`${item.bgcolor}`, 
            color:`${item.txtcolor}`,
            fontSize:'1.2rem',
            fontWeight:'bold',
            ":hover":{backgroundColor:`${item.hover}`, 
            boxShadow:`${item.boxShadow}`}}}>{item.value}</Button>
          </Grid>
        ))}
        <Box sx={{display:'flex', width:'100%', pl:1.5, pr:0.8,  justifyContent:'space-between'}}>
      <Button variant="contained" 
      sx={{width:'47%', py:1, backgroundColor:`${numberKeys[3].bgcolor}`, fontSize:'1.2rem',
      fontWeight:'bold', boxShadow:`${numberKeys[3].boxShadow}`,
      ":hover":{backgroundColor:`${numberKeys[3].hover}`, 
      boxShadow:`${numberKeys[3].boxShadow}`}}}>Reset</Button>
      <Button variant="contained" 
      sx={{width:'47%', py:1, 
      backgroundColor:`${equalBtn}`, 
      fontSize:'1.2rem',
      fontWeight:'bold', boxShadow: "0px 5px 1px -1px hsl(6, 70%, 34%)",
      ":hover":{backgroundColor:`${equalBtn}`, boxShadow: "0px 5px 1px -1px hsl(6, 70%, 34%)"}}}>=</Button>
      </Box>
      </Grid>
    
    </Container>
    </Box>
    </>
  )
}

export default App