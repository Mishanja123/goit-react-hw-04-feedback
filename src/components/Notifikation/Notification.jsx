import PropTypes from 'prop-types';

import css from './Notification.module.css';

export const Notification = ({ title }) => (
  <p className={css.notification}>{title}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};