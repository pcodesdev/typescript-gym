import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto mt-12 w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img style={{ width: "90px" }} src={Logo} alt="logo" />
          <p className="my-5 text-justify">
            Dolor ut sit ipsum est laboris id exercitation. Incididunt ea
            reprehenderit culpa proident labore elit do deserunt laborum
            eiusmod. Qui adipisicing cupidatat labore nisi ipsum veniam enim
            elit Lorem occaecat do cillum commodo dolore.
          </p>
          <p className="">
            &copy; PGYM {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Adipisicing Lorem amet veniam</p>
          <p className="my-5">Lorem ipsum ea esse </p>
          <p className="my-5">Pariatur ut veniam ad </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Aliquip in pariatur culpa dolor anim aliquip do aliqua aute
            exercitation anim.
          </p>
          <p className="my-5">(+254)-707-567-223</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
