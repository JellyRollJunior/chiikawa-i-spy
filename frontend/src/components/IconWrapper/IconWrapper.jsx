import chiikawa from '../../assets/characterIcons/chiikawa-icon.png';
import hachiware from '../../assets/characterIcons/hachiware-icon.png';

const IconWrapper = ({ children }) => {
  return (
    <div>
      <img src={chiikawa} alt="Chiikawa icon" />
      {children}
      <img src={hachiware} alt="Hachiware icon" />
    </div>
  );
};

export { IconWrapper };
