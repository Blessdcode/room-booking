const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-sm text-gray-600'>
          &copy; {currentYear} Room booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
