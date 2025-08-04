# 🏆 Leaderboard App with Firebase Integration

This is a React-based Leaderboard application that displays user rankings and allows simulated donations. When a **Donate** button is clicked, the corresponding user’s donation amount is increased in real-time using Firebase Firestore.

---

## 🔧 Features

- Display leaderboard of users with:
  - Name
  - Referral Code
  - Donation Amount
- Update donation amount on button click (+₹100)
- Firebase Firestore integration:
  - Store and retrieve user data
  - Update donations in real-time
- Prevent duplicate uploads using `localStorage`

---

## 📦 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Firebase Firestore
- **Deployment Ready:** ✅

---

## 🗃️ Project Structure

```
/src
  ├── components/
  │     └── LeaderBoard.jsx
  ├── backend/
  │     └── firebase.js
  ├── App.js
  └── index.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/leaderboard-app.git
cd leaderboard-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Update `src/backend/firebase.js` with your Firebase project credentials:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 📊 Usage

### 🔹 Initial Data Upload (One Time)

A sample leaderboard dataset can be uploaded using a custom function on first load. Use `localStorage` to prevent duplicate uploads:

```js
if (!localStorage.getItem("dataUploaded")) {
  leaderboardData.forEach(async (entry) => {
    await addDoc(collection(db, "leaderboard"), entry);
  });
  localStorage.setItem("dataUploaded", "true");
}
```

### 🔹 Fetching Leaderboard

Data is fetched using Firestore's `getDocs()` and sorted by `Donatation` amount.

### 🔹 Donation Update

Clicking the **"Donate"** button:

- Fetches the selected document
- Adds ₹100 to the current amount
- Updates Firestore using `updateDoc()`
- Reflects change instantly in UI

---

## ✨ Sample Firestore Document Structure

**Collection:** `leaderboard`  
**Each Document:**

```json
{
  "name": "Rahul Yadav",
  "referralCode": "GROW106",
  "Donatation": 1900
}
```

---

## 📸 UI Preview

> (You can add a screenshot here later if needed.)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)

