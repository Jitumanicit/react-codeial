import styles from '../styles/settings.module.css';
import { useAuth } from '../hooks';

const Settings = () => {
  const auth = useAuth();

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{auth.user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{auth.user?.name}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Password</div>
        <input type="password" />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Confirm Password</div>
        <input type="password" />
      </div>

      <div className={styles.btnGrp}>
        <button className={`button ${styles.editBtn}`}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Settings;
