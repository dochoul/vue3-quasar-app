import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'src/boot/firebase';

//* 로그인 구글
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log('user', result.user);
}

// import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';

// const auth = getAuth();
// getRedirectResult(auth)
//   .then(result => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch(error => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
