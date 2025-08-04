import React, { useEffect, useState } from "react";
import LeaderBoard from "./LeaderBoard";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../backend/firebase";
const Dashboard = () => {
  const [user] = useState({
    name: "Mayank Thapliyal",
    referralCode: "mayank2025",
    totalDonations: 1250,
  });
  const [data, setData] = useState([]);

  // Fetch leaderboard on mount
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const id = "jbL0bbf8lOMfuhTHjqWx";
      try {
        const docRef = doc(db, "User", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchLeaderboard();
  }, []);
  const handleDonate = async (currentAmount) => {
    const id = "jbL0bbf8lOMfuhTHjqWx";
    const newAmount = Number(currentAmount) + 100; // Increase by ₹100
    try {
      const docRef = doc(db, "User", id);
      await updateDoc(docRef, { Donatation: newAmount });

      // Update local state
      setData((prevData) => ({
        ...prevData,
        Donatation: newAmount,
      }));
    } catch (error) {
      console.error("Donation update error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#4157ff] text-white p-6">
      <header className="text-3xl font-bold mb-8">Growtern Dashboard</header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white text-[#4157ff] rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Intern Info</h2>
          <p className="mt-2 py-2.5">
            Name: <span className="font-medium ">{data.name}</span>
          </p>
          <p>
            Referral Code:{" "}
            <span className="font-mono bg-[#4157ff] text-white px-2 py-1 rounded">
              {data.reffercode}
            </span>
          </p>
        </div>

        {/* Donations Card  */}
        <div className="bg-white text-[#4157ff] rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Total Donations Raised</h2>
          <p className="mt-4 text-3xl font-bold">₹{data.Donatation}</p>
          <button
            onClick={() => handleDonate(data.Donatation)}
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded mt-2"
          >
            Donate ₹100
          </button>
        </div>

        {/* Rewards Section */}
        <div className="bg-white text-[#4157ff] rounded-2xl p-6 shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Rewards & Unlockables</h2>
          <div className="space-y-4">
            <div className={`flex items-center justify-between p-5 rounded-3xl hover:scale-101 cursor-pointer delay-100 ${data.Donatation>1000?"bg-blue-500 text-white":""} `}>
              <span>🎁 Reward 1: Intern T-Shirt</span>
              <span className="text-sm">Unlock at ₹1000</span>
            </div>
            <div className={`flex items-center justify-between p-5 rounded-3xl hover:scale-101 cursor-pointer delay-100 ${data.Donatation>2000?"bg-blue-500 text-white":""} `}>
              <span>🎉 Reward 2: Amazon Voucher</span>
              <span className="text-sm">Unlock at ₹2000</span>
            </div>
            <div className={`flex items-center justify-between p-5 rounded-3xl hover:scale-101 cursor-pointer delay-100 ${data.Donatation>5000?"bg-blue-500 text-white":""} `}>
              <span>🏆 Reward 3: Certificate of Appreciation</span>
              <span className="text-sm">Unlock at ₹5000</span>
            </div>
          </div>
        </div>
        <LeaderBoard />
      </div>
    </div>
  );
};

export default Dashboard;
