import Button from "../components/ui/main_menu/Button";

const MainMenu = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
        <Button text="Play" to="/game" />
        <Button text="Statistics" to="/statistics" />
      </div>
    </>
  );
};

export default MainMenu;
