export default function Login() {
  return (
    <div className="flex justify-center items-center w-full flex-col flex-grow min-h-screen ">
      <div className="flex  flex-col w-full justify-center items-center">
        <div className="text-5xl title">Eduify</div>
        <div className="p-3 flex flex-col justify-start items-start ">
          <div>
            <label
              className="block leading-5 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="p-3 font-normal rounded border border-gray-400 "
            />
          </div>
          <div className="mt-3">
            <label
              className="block leading-5 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="p-3 font-normal rounded border border-gray-400 "
            />
          </div>
          <div className="mt-3 w-full">
            <button
              type="submit"
              className="bg-blue-600 w-full hover:bg-blue-700 rounded p-5 shadow text-white"
            >
              Login to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
