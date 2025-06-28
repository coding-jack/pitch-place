import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch Place",
  description: "A platform for pitching startup ideas",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <h1 className="text-3xl">NAVBAR</h1>
      {children}
    </div>
  );
};

export default RootLayout;