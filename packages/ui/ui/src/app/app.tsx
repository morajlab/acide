// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import styles from './app.module.css';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

export const App = () => (
  <MoleculeProvider extensions={[]}>
    <Workbench />
  </MoleculeProvider>
);

export default App;
