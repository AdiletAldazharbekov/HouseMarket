import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDz9rPBF4e3WxUMYAs8WUXJXs-gIP-5RS0",
	authDomain: "house-market-4957d.firebaseapp.com",
	projectId: "house-market-4957d",
	storageBucket: "house-market-4957d.appspot.com",
	messagingSenderId: "619231968278",
	appId: "1:619231968278:web:a6b2e2755b3e915ebb4937"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
