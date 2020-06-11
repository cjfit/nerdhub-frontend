import argonTheme from "../constants/argonTheme";
import {AmplifyTheme} from 'aws-amplify-react-native';

const mySectionHeader = Object.assign({}, AmplifyTheme.sectionHeaderText, 
    {
    	color: argonTheme.COLORS.ACTIVE, 
		fontFamily: 'OpenSans-regular',
    });
  
const myButton = Object.assign({}, AmplifyTheme.button, 
	{
		backgroundColor: argonTheme.COLORS.ACTIVE, 
		fontFamily: 'OpenSans-bold'
	});

const myInputText = Object.assign({}, AmplifyTheme.inputText, 
	{
		color: argonTheme.COLORS.ACTIVE
	});
const mySectionBody = Object.assign({}, AmplifyTheme.sectionBody, 
	{
		color: argonTheme.COLORS.RACKLEY
	});

const myTheme = Object.assign({}, AmplifyTheme, 
	{
	sectionHeaderText: mySectionHeader,
	button: myButton,
	inputText: myInputText,
	sectionBody: mySectionBody,
	}
  
  );
export default myTheme;