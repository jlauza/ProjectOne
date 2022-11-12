import Link from "next/link";
export default function Home() {
  return (
    <>
      <p>This is the main website!</p>
      <p>
        Go to app? Click here <Link href="dashboard">App</Link>
      </p>
    </>
  );
}
