"use client";
import React, { useState } from "react";
import undraw_sign_up_n6im from "../../assets/undraw_sign_up_n6im.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";


const Signup = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://www.bing.com/images/search?view=detailV2&ccid=Gfp0lwE6&id=A93A881CEFCDB707F02F6FF66859A0C8BC178ED7&thid=OIP.Gfp0lwE6h7139625a-r3aAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.19fa7497013a87bd77f7adb96beaf768%3frik%3d144XvMigWWj2bw%26riu%3dhttp%253a%252f%252fwww.pngall.com%252fwp-content%252fuploads%252f5%252fUser-Profile-PNG-High-Quality-Image.png%26ehk%3d%252bat%252brmqQuJrWL609bAlrUPYgzj%252b%252f7L1ErXRTN6ZyxR0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=Profile+Logo&simid=608013975039453159&FORM=IRPRST&ck=DD971D1E34F5D3145D628154A01A54F2&selectedIndex=16&itb=1",
  });

  const doSignup = async (e) => {
    e.preventDefault();

    if (data.name.trim() === "" || data.name == null) {
      toast.error("Name is required", {
        position: "top-right",
      });
      return;
    }

    try {
      const signupData = await signUp(data);
      console.log(signupData);
      toast.success("User registered successfully !!", {
        position: "top-center",
      });
      
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://www.bing.com/images/search?view=detailV2&ccid=Gfp0lwE6&id=A93A881CEFCDB707F02F6FF66859A0C8BC178ED7&thid=OIP.Gfp0lwE6h7139625a-r3aAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.19fa7497013a87bd77f7adb96beaf768%3frik%3d144XvMigWWj2bw%26riu%3dhttp%253a%252f%252fwww.pngall.com%252fwp-content%252fuploads%252f5%252fUser-Profile-PNG-High-Quality-Image.png%26ehk%3d%252bat%252brmqQuJrWL609bAlrUPYgzj%252b%252f7L1ErXRTN6ZyxR0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=Profile+Logo&simid=608013975039453159&FORM=IRPRST&ck=DD971D1E34F5D3145D628154A01A54F2&selectedIndex=16&itb=1",
      });
      

      router.push("/login");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast.error("Failed to register user: User not found", {
          position: "top-center",
        });
      } else {
        toast.error("Failed to register user", {
          position: "top-center",
        });
      }
    }
  };

  const resetForm = async () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://www.bing.com/images/search?view=detailV2&ccid=Gfp0lwE6&id=A93A881CEFCDB707F02F6FF66859A0C8BC178ED7&thid=OIP.Gfp0lwE6h7139625a-r3aAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.19fa7497013a87bd77f7adb96beaf768%3frik%3d144XvMigWWj2bw%26riu%3dhttp%253a%252f%252fwww.pngall.com%252fwp-content%252fuploads%252f5%252fUser-Profile-PNG-High-Quality-Image.png%26ehk%3d%252bat%252brmqQuJrWL609bAlrUPYgzj%252b%252f7L1ErXRTN6ZyxR0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=Profile+Logo&simid=608013975039453159&FORM=IRPRST&ck=DD971D1E34F5D3145D628154A01A54F2&selectedIndex=16&itb=1",
    });
  };

  return (
    <div className="grid grid-cols-12 relative">
      <div className="p-5 shadow-sm col-span-4  col-start-1 absolute left-9 top-40">
        <Image src={undraw_sign_up_n6im} alt="svg file" />
      </div>
      <div className="col-span-4 col-start-6 border-r-emerald-300 p-5 bg-gray-800 rounded-lg shadow-[0px_0px_15px_10px_#1a202c] mt-10">
        <div className="py-5">
          <h1 className="text-3xl text-center font-semibold">Signup here !!</h1>
          <form action="#!">
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm mb-2 ps-3 font-semibold"
              >
                Username:
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-full bg-gray-950 focus:ring-red-400 border border-gray-400 focus:shadow-[0px_0px_10px_1px_#4c51bf] "
                id="user_name"
                name="Username"
                placeholder="Enter your Name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm  mb-2 ps-3 font-semibold"
              >
                Email:
              </label>
              <input
                type="Email"
                className="w-full p-3 rounded-full bg-gray-950 focus:ring-red-400 border border-gray-400 focus:shadow-[0px_0px_10px_1px_#4c51bf]"
                id="email"
                name="Email"
                placeholder="@gmail.com"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm mb-2 ps-3 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-full bg-gray-950 focus:ring-red-400 border border-gray-400 focus:shadow-[0px_0px_10px_1px_#4c51bf]"
                id="task_title"
                name="password"
                placeholder="xxxx"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-3"
              >
                About-Us
              </label>
              <textarea
                className="w-full p-3 rounded-3xl bg-gray-950 focus:ring-black border focus:shadow-[0px_0px_10px_1px_#4c51bf]"
                id="task_content"
                name="task_content"
                cols="30"
                rows="5"
                placeholder="Enter Text here"
                onChange={(e) => {
                  setData({ ...data, about: e.target.value });
                }}
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 rounded-lg py-2 px-3 hover:bg-sky-500 font-bold"
                onClick={doSignup}
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-600 rounded-lg py-2 px-3 hover:bg-red-800 ml-3 font-semibold"
                onClick={resetForm}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
