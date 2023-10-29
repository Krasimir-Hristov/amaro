import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-red before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-black before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${selectedPage === "dienstleistungen" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        href="#dienstleistungen"
        onClick={() => setSelectedPage("dienstleistungen")}
      />
      <AnchorLink
        className={`${selectedPage === "Über-uns" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        href="#Über-uns"
        onClick={() => setSelectedPage("Über-uns")}
      />
      <AnchorLink
        className={`${selectedPage === "kontakt" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        href="#kontakt"
        onClick={() => setSelectedPage("kontakt")}
      />
    </div>
  );
};

export default DotGroup;