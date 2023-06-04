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
  <TbBrandTelegram />,
  <TbBrandFacebook />,
  <TbBrandInstagram />,
  <TbBrandTwitter />,
  <TbBrandYoutube />,
];

const CONTACT_US = [<FiMessageSquare />, <FiMail />, <FiPhoneOutgoing />];

const Footer: FC = () => {
  const handleClick = () => {
    alert("It's not available yet");
  };

  return (
    <footer>
      <section className={styles.users}>
        <div>
          <p>We in social networks:</p>
          <div className={styles.icons}>
            {SOCIAL_MEDIAS.map((icon, id) =>
              cloneElement(icon, { key: id, size: SIZE, onClick: handleClick })
            )}
          </div>
        </div>
        <div>
          <p>Contact us:</p>
          <div className={styles.icons}>
            {CONTACT_US.map((icon, id) =>
              cloneElement(icon, { key: id, size: SIZE, onClick: handleClick })
            )}
          </div>
        </div>
      </section>
      <section className={styles.rights}>
        <p>© All rights reserved</p>
        <p>2023-2023, Ukraine</p>
      </section>
    </footer>
  );
};

export default Footer;
