
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import axios from "axios";
//  import AsyncStorage from "@react-native-async-storage/async-storage";

// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');   
//     const [submit, setSubmit] = useState("LOG IN");

  

// const handleLogin = async () => {
//   setSubmit("LOG IN");

//   if (!email || !password) {
//     setErrorMessage("Username and Password cannot be empty.");
//     return false;
//   }
//   if (email.length < 3) {
//     setSubmit("LOG IN");
//     setErrorMessage("Username must be at least 3 characters long.");
//     return false;
//   }
//   if (password.length < 6) {
//     setSubmit("LOG IN");
//     setErrorMessage("Password must be at least 6 characters long.");
//     return false;
//   }

//   setErrorMessage("");
//   setSubmit("Signing in...");

//   try {
//     // ✅ Use correct request field names
//     const requestData = {
//       EmailId: email,
//       Password: password
//     };

//     const response = await axios.post(
//       'https://freeapi.miniprojectideas.com/api/JWT/login',
//       requestData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       }
//     );

//     console.log("✅ API Response:", response.data);

//     if (response.status === 200 && response.data?.result === true) {
//       const userData = response.data?.data;

//       // ✅ Store token and user data
//       await AsyncStorage.setItem('AuthToken', userData.token);
//       await AsyncStorage.setItem('RefreshToken', userData.refreshToken);
//       await AsyncStorage.setItem('UserEmail', userData.emailId);
//       await AsyncStorage.setItem('UserId', userData.userId.toString());

//       setSubmit("LOG IN");
//       Alert.alert("Success", "User logged in successfully!");
//       navigation.navigate('DashboardScreen');
//     } else {
//       setSubmit("LOG IN");
//       Alert.alert("Error",   "Login failed");
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     setSubmit("LOG IN");

//     if (error.response) {
//        setErrorMessage("Wrong User ID or Password");  
//           Alert.alert('Error', "Wrong User ID or Password"); // ✅ Optional alert popup
//     } else if (error.request) {
//       Alert.alert('Error', 'No response from server. Please check your connection.');
//     } else {
//       Alert.alert('Error', 'Login failed. Please try again.');
//     }
//   }
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Hello!</Text>

//       <View style={styles.inputContainer}>
//         {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           placeholder="Enter your email"
//           style={styles.input}
//           onChangeText={setEmail}
//           value={email}
//         />

//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           placeholder="Enter your password"
//           style={styles.input}
//           secureTextEntry
//           onChangeText={setPassword}
//           value={password}
//         />
//       </View>
      
//       {/* <View style={styles.checkboxContainer}>}
//           <checkboxLabel
//             value={rememberMe}
//             onValueChange={setRememberMe}
//           />
//           <Text style={styles.checkboxLabel}>Remember Me</Text>
//          </View> */}

//       <TouchableOpacity
//         style={[
//           styles.loginButton,
//           {
//             backgroundColor: submit === 'LOG IN' ? '#1177D1' : '#2c6e49',
//           },
//         ]}
//         onPress={handleLogin}
//         disabled={submit !== 'LOG IN'}
//       >
//         <Text style={styles.loginButtonText}>{submit || 'LOG IN'}</Text>
//       </TouchableOpacity>

//       <Text style={styles.orText}> </Text>

//       <View style={styles.socialContainer}>
//         <TouchableOpacity style={styles.socialButton}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
//             style={styles.socialIcon}
//           />
//           <Text style={styles.socialButtonText}>Google</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.socialButton}>
//           <Image
//             source={{ uri: 'https://icons8.com/icon/30840/apple-inc' }}
//             style={styles.socialIcon}
//           />
//           <Text style={styles.socialButtonText}>Apple</Text>
//         </TouchableOpacity>
//       </View>

//       <Image
//         source={require('../assets/NIC.jpg')}
//         style={styles.NICicon}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     paddingHorizontal: 25,
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   loginButton: {     backgroundColor: '#2c6e49',     borderRadius: 8,     height: 50,     justifyContent: 'center',     alignItems: 'center',     marginTop: 10,   },   loginButtonText: {     color: 'white',     fontSize: 16,     fontWeight: 'bold',   },

//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },

//    errorText: {     color: 'red',     fontSize: 14,     textAlign: 'center',     marginBottom: 10,     fontWeight: 'bold'   },
//   subHeader: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     marginVertical: 6,
//     fontWeight: '600',
//   },
//   input: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     fontSize: 16,
//   },
//   loginButton: {
//     backgroundColor: '#00008B', // a nice iOS-style blue
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   orText: {
//     textAlign: 'center',
//     marginVertical: 24,
//     color: 'gray',
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f6f6f6',
//     padding: 12,
//     borderRadius: 10,
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 8,
//   },
//   socialIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },

//   NICicon: {
//     width: 250,
//     height: 150,
//     marginTop: 20,
//     alignSelf: 'center',
    
   
    

//   }
// });

// export default LoginScreen;




// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submit, setSubmit] = useState("LOG IN");



  const handleLogin = async () => {
    setSubmit("LOG IN");
  
    // Input validation
    if (!userId || !password) {
      setErrorMessage("userId and Password cannot be empty.");
      return false;
    }
  
    if (userId.length < 3) {
      setSubmit("LOG IN");
      setErrorMessage("userId must be at least 3 characters long.");
      return false;
    }
  
    if (password.length < 6) {
      setSubmit("LOG IN");
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }
  
    setErrorMessage("");
    setSubmit("Signing in...");
  
    try {
      // ✅ Use correct request field names
      const requestData = {
        EmailId: userId,
        Password: password,
      };
  
      const response = await axios.post(
        'https://freeapi.miniprojectideas.com/api/JWT/login',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log("✅ API Response:", response.data);
  
      // ✅ Check login success
      if (response.status === 200 && response.data?.result === true) {
        const userData = response.data?.data;
  
        // ✅ Store token and user data
        await AsyncStorage.setItem('AuthToken', userData.token);
        await AsyncStorage.setItem('RefreshToken', userData.refreshToken);
        await AsyncStorage.setItem('UserEmail', userData.emailId);
        await AsyncStorage.setItem('UserId', userData.userId.toString());
  
        setSubmit("LOG IN");
        Alert.alert("Success", "User logged in successfully!");
        navigation.navigate('DashboardScreen');
      } else {
        setSubmit("LOG IN");
        Alert.alert("Error","Login failed");
      }
  
    } catch (error) {
      console.error('Login error:', error);
      setSubmit("LOG IN");
  
      if (error.response) {
        setErrorMessage("Wrong User ID or Password"); // ✅ Static error message
      Alert.alert('Error', "Wrong User ID or Password"); // ✅ Optional alert popup
      } else if (error.request) {
        Alert.alert('Error', 'No response from server. Please check your connection.');
      } else {
        Alert.alert('Error', 'Login failed. Please try again.');
      }
    }
  };
  

  return (
    <LinearGradient
      colors={['#6DD5FA', '#2980B9']}
      style={styles.container}
    >
      <Image
        source={require('../assets/NIC.jpg')}
        style={styles.icon}
      />
      <View style={styles.inputContainer}>


        <TextInput
          placeholder="User ID"
          placeholderTextColor="#333"
          style={styles.input}
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#333"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? ( <Text style={styles.errorText}>{errorMessage}</Text> ) : null}
        <TouchableOpacity style={[styles.loginButton, { backgroundColor: submit === 'LOG IN' ? '#BB2A25' : '#2c6e49' }]} onPress={handleLogin} disabled={submit !== 'LOG IN'}>
  <Text style={styles.loginButtonText}>{submit}</Text>
</TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderRadius: 50,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2c3e50',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2c6e49',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  
  
});

export default LoginScreen;
