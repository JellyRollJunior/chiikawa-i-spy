import styles from './TargetsGallery.module.css';
import shared from '../../styles/shared.module.css';
import usagi from '../../assets/temp/usagi.jpg';
import shisa from '../../assets/temp/shisa.jpg';
import hachiware from '../../assets/temp/hachiware.jpg';
import chiikawa from '../../assets/temp/chiikawa.jpg';

const tempImages = [usagi, shisa, hachiware, chiikawa];

const TargetsGallery = ({ targets }) => {
  return (
    <section className={styles.targetSection}>
      <ul className={shared.horizontalWrapper}>
        {targets.map((target, index) => (
          <li className={styles.target} key={target.id}>
            <img
              src={tempImages[index]}
              alt={target.name}
              className={`${styles.targetImage} ${
                target.isFound && styles.foundImage
              }`}
            />
            <h4 className={target.isFound ? `${styles.foundTitle}` : ''}>
              {target.name}
              {target.isFound && ' ✓'}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { TargetsGallery };
