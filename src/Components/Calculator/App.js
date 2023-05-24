
import { TextField, Typography, Container, Box, Grid, Button } from '@mui/material';
import React from 'react';
import ThemeToggler from './Slider';

const keys = [
{ value:'7', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'8', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'9', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'DEL', bgcolor:'hsl(225, 21%, 49%)', hover:'#9BA4C1'},
{ value:'4', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'5', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'6', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'+', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'1', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'2', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'3', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'-', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'.', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'0', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'/', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
{ value:'x', bgcolor:'hsl(30, 25%, 89%)', hover:'white'},
]

const App = () => {
  const [ result, setResult ] = React.useState("")

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
        {keys.map((item, index) => (
          <Grid item xs={2} key={index} 
          sx={{textAlign:'center', }}>
            <Button variant="contained" 
            sx={{py:1, 
            backgroundColor:`${item.bgcolor}`, 
            color:'black',
            fontSize:'1.2rem',
            fontWeight:'bold',
            ":hover":{backgroundColor:`${item.hover}`}}}>{item.value}</Button>
          </Grid>
        ))}
        <Box sx={{display:'flex', width:'100%', pl:1.5, pr:0.8,  justifyContent:'space-between'}}>
      <Button variant="contained" sx={{width:'47%', py:1, backgroundColor:'hsl(225, 21%, 49%)', fontSize:'1.2rem',
            fontWeight:'bold', ":hover":{backgroundColor:'#9BA4C1'} }}>Reset</Button>
      <Button variant="contained" sx={{width:'47%', py:1, backgroundColor:'hsl(6, 63%, 50%)', fontSize:'1.2rem',
            fontWeight:'bold', ":hover":{backgroundColor:'#d86d61'}}}>=</Button>
      </Box>
      </Grid>
    
    </Container>
    </Box>
      
    </>
  )
}

export default App