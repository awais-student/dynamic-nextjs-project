import { url } from "inspector";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  let studentPosition = [
    {
      name: "Student Name : Aiman",
      fName: "Father Name : Ali Khan",
      cnic: "CNIC : 45504-4826016-6",
      regNumber: "Reg Number : 638462",
      dateofReg: "Date of Reg : 4/8/2023",
      stuImage: "/images/download.jpeg",
    },
    {
      name: "Student Name : Rida",
      fName: "Father Name : Wahab",
      cnic: "CNIC : 45504-8634920-1",
      regNumber: "Reg Number : 733125",
      dateofReg: "Date of Reg : 3/8/2023",
      stuImage: "/images/images.jpeg",
    },
    {
      name: "Student Name : Ahmed",
      fName: "Father Name : Waqar",
      cnic: "CNIC : 45504-6345981-2",
      regNumber: "Reg Number : 973561",
      dateofReg: "Date of Reg : 4/8/2023",
      stuImage: "/images/images (6).jpeg",
    },
    {
      name: "Student Name : Nimra",
      fName: "Father Name : Amir",
      cnic: "CNIC : 45504-6251890-2",
      regNumber: "Reg Number : 726194",
      dateofReg: "Date of Reg : 6/8/2023",
      stuImage: "/images/images (7).jpeg",
    },
  ];

  let studentPositionCard = [
    {
      name: "Student Name : Ali",
      fName: "Father Name : Jawwad",
      cnic: "CNIC : 45504-7643097-1",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 8/8/2023",
      stuImage: "/images/images (10).jpg",
    },
    {
      name: "Student Name : Haider",
      fName: "Father Name : Salman",
      cnic: "CNIC : 45504-6309715-9",
      regNumber: "Reg Number : 814537",
      dateofReg: "Date of Reg : 3/8/2023",
      stuImage: "/images/images (12).jpg",
    },
    {
      name: "Student Name : Rabia",
      fName: "Father Name : Arif",
      cnic: "CNIC : 45504-4501249-3",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 9/8/2023",
      stuImage: "/images/images (9).png",
    },
    {
      name: "Student Name : Noor Khan",
      fName: "Father Name : Haris",
      cnic: "CNIC : 45504-5249745-7",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 9/8/2023",
      stuImage: "/images/images (13).jpg",
    },
  ];

  let programmingCards = [
    {
      coursesName: "Programming Fundamentals",
      courceImage: "/images/programming.jpg",
    },
    {
      coursesName: "Web2 Using NextJS",
      courceImage: "/images/web2.jpg",
    },
    {
      coursesName: "Earn as You Learn",
      courceImage: "/images/earnas.jpg",
    },
  ];

  let advanceCourses = [
    {
      coursesName: "Artifical Intelligence",
      coursesImage: "/images/artifical.jpg",
    },
    {
      coursesName: "Web 3 and Metaverse",
      coursesImage: "/images/web3.jpg",
    },
    {
      coursesName: "Cloud-Native Computing",
      coursesImage: "/images/cloud.jpg",
    },
    {
      coursesName: "Ambient Computing and IoT",
      coursesImage: "/images/ambient.jpg",
    },
  ];

  let genomicsNetwork = [
    {
      coursesName: "Genomics and Bioinformatics",
      coursesImage: "/images/genomics.jpg",
    },
    {
      coursesName: "Network Programmability and Automation",
      coursesImage: "/images/Network.jpg",
    },
  ];

  return (
    <div>
      <div className="main">
        <div className="flex items-center justify-between p-8 bg-[#044E83] w-full h-[80px] fixed">
          <Image
            className="mt-20 cursor-pointer object-cover"
            src={"/images/logo.png"}
            alt="goverment of sind logo"
            width={90}
            height={90}
          />
          <h1 className="text-[24px] font-bold text-[#B9D8F3] ">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <ul>
            <li className="text-white space-x-8 flex">
              <a href="#">Home</a>
              <a href="#">Apply</a>
              <a href="#">Jobs</a>
              <a href="#">Results</a>
              <div className="flex items-center">
                <a href="#">Cources</a>
                <MdKeyboardArrowDown />
              </div>
            </li>
          </ul>
        </div>

        <div className="text-white flex">
          <div className="w-1/2 pt-32 pl-5 font-bold">
            <h1 className="text-[#044E83] text-[70px]">Governor Sindh</h1>
            <h3 className="font-medium text-[50px] text-[#044E83]">
              Kamran Khan Tessori
            </h3>
            <h2 className="text-[40px] w-2/3 text-[#2EB6E8]">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h2>
            <h5 className="text-[#044E83] text-[22px] ">
              Earn up to $5,000 / month
            </h5>
            <p className="text-[#044E83] text-[30px] w-2/3 ">
              Now admissions are open in Hyderabad
            </p>
            <div className="flex items-center justify-between">
              <button className="py-4 px-14 bg-[#044E83] rounded-md mt-4 text-[18px] font-bold   ">
                Apply Now
              </button>
              <div>
                <h1 className="text-[32px] ml-4 text-[#044E83]">562,143</h1>
                <p className=" text-[#044E83]">Accepted Applications</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              className="pt-32 flex justify-items-start"
              src={"/images/govimg.png"}
              alt="governor Image"
              width={400}
              height={400}
              style={{ width: "700px", height: "780px" }}
            />
          </div>
        </div>

        <div className="w-full bg-slate-100">
          <h1 className="mt-20  text-[#044E83] text-[32px] font-bold px-10 text-center">
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers and
            Solopreneurs
          </h1>
          <p className="px-6 mt-8 text-[20px] text-justify">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other team members.
          </p>
          <div className="flex justify-between px-10 mt-8">
            <Image
              className="rounded-md"
              src={"/images/laptop.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
            <Image
              className="rounded-md"
              src={"/images/img.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
            <Image
              className="rounded-md"
              src={"/images/imagelaptop.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="w-full h-screen flex justify-between px-6 mt-20">
          <Image
            className=" h-[49%] rounded-md"
            src={"/images/slide.jpg"}
            alt=""
            width={400}
            height={400}
            style={{ width: "49%", height: "90%" }}
          />
          <Image
            className="h-[49%] rounded-md"
            src={"/images/slideimage.jpg"}
            alt=""
            width={400}
            height={400}
            style={{ width: "49%", height: "90%" }}
          />
        </div>

        <div className="w-full px-6">
          <h1 className="font-bold text-[30px] text-[#044E83] mb-10">
            Core Courses Sequence
          </h1>
          <div className="flex gap-4">
            {programmingCards.map((item, i) => (
              <div
                key={i}
                className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl"
              >
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={item.courceImage}
                  alt="programming image"
                  width={400}
                  height={400}
                />
                <h1 className="text-black text-center mt-10 font-bold">
                  {item.coursesName}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-6 mt-10">
          <h1 className="font-bold text-[30px] text-[#044E83] mb-10 ">
            Advanced Courses
          </h1>
          <div className="flex gap-4">
            {advanceCourses.map((item, i) => (
              <div
                key={i}
                className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl"
              >
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={item.coursesImage}
                  alt="Advance Cources"
                  width={400}
                  height={400}
                />
                <h1 className="font-bold text-center mt-10">
                  {item.coursesName}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-6 mt-10">
          <div className="flex gap-4">
            {genomicsNetwork.map((item, i) => (
              <div
                key={i}
                className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl"
              >
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={item.coursesImage}
                  alt="Advance Cources"
                  width={400}
                  height={400}
                />
                <h1 className="font-bold text-center mt-10">
                  {item.coursesName}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-center text-[40px] font-extrabold text-[#044E83] mt-32 mb-5 flex items-center justify-center">
          <h1>These All Are Position Holders.</h1>
          <Image
            className="w-[100px] h-[100px]"
            src={"/images/trophy.png"}
            alt="winners"
            width={400}
            height={400}
          />
        </div>

        <div className="w-full flex items-center justify-between bg-slate-100 px-10">
          {studentPosition.map((item, i) => (
            <div key={i} className="bg-[#044E83] w-[300px] p-6 rounded-md">
              <Image
                className="rounded-tl-lg rounded-tr-lg"
                src={item.stuImage}
                alt="Position holder girls"
                width={400}
                height={400}
                style={{ width: "280px", height: "300px", objectFit: "cover" }}
              />

              <div className="text-white mt-3">
                <h1>{item.name}</h1>
                <h1>{item.fName} </h1>
                <h1>{item.cnic} </h1>
                <h1>{item.regNumber}</h1>
                <h1>{item.dateofReg}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-between bg-slate-100 px-10 mt-[30px]">
          {studentPositionCard.map((item, i) => (
            <div key={i} className="bg-[#044E83] w-[300px] p-6 rounded-md">
              <Image
                className="rounded-tl-lg rounded-tr-lg"
                src={item.stuImage}
                alt="Position holder girl"
                width={400}
                height={400}
                style={{
                  width: "280px",
                  height: "300px",
                  objectPosition: "top",
                }}
              />

              <div className="text-white mt-3">
                <h1>{item.name}</h1>
                <h1>{item.fName} </h1>
                <h1>{item.cnic} </h1>
                <h1>{item.regNumber}</h1>
                <h1>{item.dateofReg}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[400px] bg-[#F4F4F5] flex justify-between px-10 mt-20">
          <div className="w-[30%] h-full pt-11 pl-11">
            <h1 className="font-bold text-[18px]  mb-2  ">Core Courses</h1>
            <h1 className="cursor-pointer">Programming Fundamentals</h1>
            <h1 className="cursor-pointer">Web2 Using NextJS</h1>
            <h1 className="cursor-pointer">Earn as You Learn</h1>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4 ">
            <h1 className="font-bold text-[18px] mb-2  ">Advance Courses</h1>
            <h1 className="cursor-pointer">Web 3 and Metaverse</h1>
            <h1 className="cursor-pointer">Cloud-Native Computing</h1>
            <h1 className="cursor-pointer">
              Artificial Intelligence (AI) and Deep Learning
            </h1>
            <h1 className="cursor-pointer">Ambient Computing and IoT</h1>
            <h1 className="cursor-pointer">Genomics and Bioinformatics</h1>
            <h1 className="cursor-pointer">
              Network Programmability and Automation
            </h1>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4">
            <h1 className="text-[24px] font-extrabold mb-4">Social Links</h1>
            <div className="flex space-x-2">
              <div className="text-[#385693] text-[30px] cursor-pointer">
                <FaFacebook />
              </div>

              <div className="text-[#F70000] text-[30px] cursor-pointer">
                <FaYoutube />
              </div>

              <div className="text-[#1C9CEA] text-[30px] cursor-pointer">
                <IoLogoTwitter />
              </div>
            </div>

            <div className="mt-5 text-[#044E83] cursor-pointer flex space-x-3">
              <div className="text-[25px]">
                <MdOutlineMail />
              </div>
              <div className="text-[#044E83] underline">
                <a href="#">education@governorsindh.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
