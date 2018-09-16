import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    map: {
      height: '100%',
      width: '100%',
    },
    shadow: {
      borderWidth: 1,
      borderRadius: 35,
      borderColor: 'lightgrey',
      borderBottomWidth: 0,
      backgroundColor:'#f5f5f5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 2,
    },
    icon_button: {
      backgroundColor:'#f5f5f5',
      margin: 0,
      padding: 10,
      borderWidth:1,
      borderColor:'lightgrey',
    },
    ml10: {
      marginLeft: 10,
    },
    mr10: {
      marginRight: 20,
    },
    mr20: {
      marginRight: 20,
    },
    map_nav: {
      justifyContent: 'center',
      position: "absolute",
      top: 20,
      right: 30,
      width: "100%",
      flex: 1,
      flexDirection: 'row',
    },
    header: {
      backgroundColor: 'transparent',
      height: 48
    },
    header_icon: {
      fontSize: 24
    },
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
    },
    content: {
      padding: 20
    },
    backdrop: {
    },
    menuOptions: {
      padding: 12,
    },
    menuTrigger: {
      padding: 5,
    },
    triggerText: {
      fontSize: 20,
    },
    contentText: {
      fontSize: 18,
    },
    loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      position: 'absolute',
      width: 222,
      height: 195
    },
    title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
    },
    input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#000'
    },
    buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
    },
    buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
    },
    loginButton:{
      backgroundColor:  '#2980b6',
      color: '#000'
    }
});

export default styles;
