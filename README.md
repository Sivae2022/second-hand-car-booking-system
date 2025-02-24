# second-hand-car-booking-system
React js , firebase , tailwind css

# Firebase Authentication React Project

This is a React project that uses Firebase Authentication for user login, registration, and profile management.

## 📌 Features
- User authentication using Firebase (Login, Logout)
- User profile details retrieval from Firestore
- Protected routes for authenticated users

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sivae2022/repository.git
cd repository
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Navigate to **Project Settings** → **General** → **Your apps**.
4. Register a new web app and get Firebase config.
5. Enable **Authentication** → **Sign-in method** → Enable Email/Password authentication.
6. Enable **Firestore Database** → Start in test mode.

### 4️⃣ Configure Firebase
Create a `.env` file in the root directory and add:
```env
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
```

Create `firebase.js` in the `src` folder and add:
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 5️⃣ Run the Project
```sh
npm start
```

---

## 🔗 Folder Structure
```
project-folder/
│-- src/
│   │-- components/
│   │-- firebase.js
│   │-- App.js
│-- public/
│-- .env
│-- package.json
```

---

## 📜 Scripts
| Command | Description |
|---------|-------------|
| `npm start` | Runs the project in development mode |
| `npm run build` | Builds the project for production |
| `npm test` | Runs the tests |

---

## 🔥 Firebase Services Used
- **Authentication** (Email/Password, Google Sign-in)
- **Firestore Database** (Storing user data)

---

## 🛠️ Troubleshooting
- If Firebase throws permission errors, check **Firestore Rules**:
```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /Users/{userId} {
      allow read, write: if request.auth != null;
    }
  }
}
```
- If `.env` variables are not working, restart the server after saving the file.

---

## 📜 License
This project is open-source and free to use.

---

## 👨‍💻 Author
Developed by siva

---
