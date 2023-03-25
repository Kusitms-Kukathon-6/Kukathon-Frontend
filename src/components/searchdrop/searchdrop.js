const MenuDropDown = ({ value, setStationIdentify, setIsOpen, isOpen }) => {
  console.log("dsk");
  const ValueClick = () => {
    setStationIdentify(value);
    setIsOpen(!isOpen);
  };
  return <li onClick={ValueClick}>{value}</li>;
};

export default MenuDropDown;
