import Hello from "../components/hello";

export default function Home() {
  console.log("What am I doing? -- SERVER")
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Pitch Place</h1>
      <Hello />
    </>
  );
}
