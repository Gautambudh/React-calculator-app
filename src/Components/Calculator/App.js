
import { TextField, Typography, Container, Box, Grid, Button } from '@mui/material';
import React from 'react';
import ThemeToggler from './Slider';
import { setSelectedTheme, calculatorState} from "./reduxSlice";
import { useDispatch, useSelector} from "react-redux";

const keys = [
{ value:'7', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'8', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'9', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'DEL', bgcolor:'hsl(225, 21%, 49%)', hover:'#9BA4C1', boxShadow: "0px 5px 1px -1px hsl(224, 28%, 35%)", txtcolor: 'white'},
{ value:'4', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'5', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'6', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'+', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'1', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'2', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'3', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'-', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'.', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'0', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'/', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
{ value:'x', bgcolor:'hsl(30, 25%, 89%)', hover:'white', boxShadow: "0px 5px 1px -1px hsl(28, 16%, 65%)", txtcolor: 'black'},
]

const App = () => {
  const [ result, setResult ] = React.useState("")
  const dispatch = useDispatch();
  const { selectedTheme } = useSelector(calculatorState);

  
// console.log(del);
// const numbKeys = keys.filter( obj => {return obj.bgcolor === 'hsl(30, 25%, 89%)'} )
// // console.log(numbKeys)
const selectedThemeKeys = keys.map(key => {
  if ( selectedTheme === 2 && key.value !== 'DEL') {
    return {
      ...key,
      bgcolor: 'hsl(45, 7%, 89%)',
      hover: 'white',
      boxShadow: '0px 5px 1px -1px hsl(35, 11%, 61%)'
    };
  } else if (selectedTheme === 3 && key.value !== 'DEL') {
    return {
      ...key,
      bgcolor: 'hsl(268, 47%, 21%)',
      hover: 'cyan',
      boxShadow: '0px 5px 1px -1px hsl(290, 70%, 36%)',
      txtcolor: 'hsl(52, 100%, 62%)'
    };
  }
  return key;
});

const updatedTheme = selectedThemeKeys.map(obj => {
  if ( selectedTheme === 2 && obj.value === 'DEL') {
    return {
      ...obj,
      bgcolor: 'hsl(185, 42%, 37%)',
      hover: 'hsl(185, 38%, 47%)',
      boxShadow: '0px 5px 1px -1px hsl(185, 58%, 25%)'
    }} else if (selectedTheme === 3 && obj.value === 'DEL') {
      return {
        ...obj,
        bgcolor: 'hsl(281, 89%, 26%)',
        hover: 'hsl(281, 85%, 31%)',
        boxShadow: '0px 5px 1px -1px hsl(285, 91%, 52%)'
      };
    }
    return obj;
  })
  console.log(updatedTheme);

  return (
    <>
    <Box role="main" sx={{height:'100vh', backgroundColor:'hsl(222, 26%, 31%)', display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Container disableGutters maxWidth="xs" sx={{px:{xs:2, md:4}, border:1}}>
      <Box sx={{display:'flex', justifyContent:'space-between', py:1, alignItems:'center', mb:1}}>
        <Typography variant='h4' component='h4' sx={{pt:3, color:'hsl(0, 0%, 100%)'}}>calc</Typography>
        <Box role="theme-selector" sx={{ display:'flex', alignItems:'center'}}>
        <Typography variant='subtitle2' component='p' sx={{pt:4, color:'hsl(0, 0%, 100%)'}}>THEME</Typography>
        <Box component='span' sx={{ml:2, display:'flex', alignItems:'center', flexDirection:'column', width:'fit-content'}}>
        <Typography variant='caption' component='caption' 
        sx={{letterSpacing:25, pl:1.4, pb:0, width:90, color:'hsl(0, 0%, 100%)'}}>123</Typography>
        <ThemeToggler />
        </Box>
        </Box>
      </Box>

    {/* Result screen */}
    <TextField variant="standard" fullWidth
      value={12456}
        // onChange={(e) => dispatch(setCardholderName({ value: e.target.value }))}
        sx={{input:{py:2, px:2, verticalAlign:'center',color:'white',
            backgroundColor:'hsl(224, 36%, 15%)',
            textAlign:'right',
            fontSize:'3rem',
            borderRadius:3, cursor:'default'}
      }}
      InputProps={{ disableUnderline: true, readOnly: true, }}
      />

    {/* Keypad container */}
      <Grid container columns={{ xs:12 }}
      sx={{backgroundColor:'hsl(223, 31%, 20%)', borderRadius:3, my:2, gap:2, justifyContent:'space-evenly', px:2, py:2.5}}>
        {updatedTheme.map((item, index) => (
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
      sx={{width:'47%', py:1, backgroundColor:`${updatedTheme[3].bgcolor}`, fontSize:'1.2rem',
      fontWeight:'bold', boxShadow:`${updatedTheme[3].boxShadow}`,
      ":hover":{backgroundColor:`${updatedTheme[3].hover}`, 
      boxShadow:`${updatedTheme[3].boxShadow}`}}}>Reset</Button>
      <Button variant="contained" 
      sx={{width:'47%', py:1, 
      backgroundColor:`hsl(6, 63%, 50%)`, 
      fontSize:'1.2rem',
      fontWeight:'bold', boxShadow: "0px 5px 1px -1px hsl(6, 70%, 34%)",
      ":hover":{backgroundColor:'#d86d61', boxShadow: "0px 5px 1px -1px hsl(6, 70%, 34%)"}}}>=</Button>
      </Box>
      </Grid>
    
    </Container>
    </Box>
    </>
  )
}

export default App