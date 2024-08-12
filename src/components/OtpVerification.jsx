import React from "react";
import googleLogo from "../assets/google.png";
import cinevistaLogo from "../assets/cinevista.png";

function OtpVerification() {
	return (
		<div className="flex flex-1 justify-center items-center scrollbar-thin">

			<div className="p-2 w-3/4 sm:w-1/3 h-full flex flex-col gap-2">
				<div className="flex flex-col items-center justify-center">
					<img src={cinevistaLogo} alt="" className="size-40" />
				</div>
				<div className="flex flex-col gap-1">
					<label for="email" className="dark:text-white text-lg sm:text-xl">
						Email
					</label>

					<input
						type="email"
						placeholder="Enter your email here"
						id="email"
						disabled
						value={"nitishraosnr2001@gmail.com"}
						className="rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg dark:text-white"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label
						for="otp"
						className="text-black dark:text-white text-lg sm:text-xl"
					>
						OTP
					</label>

					<input
						type="text"
						placeholder="Enter your password here"
						id="password"
						className="rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg text-black dark:text-white"
					/>
				</div>
				<div className="w-full pl-3 pr-3 flex justify-center items-center">
					<button
						type="button"
						z
						className="w-1/2 mt-3 p-2 rounded-lg bg-blue-600 text-white dark:text-black"
					>
						Sign Up
					</button>
				</div>
				<div className="w-full mt-4 flex flex-col items-center justify-center gap-3">
					<p className="w-full text-black dark:text-white text-center">
						or continue with
					</p>
					<img src={googleLogo} alt="" className="size-8 cursor-pointer" />
				</div>
			</div>

		</div>
	);
}

export default OtpVerification;
