import "./menu.css";

const BunnyMenu = ({className, id}) => {
  return (
    <ul className={`${className} bunny-menu`} id={id}>
      <li><a href="#home-view">Home</a></li>
      <li><a href="#no-video-section">About</a></li>
      <li><a href="#night-sky">TopCollection</a></li>
      <li><a href="#team-section">Team</a></li>
      <li><a href="#roadmap-section">Roadmap</a></li>
    </ul>
  );
};

export default BunnyMenu;
