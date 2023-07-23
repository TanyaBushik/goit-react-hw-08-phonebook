import { Watermark } from 'antd';
import {
  FcEditImage,
  FcContacts,
  FcTouchscreenSmartphone,
  FcList,
} from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 600,
    fontSize: 40,
    textAlign: 'center',
  },
};

const Home = () => (
  <Watermark gap={[50, 50]} content="Phonebook">
    {/* <div style={styles.container}> */}
    <Container>
      <h1 style={styles.title}>Home page of the Phonebook</h1>
      <p>
        <FcEditImage size="75" />
        <FcTouchscreenSmartphone size="75" />
        <FcList size="75" />
        <FcContacts size="75" />
      </p>
    </Container>
    {/* </div> */}
  </Watermark>
);

export default Home;
