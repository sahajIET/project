import React from "react";
import { BiLogOut } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="px-4 font-nunito py-3">
      <div className="flex justify-end">
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500 rounded-md font-semibold cursor-pointer text-white">
          Logout <BiLogOut />
        </div>
      </div>
      <div className="mt-16 w-full flex items-center justify-center flex-col">
        <div className="w-[150px] h-[150px] rounded-full bg-gray-600" style={{background : `url(https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center/cover`}}></div>
        <div className="mt-4 text-2xl font-bold">Pratham Rasal</div>
        <div className="text-xs opacity-60">prasal@gmail.com</div>
        <div className="mt-5 px-8 py-1 rounded-md bg-black text-white font-semibold">
          Edit
        </div>
      </div>
      <div className="mt-12 px-3 flex items-center justify-between">
        <div className="shrink-0 flex items-center justify-center flex-col">
            <div className="font-bold text-lg">98</div>
            <div className="text-sm opacity-60">Posts</div>
        </div>
        <div className="shrink-0 flex items-center justify-center flex-col">
            <div className="font-bold text-lg">2.5k</div>
            <div className="text-sm opacity-60">Likes</div>
        </div>
        <div className="shrink-0 flex items-center justify-center flex-col">
            <div className="font-bold text-lg">38</div>
            <div className="text-sm opacity-60">Following</div>
        </div>
      </div>
      <div className="mt-12">
        <div className="font-bold text-lg">Pratham Rasal</div>
        <div className="mt-2 text-sm opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo libero perferendis ab, ex neque incidunt fugit consequatur deserunt consequuntur dolore distinctio autem ipsam dolor culpa rem. Culpa, quae impedit?</div>
      </div>
      <div className="w-full mt-10 gradient-button font-semibold text-lg rounded-md py-2 text-center">Create Post</div>
    </div>
  );
};

export default Profile;
