import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        count: 0,
        selectedTheme:1,
        numberKeys : [
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
            ],
        newlyUpdatedTheme: [{}],
        del_reset_theme: {},
        keypadTheme : 'hsl(223, 31%, 20%)',
        bodyBackground : 'hsl(222, 26%, 31%)',
        screen : 'hsl(224, 36%, 15%)',
        themeTxtColor : 'white',
        equalBtn: 'hsl(6, 63%, 50%)',
        togglerBgColor: 'hsl(223, 31%, 20%)'
    },
    reducers: {
    setSelectedTheme: (state, action) => {
        state.selectedTheme = action.payload.value;
        const numKeysTheme = state.numberKeys.map(key => {
            if ( state.selectedTheme === 1 && key.value !== 'DEL') {
                return {
                  ...key,
                  bgcolor: 'hsl(30, 25%, 89%)',
                  hover: 'white',
                  boxShadow: '0px 5px 1px -1px hsl(28, 16%, 65%)',
                  txtcolor: 'black'
                };
              }
            if ( state.selectedTheme === 2 && key.value !== 'DEL') {
              return {
                ...key,
                bgcolor: 'hsl(45, 7%, 89%)',
                hover: 'white',
                boxShadow: '0px 5px 1px -1px hsl(35, 11%, 61%)',
                txtcolor: 'black'
              };
            } else if (state.selectedTheme === 3 && key.value !== 'DEL') {
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

          const updatedTheme = numKeysTheme.map(obj => {
            if ( state.selectedTheme === 1 && obj.value === 'DEL') {
                return {
                    ...obj,
                    bgcolor:'hsl(225, 21%, 49%)', 
                    hover:'#9BA4C1', 
                    boxShadow: "0px 5px 1px -1px hsl(224, 28%, 35%)", 
                    txtcolor: 'white'
                }}
            else if ( state.selectedTheme === 2 && obj.value === 'DEL') {
              return {
                ...obj,
                bgcolor: 'hsl(185, 42%, 37%)',
                hover: 'hsl(185, 38%, 47%)',
                boxShadow: '0px 5px 1px -1px hsl(185, 58%, 25%)',
                txtcolor: 'white'
              }} else if (state.selectedTheme === 3 && obj.value === 'DEL') {
                return {
                  ...obj,
                  bgcolor: 'hsl(281, 89%, 26%)',
                  hover: 'hsl(281, 85%, 31%)',
                  boxShadow: '0px 5px 1px -1px hsl(285, 91%, 52%)',
                  txtcolor: 'white'
                };
              }
              return obj
            })
            state.numberKeys = [...updatedTheme]

            if (state.selectedTheme === 1) {
                state.bodyBackground = 'hsl(222, 26%, 31%)';
                state.screen = 'hsl(224, 36%, 15%)';
                state.themeTxtColor = 'white';
                state.keypadTheme = 'hsl(223, 31%, 20%)';
                state.equalBtn = 'hsl(6, 63%, 50%)';
                state.togglerBgColor = 'hsl(223, 31%, 20%)';
            } else if (state.selectedTheme === 2) {
                state.bodyBackground = 'hsl(0, 0%, 90%)';
                state.screen = 'white';
                state.themeTxtColor = 'hsl(221, 14%, 31%)';
                state.keypadTheme = 'hsl(0, 5%, 81%)';
                state.equalBtn = 'hsl(25, 98%, 40%)';
                state.togglerBgColor = 'hsl(0, 5%, 81%)';

            } else if (state.selectedTheme === 3) {
                state.bodyBackground = 'hsl(268, 75%, 9%)';
                state.screen = 'hsl(268, 71%, 12%)';
                state.themeTxtColor = 'hsl(52, 100%, 62%)';
                state.keypadTheme = 'hsl(268, 71%, 12%)';
                state.equalBtn = 'hsl(176, 100%, 44%)';
                state.togglerBgColor = 'hsl(268, 71%, 12%)';
            }
            
    }
}
});

export const { increment, decrement, setSelectedTheme  } = calculatorSlice.actions;
export const calculatorState = (state) => state.calc
export default calculatorSlice.reducer;