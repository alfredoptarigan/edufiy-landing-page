export default function Register() {
  return (
    <div className="flex justify-center items-center w-full flex-col flex-grow mt-28 lg:mt-0 lg:min-h-screen ">
      <div className="flex  flex-col w-full justify-center items-center">
        <div className="text-5xl title">Eduify</div>
        <div className="p-3 flex flex-col justify-start items-start ">
          <div class="mt-3">
            <label
              className="block leading-5 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              className="p-3 font-normal rounded border border-gray-400"
              placeholder="John Doe"
            />
          </div>
          <div class="mt-3">
            <label
              className="block leading-5 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="p-3 font-normal rounded border border-gray-400 "
              placeholder="johndoe@example.com"
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
              placeholder="********"
            />
          </div>
          <div className="mt-3 w-full">
            <button
              type="submit"
              className="bg-blue-600 w-full hover:bg-blue-700 rounded p-5 shadow text-white"
            >
              Procced to Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
