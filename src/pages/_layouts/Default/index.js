import Header from '../../../shared/Header';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
