import { Chat } from "@/components/Chat";


import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/Login');
  };

  return (
    <div>
      <main>
      <Chat></Chat>
    </main>
    <button className="handleLoginClick" onClick={handleLoginClick}> Login </button>
      
    </div>
  );
}

export default HomePage;


      {/* <Chat></Chat> */}
   