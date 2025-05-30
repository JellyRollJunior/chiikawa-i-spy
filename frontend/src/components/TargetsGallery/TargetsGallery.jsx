import styles from './TargetsGallery.module.css';
import shared from '../../styles/shared.module.css';

const TargetsGallery = ({ targets }) => {
  return (
    <section className={styles.targetSection}>
      <ul className={shared.horizontalWrapper}>
        {targets.map((target) => (
          <li className={styles.target} key={target.id}>
            <img
              src={target.src}
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
