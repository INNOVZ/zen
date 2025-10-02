import Image from "next/image";
// import Bot from "../../../public/bot.png";
import wordpress from "../../../public/wordpress.png";
import shopify from "../../../public/shopify.png";
import webflow from "../../../public/webflow.png";
import dashboard from "../../../public/dashboard.png";
import { CircleCheckBig } from "lucide-react";
import PriceSection from "@/components/PricingCard";
import HeaderToggle from "@/components/HeaderToggle";

export default function Home() {
  return (
    <>
      <div className="mt-1 flex flex-col mx-auto border-0 rounded-[50] ">
        <div className="min-h-[90vh] gap-5 sm:px-34 flex mt-25 justify-center">
          {/* <Image src={Bot} alt="bot" width={150} /> */}{" "}
          <div className="flex flex-col text-center">
            <HeaderToggle />
            <h1 className=" text-4xl sm:text-6xl mt-5 font-bold text-gray-700 ">
              Meet Zaakiy
            </h1>
            <p className="mt-3 text-base text-center font-medium text-gray-600">
              Our very first AI agent the advanced AI enabled customer support
              chatbot for your business
              {/* and watch it transform your customer interactions. */}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <h1 className="h-[90%] bg-gradient-to-b from-indigo-100 to-[#5D7DDE] p-4 rounded-lg text-2xl text-[#ffffff] font-bold text-left">
              Zentria AI
            </h1> */}
          </div>
        </div>

        <div className="py-10 flex flex-col items-center gap-2 px-10 sm:px-34 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            Unleashed Experience
          </h1>
          <p></p>
          <p className="text-lg text-center text-gray-600">
            Run your business 24/7 with Zentria AI where your customers can get
            instant answers to their queries.
            <br /> Watch it transform your customer interactions.
          </p>
          
        </div>

        <div className="py-10 flex flex-col items-center gap-2 px-10 sm:px-34">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800">
            Integrate chatbot with any platform seemlessly
          </h1>
          <p className="text-lg text-center text-gray-600">
            AI Assistant that responds to your customers on your Website,
            WhatsApp and Social medias
          </p>

          <span className="mt-12 flex flex-row text-xl gap-10 font-medium text-gray-500">
            <Image src={wordpress} alt="bot" width={60} />
            <Image src={shopify} alt="bot" width={60} />
            <Image src={webflow} alt="bot" width={60} />
          </span>
        </div>

        <div className="py-10 flex flex-col items-center px-10 sm:px-34">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 m-10">
            The future of customer support
          </h1>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="">
              
            </div>
            <div className="p-4 sm:p-7 border-t rounded-3xl bg-gradient-to-b from-blue-100 to-white">
              <p className="text-xl font-medium pb-3 bg-gradient-to-r from-[#5D7DDE] to-[#6a8fff] text-transparent bg-clip-text">
                Optimize Customer Xperience
              </p>
              <h1 className="text-2xl sm:text-4xl text-left font-bold text-gray-800 ">
                Intaract with every new opportunity
              </h1>
              <p className="py-3 text-lg text-gray-600 ">
                ZaaKy AI optimizes your business opportunities with advanced
                artificial intelligence.
              </p>
              <ul className="py-6">
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-lg font-medium text-gray-600">
                      Automate customer interactions
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-lg font-medium text-gray-600">
                      24/7 continuous support
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-lg font-medium text-gray-600">
                      Communicate your information accurately
                    </p>
                  </span>
                </li>

                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />

                    <p className="text-lg font-medium text-gray-600">
                      Eliminate the waiting time
                    </p>
                  </span>
                </li>
              </ul>
              <div className="btn text-bold">Try it for free</div>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-col items-center gap-2 px-10 sm:px-34">
          <h1 className="text-4xlfont-bold text-gray-800 text-center">
            Easy setup and integration
          </h1>

          <Image src={dashboard} alt="bot" className="mt-12 w-10/12 h-5/6" />
        </div>
        <div className="py-10 flex flex-col items-center gap-2 px-10 sm:px-34">
          <PriceSection />
        </div>
        <div className="mt-15 py-10 flex flex-col items-center gap-2 px-10 sm:px-34">
          <h1 className="text-center bg-gradient-to-r from-[#5D7DDE] to-blue-400 text-transparent bg-clip-text delay-200">
            Want to try it out?
          </h1>
          <p className="text-3xl text-center font-bold bg-gradient-to-r from-[#5D7DDE] to-blue-400 text-transparent bg-clip-text delay-200">
            Get hands on experience with ZaaKy AI
          </p>
          <div className="btn text-bold mt-3">Chat with us !</div>
        </div>

        <div className="mt-15 py-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 px-10 sm:px-34 bg-gradient-to-b from-white to-blue-200 border-0 rounded-[45]">
          <div className="mt-12 gap-5 h-[100%]">
            <Image src={webflow} alt="bot" className="mt-12 w-12" />
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Products
            </h1>
            <p className="mt-2 text-base text-gray-600">ZaaKy AI</p>{" "}
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Company
            </h1>
            <p className="mt-2 text-base text-gray-600">Home</p>
            <p className="mt-2 text-base text-gray-600">Price</p>
            <p className="mt-2 text-base text-gray-600">About Us</p>
          </div>
        </div>
      </div>
      <footer className="w-full py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Zentria&reg;. All Rights Reserved.{" "}
          {/* <span className="align-super text-xs">&trade;</span> */}
        </p>
      </footer>
    </>
  );
}
