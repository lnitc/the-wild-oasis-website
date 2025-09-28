"use client";

import { signInAction } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import { useFormState } from "react-dom";

function SignInForm() {
  const initialState = { error: null };
  const [state, formAction] = useFormState(signInAction, initialState);
  return (
    <div className="w-[500px]">
      <form
        action={formAction}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col w-full"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
        {state?.error && <div className="text-red-500">{state.error}</div>}
        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Signing in...">Sign In</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
