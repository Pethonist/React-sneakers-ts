import { FC, cloneElement } from 'react';
import {
  TbBrandTelegram,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandYoutube,
} from 'react-icons/tb';
import { FiMessageSquare, FiMail, FiPhoneOutgoing } from 'react-icons/fi';

import { SIZE } from '../../constants/constants';

import styles from './Footer.module.scss';

const SOCIAL_MEDIAS = [
  { id: 0, icon: <TbBrandTelegram /> },
  { id: 1, icon: <TbBrandFacebook /> },
  { id: 2, icon: <TbBrandInstagram /> },
  { id: 3, icon: <TbBrandTwitter /> },
  { id: 4, icon: <TbBrandYoutube /> },
];

const CONTACT_US = [
  { id: 0, icon: <FiMessageSquare /> },
  { id: 1, icon: <FiMail /> },
  { id: 2, icon: <FiPhoneOutgoing /> },
];

const Footer: FC = () => {
  const handleClick = () => {
    alert('Its not available yet');
  };

  return (
    <footer>
      <section className={styles.users}>
        <div>
          <p>We in social networks:</p>
          <div className={styles.icons}>
            {SOCIAL_MEDIAS.map(({ id, icon }) =>
              cloneElement(icon, { key: id, size: SIZE, onClick: handleClick })
            )}
          </div>
        </div>
        <div>
          <p>Contact us:</p>
          <div className={styles.icons}>
            {CONTACT_US.map(({ id, icon }) =>
              cloneElement(icon, { key: id, size: SIZE, onClick: handleClick })
            )}
          </div>
        </div>
      </section>
      <section>
        <p>© All rights reserved</p>
        <p>2023-2023, Ukraine</p>
      </section>
    </footer>
  );
};

export default Footer;
