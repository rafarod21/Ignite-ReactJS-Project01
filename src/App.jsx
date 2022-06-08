import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <span>POST COMPONENT</span>
        </main>
      </div>
    </div>
  );
}

export default App;
