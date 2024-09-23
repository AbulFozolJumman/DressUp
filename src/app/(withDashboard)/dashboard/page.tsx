import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <h1>Welcome, {session.user?.name}</h1>
          <p>Your access token: {session.accessToken}</p>
          <p>Your email: {session.user?.email}</p>
        </div>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
