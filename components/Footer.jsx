const Footer = () => {
    return (
      <footer className="relative z-20 w-full mt-6 bg-gradient-to-r from-gray-950 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-2xl font-bold">Petify</a>
              <p className="text-sm text-gray-400">Connect pet owners and loving homes</p>
              <div className="flex gap-4 mt-2 sm:mt-4 space-x-5">
            <a href="https://www.linkedin.com/in/sahil-ahmad-52b6522a8/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
            <a href="https://x.com/SahilAh42663686" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/SAHILAHMAD9" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
              <a href="" className="hover:text-primary transition-colors">Features</a>
              <a href="" className="hover:text-primary transition-colors">How It Works</a>
              <a href="" className="hover:text-primary transition-colors">Testimonials</a>
              <a href="" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="" className="hover:text-primary transition-colors">Terms of Service</a>
            </nav>
          </div>
         
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Petify. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  