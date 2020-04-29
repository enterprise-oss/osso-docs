import classnames from 'classnames';
import React from 'react';
import { useInView } from 'react-intersection-observer'
import styles from './styles.module.css';

export default () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 })
  return (
    <svg ref={ref} className={classnames(styles.svg, { [styles.active]: inView })} viewBox="0 0 276 299" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M66.3565 36.2643C61.6792 35.8007 56.9807 36.9084 53.0029 39.4125C49.0252 41.9166 45.995 45.6743 44.3907 50.0923C42.7864 54.5104 42.6996 59.3369 44.1438 63.8098C45.5881 68.2827 48.4812 72.147 52.3662 74.7926C56.2512 77.4382 60.9069 78.7142 65.5979 78.4192C66.6176 78.3551 67.4963 79.1298 67.5604 80.1496C67.6246 81.1694 66.8499 82.0481 65.8301 82.1122C60.3184 82.4588 54.8482 80.9595 50.2835 77.8511C45.7188 74.7426 42.3195 70.2022 40.6226 64.9468C38.9257 59.6913 39.0277 54.0204 40.9127 48.8294C42.7976 43.6384 46.358 39.2233 51.0316 36.2811C55.7053 33.3389 61.2258 32.0374 66.7215 32.5821C72.2172 33.1268 77.3748 35.4867 81.38 39.289C85.3851 43.0914 88.0096 48.1196 88.8389 53.5796C89.6681 59.0395 88.655 64.6202 85.9594 69.4403C85.4607 70.3321 84.3335 70.6507 83.4416 70.152C82.5498 69.6533 82.2312 68.526 82.7299 67.6342C85.0241 63.5319 85.8864 58.7822 85.1806 54.1352C84.4748 49.4882 82.2411 45.2087 78.8323 41.9726L80.1062 40.6308L78.8323 41.9726C75.4236 38.7364 71.0339 36.7279 66.3565 36.2643Z" className={styles.svgElem1}></path>
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M36.9847 108.972C32.7642 106.535 27.8372 105.552 22.9827 106.18C18.1284 106.808 13.6292 109.011 10.194 112.435C6.75926 115.859 4.58379 120.309 4.00521 125.079C3.42664 129.85 4.47697 134.676 6.9938 138.797C9.51095 142.919 13.3533 146.102 17.9186 147.838C22.4842 149.575 27.5083 149.764 32.1958 148.375C36.883 146.986 40.9616 144.099 43.7909 140.178C44.3888 139.349 45.5452 139.162 46.3738 139.76C47.2025 140.358 47.3896 141.514 46.7917 142.343C43.4789 146.935 38.712 150.303 33.2473 151.923C27.7829 153.542 21.9271 153.322 16.603 151.297C11.2785 149.271 6.78479 145.554 3.83594 140.726C0.886769 135.897 -0.347375 130.235 0.331877 124.634C1.0111 119.033 3.56406 113.82 7.58167 109.815C11.5988 105.81 16.8512 103.242 22.5078 102.51C28.1643 101.778 33.9087 102.923 38.8348 105.767C43.7614 108.611 47.5915 112.995 49.7145 118.23C50.0985 119.177 49.6422 120.256 48.6953 120.64C47.7484 121.024 46.6695 120.568 46.2855 119.621C44.4752 115.157 41.2047 111.408 36.9847 108.972Z" className={styles.svgElem2}></path>
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M215.917 36.7224C211.579 34.9129 206.762 34.6001 202.226 35.8332C197.691 37.0663 193.695 39.7752 190.87 43.532C188.046 47.2889 186.553 51.8796 186.628 56.5793C186.703 61.279 188.341 65.8198 191.284 69.4847C191.924 70.2814 191.796 71.4459 191 72.0857C190.203 72.7254 189.039 72.5982 188.399 71.8015C184.941 67.4954 183.016 62.1602 182.928 56.6383C182.84 51.1164 184.594 45.7225 187.913 41.3083C191.232 36.8942 195.926 33.7114 201.255 32.2626C206.585 30.8137 212.244 31.1813 217.341 33.3073C222.438 35.4334 226.682 39.1967 229.402 44.003L227.792 44.9142L229.402 44.003C232.122 48.8093 233.163 54.3848 232.362 59.8489C231.56 65.313 228.961 70.3545 224.976 74.1771C220.99 77.9998 215.844 80.3858 210.351 80.9584C209.335 81.0643 208.425 80.3263 208.319 79.31C208.214 78.2938 208.952 77.384 209.968 77.2781C214.643 76.7907 219.022 74.76 222.414 71.5066C225.807 68.2531 228.019 63.9624 228.701 59.3119C229.383 54.6614 228.497 49.9161 226.182 45.8255C223.867 41.7348 220.255 38.5318 215.917 36.7224Z" className={styles.svgElem3}></path>
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M261.069 101.331C256.973 99.0255 252.226 98.1502 247.577 98.8434C242.928 99.5365 238.643 101.758 235.397 105.158C232.152 108.558 230.131 112.943 229.655 117.619C229.551 118.635 228.643 119.375 227.627 119.272C226.61 119.168 225.87 118.26 225.974 117.244C226.533 111.749 228.907 106.598 232.721 102.603C236.534 98.6087 241.569 95.998 247.031 95.1836C252.494 94.3692 258.072 95.3975 262.884 98.1062C267.697 100.815 271.47 105.05 273.608 110.142C275.746 115.234 276.127 120.893 274.691 126.225C273.255 131.558 270.083 136.26 265.676 139.589C261.27 142.918 255.88 144.685 250.358 144.61C244.836 144.535 239.496 142.622 235.182 139.175C234.384 138.537 234.254 137.373 234.892 136.574C235.53 135.776 236.694 135.646 237.492 136.284C241.164 139.218 245.709 140.846 250.409 140.91C255.108 140.974 259.696 139.47 263.446 136.637C267.196 133.803 269.895 129.801 271.118 125.263C272.34 120.724 272.016 115.908 270.197 111.574C268.377 107.24 265.165 103.636 261.069 101.331Z" className={styles.svgElem4}></path>
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M152.079 8.07512C148.317 5.25644 143.724 3.77101 139.025 3.8534C134.325 3.93579 129.787 5.5813 126.127 8.5301C122.467 11.4789 119.893 15.5629 118.812 20.1373C117.732 24.7116 118.205 29.5156 120.159 33.7907C122.113 38.0657 125.435 41.5682 129.601 43.745C130.506 44.2182 130.857 45.336 130.383 46.2416C129.91 47.1472 128.792 47.4977 127.887 47.0245C122.992 44.4669 119.089 40.3516 116.794 35.3287C114.498 30.3057 113.941 24.6612 115.211 19.2865C116.481 13.9119 119.505 9.11332 123.805 5.64862C128.106 2.18393 133.438 0.250526 138.96 0.153723C144.482 0.0569163 149.878 1.80223 154.298 5.11405C158.717 8.42588 161.907 13.1155 163.365 18.4423C164.822 23.7692 164.464 29.4297 162.346 34.5301C160.228 39.6304 156.471 43.8799 151.669 46.6076C150.781 47.1122 149.651 46.8011 149.147 45.9127C148.642 45.0242 148.953 43.8948 149.842 43.3902C153.929 41.0687 157.126 37.4519 158.928 33.111C160.731 28.7701 161.036 23.9525 159.796 19.4188C158.555 14.8851 155.84 10.8938 152.079 8.07512Z" className={styles.svgElem5}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M142.757 182.463C143.33 183.407 143.03 184.638 142.086 185.211L141.533 184.3C142.086 185.211 142.086 185.211 142.086 185.211L142.047 185.235L141.926 185.309C141.819 185.375 141.658 185.474 141.449 185.604C141.03 185.864 140.415 186.248 139.638 186.743C138.083 187.732 135.877 189.161 133.28 190.915C128.081 194.429 121.344 199.23 115.137 204.41C108.89 209.625 103.343 215.091 100.372 219.922C98.8844 222.341 98.1682 224.401 98.1609 226.064C98.1542 227.593 98.7405 228.96 100.348 230.188C103.691 232.743 108.973 232.763 116.078 230.843C122.782 229.032 130.441 225.687 138.366 222.227C138.702 222.08 139.039 221.933 139.377 221.785C147.571 218.209 156.012 214.576 163.565 212.737C171.042 210.916 178.275 210.691 183.573 214.74C186.25 216.786 187.647 219.348 187.79 222.252C187.927 225.048 186.889 227.897 185.278 230.617C182.063 236.044 176.092 241.733 169.761 246.828C163.384 251.961 156.452 256.641 151.129 260.03C148.465 261.726 146.196 263.104 144.591 264.059C143.789 264.537 143.152 264.909 142.715 265.162C142.496 265.289 142.327 265.386 142.213 265.451L142.081 265.526L142.035 265.552C142.034 265.553 142.034 265.553 141.049 263.812L142.034 265.553C141.072 266.097 139.852 265.758 139.309 264.797C138.765 263.835 139.104 262.615 140.065 262.071L140.267 262.428C140.065 262.071 140.065 262.071 140.065 262.071L140.104 262.049L140.226 261.979C140.335 261.917 140.498 261.824 140.71 261.701C141.135 261.455 141.758 261.091 142.546 260.622C144.122 259.684 146.356 258.327 148.981 256.656C154.239 253.308 161.035 248.717 167.253 243.712C173.517 238.67 179.008 233.354 181.837 228.578C183.248 226.196 183.878 224.145 183.795 222.448C183.716 220.86 183.002 219.338 181.144 217.918C177.37 215.034 171.743 214.862 164.512 216.623C157.357 218.366 149.243 221.844 140.977 225.451C140.598 225.617 140.218 225.783 139.838 225.949C132.029 229.359 124.121 232.813 117.121 234.705C109.898 236.657 102.888 237.164 97.9187 233.366C95.3696 231.418 94.1485 228.894 94.161 226.046C94.1729 223.332 95.3026 220.529 96.965 217.826C100.294 212.414 106.265 206.605 112.574 201.339C118.924 196.039 125.783 191.154 131.041 187.601C133.672 185.823 135.91 184.373 137.491 183.368C138.282 182.865 138.909 182.472 139.339 182.205C139.555 182.072 139.721 181.969 139.834 181.9L139.963 181.821L140.008 181.793C140.008 181.793 140.009 181.793 141.047 183.502L140.009 181.793C140.953 181.219 142.183 181.519 142.757 182.463Z" className={styles.svgElem6}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M120.462 167.769C112.103 178.706 114.193 194.349 125.13 202.707C136.067 211.066 151.71 208.976 160.069 198.039C168.428 187.102 166.337 171.459 155.4 163.1C144.463 154.742 128.821 156.832 120.462 167.769ZM130.061 175.733C126.049 180.982 127.052 188.491 132.302 192.503L133.094 193.108C138.344 197.121 145.852 196.117 149.864 190.868L150.47 190.075C154.482 184.826 153.479 177.317 148.229 173.305L147.437 172.7C142.187 168.687 134.678 169.691 130.666 174.94L130.061 175.733Z" fill="#FFCD83" className={styles.svgElem7}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M160.93 279.006C169.289 268.069 167.199 252.426 156.262 244.068C145.324 235.709 129.682 237.799 121.323 248.736C112.964 259.673 115.054 275.316 125.992 283.675C136.929 292.033 152.571 289.943 160.93 279.006ZM151.331 271.043C155.343 265.793 154.34 258.284 149.09 254.272L148.298 253.667C143.048 249.654 135.54 250.658 131.528 255.908L130.922 256.7C126.91 261.949 127.913 269.458 133.163 273.47L133.955 274.076C139.205 278.088 146.713 277.085 150.726 271.835L151.331 271.043Z" fill="#FFCD83" className={styles.svgElem8}></path>
      <line x1="139.981" y1="49.1639" x2="139.019" y2="149.164" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem9}></line>
      <line x1="227.155" y1="129.844" x2="165.699" y2="161.99" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem10}></line>
      <line x1="199.696" y1="76.8862" x2="154.741" y2="152.449" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem11}></line>
      <line x1="50.7045" y1="132.317" x2="110.703" y2="165.323" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem12}></line>
      <line x1="77.7414" y1="77.841" x2="122.696" y2="153.403" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem13}></line>
    </svg>
  )
}