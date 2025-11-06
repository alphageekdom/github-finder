import { FaGithub } from 'react-icons/fa';
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="container">
      <h1 className="app-title">
        <FaGithub /> GitHub Finder
      </h1>
      <UserSearch />
    </div>
  );
}

export default App;
