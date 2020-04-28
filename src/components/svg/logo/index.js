import React from 'react';
import styles from './styles.module.css';

export default () => (
  <svg className="navbar__logo" width={64} height={64} viewBox="0 0 64 64" fill="none">
    <path
      className={styles.connector}
      d="M47.5 19.994s-32-12.494-32-2S47 35 47 46.45c0 11.452-31.5-2-31.5-2"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.5 7C40.596 7 35 12.596 35 19.5S40.596 32 47.5 32 60 26.404 60 19.5 54.404 7 47.5 7zm-.25 6.25a6 6 0 00-6 6v.5a6 6 0 006 6h.5a6 6 0 006-6v-.5a6 6 0 00-6-6h-.5zM15.5 57C22.404 57 28 51.404 28 44.5S22.404 32 15.5 32 3 37.596 3 44.5 8.596 57 15.5 57zm.25-6.25a6 6 0 006-6v-.5a6 6 0 00-6-6h-.5a6 6 0 00-6 6v.5a6 6 0 006 6h.5z"
      fill="#FFCD83"
    />
  </svg>
);