import {StyleSheet} from 'react-native'
import argonTheme from './argonTheme'

export const deepSquidInk = argonTheme.COLORS.ACTIVE;
export const linkUnderlayColor = '#FFF';
export const errorIconColor = '#DD3F5B';
export const textInputColor = argonTheme.COLORS.TEXT;
export const textInputBorderColor = argonTheme.COLORS.MUTED;
export const placeholderColor = argonTheme.COLORS.MUTED;
export const buttonColor = argonTheme.COLORS.ACTIVE;
export const disabledButtonColor = argonTheme.COLORS.BUTTON_DISABLED;

const AmplifyTheme = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
		backgroundColor: '#FFF',
	},
	section: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	sectionScroll: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 20,
	},
	sectionHeader: {
		width: '100%',
		marginBottom: 32,
		paddingTop: 20,
	},
	sectionHeaderText: {
		color: deepSquidInk,
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'OpenSans-regular'
	},
	sectionFooter: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 20,
	},
	sectionFooterLink: {
		fontSize: 14,
		color: buttonColor,
		alignItems: 'baseline',
		textAlign: 'center',
		fontFamily: 'OpenSans-regular'
	},
	sectionFooterLinkDisabled: {
		fontSize: 14,
		color: disabledButtonColor,
		alignItems: 'baseline',
		textAlign: 'center',
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
		width: '50%',
	},
	errorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	errorRowText: {
		marginLeft: 10,
		fontFamily: 'OpenSans-regular'
	},
	photo: {
		width: '100%',
	},
	album: {
		width: '100%',
	},
	button: {
		backgroundColor: buttonColor,
		alignItems: 'center',
		padding: 16,
	},
	buttonDisabled: {
		backgroundColor: disabledButtonColor,
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
		fontFamily: 'OpenSans-regular'
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
		fontFamily: 'OpenSans-regular'
	},
	inputLabel: {
		marginBottom: 8,
		fontFamily: 'OpenSans-regular'
	},
	phoneContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	phoneInput: {
		flex: 2,
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
		fontFamily: 'OpenSans-regular'
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
	signedOutMessage: {
		textAlign: 'center',
		padding: 20,
	},

	})

export {AmplifyTheme}