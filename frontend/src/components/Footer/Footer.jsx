import styles from './Footer.module.css';
import shared from '../../styles/shared.module.css';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';

const Footer = () => {
    return (
      <footer className={`${shared.bold} ${shared.marginTopMedium} ${styles.footer}`}>
        <IconWrapper size={32} margin={42} leftIcon={2} rightIcon={2}>
          <div className={styles.iconHolder}>
            <a className={styles.github} href="https://github.com/jellyrolljunior" target="”_blank”"></a>
            <a className={styles.linkedin} href="https://www.linkedin.com/in/jellyrolljunior/" target="”_blank”"></a>
            <a className={styles.instagram} href="https://www.instagram.com/river.flows__" target="”_blank”"></a>
          </div>
        </IconWrapper>
        Created by JellyRollJunior (Brandon Lin)
      </footer>
    );
};

export { Footer }