import { useForm, Controller } from "react-hook-form";
import img1 from "./images/Group (1).svg";
import img2 from "./images/Group (2).svg";
import img3 from "./images/Group (3).svg";
import img5 from "./images/Group (5).svg";
import img6 from "./images/Group.svg";
import login from "./images/login.jpg";
import img7 from "./images/Vector (1).svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";
import * as yup from "yup";
const App = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    control,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#0085FF] to-[#003465] relative">
      <img src={img1} className="absolute top-5 left-1/3 h-40 w-40" />
      <img src={img2} className="absolute top-3/4 left-1/3 h-40 w-40" />
      <img src={img3} className="absolute top-1/3 left-64 h-40 w-40" />
      <img src={img5} className="absolute left-64 top-72 h-40 w-16" />
      <img src={img6} className="absolute top-16 left-2/4 h-60 w-60" />
      <img src={img7} className="absolute right-1/2 h-40" />
      <div className="relative px-6 lg:px-96 pt-10 pb-14">
        <div className="px-12 py-8 backdrop-blur-[2px] bg-white/30 rounded-lg">
          <h3 className="text-white text-center py-4 font-normal text-xl">
            Your logo
          </h3>
          {/* <img src={login} className="h-9  rounded-full" alt="img"/> */}
          <h2 className="text-center text-2xl font-semibold text-white pb-5">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium"
              >
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    placeholder="Enter the email"
                    {...field}
                    className="w-full border pl-3 py-3 border-gray-300 rounded-md"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium"
              >
                Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    type="password"
                    placeholder="Enter the password"
                    {...field}
                    className="w-full py-3 border pl-3 border-gray-300 rounded-md"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-white text-sm font-medium"
              >
                Confirm Password
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                    className="w-full border py-3 pl-3 border-gray-300 rounded-md"
                  />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Tooltip content="Sign In">
                <Button
                  type="submit"
                  className="mt-4w-full lg:w-full  text-white bg-[#003465]"
                >
                  Sign In
                </Button>
              </Tooltip>
            </div>
          </form>

          <p className="text-white py-3 text-center">or continue with</p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <Tooltip content="GitHub">
              <Button className="bg-white" startContent={<FaGithub />}>
                GitHub
              </Button>
            </Tooltip>
            <Tooltip content="Google">
              <Button
                className="bg-white"
                variant="bordered"
                startContent={<FaGoogle />}
              >
                Google
              </Button>
            </Tooltip>
            <Tooltip content="Facebook">
              <Button
                className="bg-white"
                variant="bordered"
                startContent={<FaFacebook />}
              >
                Facebook
              </Button>
            </Tooltip>
          </div>

          <p className="pt-2 text-center text-sm text-gray-200">
            Do not have an account?{" "}
            <span className="text-white">Register for free.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
