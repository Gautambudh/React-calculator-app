
import { TextField, Typography, Container, Box, Grid, Button } from '@mui/material';
import React from 'react';
import ThemeToggler from './Slider';
import { setSelectedTheme, calculatorState} from "./reduxSlice";
import { useDispatch, useSelector} from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const { selectedTheme, numberKeys, bodyBackground, screen, themeTxtColor, keypadTheme, equalBtn } = useSelector(calculatorState);
  const [ result, setResult ] = React.useState("");

  const handleClick = (e) => {
    if (result == 'Error') {
      setResult(e.target.name);
    } else 
    setResult(result.concat(e.target.name));
  }
  
  const reset = () => {
    setResult("")
  }

  const calculate = () =>{
    try {
      let output = Function("return " + result)();
      if (result.includes('.') || output.toString().includes('.')) {  // checking if any input contains decimal '.' , if so then setting output upto 2 decimal
        setResult(output.toFixed(2).toString());
      } else {
        setResult(output.toString()); // setting output with no decimal or say whole number
      }
    } catch (err) {
      setResult("Error")
    }
  }
  

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
      value={result}
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
      // rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      sx={{backgroundColor:`${keypadTheme}`, borderRadius:3, my:2, 
      // gap:2, justifyContent:'space-evenly',
      pl:{sm:2, xs:0.5}, pr:{sm:2, xs:1},
      py:2.5}}>
        {numberKeys?.map((item, index) => (
          <Grid item xs={3} key={index} 
          sx={{textAlign:'center', }}>
            <Button onClick={(e) =>
              (item.value !== 'DEL' ? handleClick(e) : setResult(result.slice(0, -1)))
              }
            variant="contained" 
            name={item.value === 'x' ? '*' : item.value}
            sx={{py:1, mb:2,
            boxShadow:`${item.boxShadow}`,
            backgroundColor:`${item.bgcolor}`, 
            color:`${item.txtcolor}`,
            fontSize:'1.2rem',
            fontWeight:'bold',
            ":hover":{backgroundColor:`${item.hover}`, 
            boxShadow:`${item.boxShadow}`}}}>{item.value}</Button>
          </Grid>
        ))}
        <Grid container columns={{ xs:12 }} className='extra-small-margin'
      sx={{
        // border:'1px solid yellow', 
      mx:1,
      // gap:2, justifyContent:'space-evenly',
      py:1}}>
          <Grid item xs={6} sx={{}}>
          <Button variant="contained" onClick={reset}
            sx={{
              width:'95%', 
              mr:1,
            py:1, backgroundColor:`${numberKeys[3].bgcolor}`, fontSize:'1.2rem',
            fontWeight:'bold', boxShadow:`${numberKeys[3].boxShadow}`,
            ":hover":{backgroundColor:`${numberKeys[3].hover}`, 
            boxShadow:`${numberKeys[3].boxShadow}`}}}>Reset</Button>
          </Grid>

          <Grid item xs={6} sx={{}}>
          <Button variant="contained" 
            onClick={calculate}
            sx={{
              width:'95%', 
            py:1, ml:1,
            backgroundColor:`${equalBtn}`, 
            color:`${selectedTheme === 3 ? 'black' : 'white'}`,
            fontSize:'1.2rem',
            fontWeight:'bold', 
            boxShadow: `${selectedTheme === 3 ? '0px 5px 1px -1px hsl(177, 92%, 70%)' : '0px 5px 1px -1px hsl(6, 70%, 34%)'}`,
            ":hover":{backgroundColor:`${selectedTheme === 3 ? '#04f2e3' : '#db4f3f'}`, 
            boxShadow: `${selectedTheme === 3 ? '0px 5px 1px -1px hsl(177, 92%, 70%)' 
            : '0px 5px 1px -1px hsl(6, 70%, 34%)'}`
            }}}>=</Button>
          </Grid>
          </Grid>
        {/* <Box sx={{display:'flex', width:'100%', px:1, 
        
        }}>
      <Button variant="contained" onClick={reset}
      sx={{
        width:'50%', 
        mr:1,
      py:1, backgroundColor:`${numberKeys[3].bgcolor}`, fontSize:'1.2rem',
      fontWeight:'bold', boxShadow:`${numberKeys[3].boxShadow}`,
      ":hover":{backgroundColor:`${numberKeys[3].hover}`, 
      boxShadow:`${numberKeys[3].boxShadow}`}}}>Reset</Button>
      <Button variant="contained" 
      onClick={calculate}
      sx={{
        width:'50%', 
      py:1, ml:1,
      backgroundColor:`${equalBtn}`, 
      color:`${selectedTheme === 3 ? 'black' : 'white'}`,
      fontSize:'1.2rem',
      fontWeight:'bold', 
      boxShadow: `${selectedTheme === 3 ? '0px 5px 1px -1px hsl(177, 92%, 70%)' : '0px 5px 1px -1px hsl(6, 70%, 34%)'}`,
      ":hover":{backgroundColor:`${selectedTheme === 3 ? '#04f2e3' : '#db4f3f'}`, 
      boxShadow: `${selectedTheme === 3 ? '0px 5px 1px -1px hsl(177, 92%, 70%)' 
      : '0px 5px 1px -1px hsl(6, 70%, 34%)'}`
      }}}>=</Button>
      </Box> */}
      </Grid>
    
    </Container>
    </Box>
    </>
  )
}

export default App

// pl:1.5, pr:{md:0.8, xs:0.2},  
        // justifyContent:'space-between'