import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IconWrapper } from '../IconWrapper/IconWrapper';
import { makeRequest } from '../../utils/requests';
import { getUrl } from '../../utils/serverUrl';
import styles from './WinModal.module.css';
import shared from '../../styles/shared.module.css';

const WinModal = ({ time }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('Anonymous Mob Creature');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await makeRequest(getUrl('/winners'), {
        mode: 'cors',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      });
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Unable to set name. Please try again.');
    }
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={`${shared.card} ${styles.modal} ${shared.fadeIn}`}>
        {error && <h3 className={shared.error}>{error}</h3>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <IconWrapper size={32}>
            <h2>Winner</h2>
          </IconWrapper>
          <p>
            Wow! You found all the hidden critters in{' '}
            <strong className={shared.bold}>{time} seconds</strong>
          </p>
          <p>Add your username to the leaderboards</p>
          <label className={`${shared.bold} ${shared.marginTopSmall}`} htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength={1}
            maxLength={32}
            required
          />
          <button className={`${shared.primaryButton} ${shared.marginTopSmall}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export { WinModal };
