import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="dark:bg-gray-900 h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
