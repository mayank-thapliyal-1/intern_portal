import React, { useEffect, useState } from 'react';
import { collection, getDocs,addDoc } from 'firebase/firestore';
import {db} from '../backend/firebase.js'


const LeaderBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'leaderboard'));
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });

        // Sort by amountRaised in descending order
        users.sort((a, b) => b.amountRaised - a.amountRaised);
        setData(users);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className=" w-full sm:w-[97vw] mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#4157ff]">🏆 Leaderboard</h2>
      <div className="grid grid-cols-3 font-semibold border-b pb-2 mb-2 text-gray-700">
        <span>Rank</span>
        <span>Name</span>
        <span>Amount Raised</span>
      </div>
      {data.map((user, index) => (
        <div
          key={index}
          className="grid grid-cols-3 py-2 border-b items-center text-gray-800 hover:bg-gray-50"
        >
          <span className="font-medium">#{index + 1}</span>
          <span>{user.name}</span>
          <span>₹{user.amountRaised}</span>
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
