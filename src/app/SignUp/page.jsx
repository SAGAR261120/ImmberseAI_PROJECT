
import Image from "next/image";
import signupImg from "../assets/Image/signupImg.png";

const page = () => {
  return (
    <div className="container d-flex mt-5 flex-column align-items-center justify-content-center text-white position-relative">
      <div className="gradient-half-circle-left-signup"></div>
      <div className="gradient-half-circle-right-signup"></div>
      <div className="image-container mb-3">
        <Image
          src={signupImg}
          alt="AI Character"
          className="avatar"
          width={150}
          height={150}
          priority
        />
      </div>
      <h1 className="fw-bold">Welcome To BookApp</h1>
      <button className="btn text-white w-75 my-2 d-flex align-items-center justify-content-center signupbutton">
        Continue with Apple &nbsp; <i className="bi bi-apple"></i>
      </button>
      <button className="btn text-white w-75 my-2 d-flex align-items-center justify-content-center signupbutton">
        Continue with Google &nbsp; <i className="bi bi-google"></i>
      </button>
    </div>
  );
};

export default page;
