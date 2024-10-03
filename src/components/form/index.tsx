export const SignIn = () => {
  return (
    <form action="submit" className="h-fit flex flex-col gap-4">
      <h3 className="font-bold text-title m-0">Sign In</h3>
      <div>
        <label htmlFor="" className="text-purple-500 font-normal">Email or Username</label>
        <input
          type="text"
          name="user"
          id=""
          placeholder="Enter Email or Username"
          className="w-full h-[30px] p-[5px] border-gray-200 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="" className="text-purple-500 font-normal">Password</label>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
          className="w-full h-[30px] p-[5px] border-gray-200 rounded-md"
        />
      </div>
      <div className="flex flex-row font-bold text-purple-500 justify-between">
        <div className="remember flex flex-row">
            <input type="checkbox" name="remember"/>
            <label htmlFor="">Remember me</label>
        </div>
        <a href="/signup" className="text-purple-500 no-underline">Forgot Password?</a>
      </div>
      <button className="bg-primary border-none rounded-md h-[30px] font-bold text-[18px]">Login</button>
    </form>
  );
};

export const SignUp = () => {
    return (
      <form action="submit" className="h-fit flex flex-col gap-4">
        <h3 className="font-bold text-title m-0">Sign Up</h3>
        <div>
          <label htmlFor="" className="text-purple-500 font-normal">Email or Username</label>
          <input
            type="text"
            name="user"
            id=""
            placeholder="Enter Email or Username"
            className="w-full h-[30px] p-[5px] border-gray-200 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-purple-500 font-normal">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            className="w-full h-[30px] p-[5px] border-gray-200 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-purple-500 font-normal">Confirm Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Confirm Your Password"
            className="w-full h-[30px] p-[5px] border-gray-200 rounded-md"
          />
        </div>
        <button className="bg-primary border-none rounded-md h-[30px] font-bold text-[18px]">Register</button>
      </form>
    );
  };
