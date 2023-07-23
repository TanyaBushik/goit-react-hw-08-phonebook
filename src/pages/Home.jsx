// import { Watermark } from 'antd';
import {
  FcEditImage,
  FcContacts,
  FcTouchscreenSmartphone,
  FcList,
} from 'react-icons/fc';
import { Title, Container } from './Home.styled';

// const styles = {
//   container: {
//     minHeight: 'calc(50vh - 50px)',
//     minWidth: 'calc(50vw - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   title: {
//     fontWeight: 600,
//     fontSize: 40,
//     textAlign: 'center',
//   },
// };

const Home = () => (
  <Container>
    <Title>Home page of the Phonebook</Title>
    <p>
      <FcEditImage size="75" />
      <FcTouchscreenSmartphone size="75" />
      <FcList size="75" />
      <FcContacts size="75" />
    </p>
  </Container>
);

export default Home;
