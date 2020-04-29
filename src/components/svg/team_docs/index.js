import classnames from 'classnames';
import React from 'react';
import { useInView } from 'react-intersection-observer'
import styles from './styles.module.css';

export default () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 })
  return (
    <svg ref={ref} className={classnames(styles.svg, { [styles.active]: inView })} viewBox="0 0 448 285" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M224 34C227.866 34 231 30.866 231 27C231 23.134 227.866 20 224 20C220.134 20 217 23.134 217 27C217 30.866 220.134 34 224 34Z" className={styles.svgElem1}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M251 27C251 41.9117 238.912 54 224 54C209.088 54 197 41.9117 197 27C197 12.0883 209.088 0 224 0C238.912 0 251 12.0883 251 27ZM247 27C247 39.7025 236.703 50 224 50C211.297 50 201 39.7025 201 27C201 14.2975 211.297 4 224 4C236.703 4 247 14.2975 247 27Z" className={styles.svgElem2}></path>
      <path d="M224 156C227.866 156 231 152.866 231 149C231 145.134 227.866 142 224 142C220.134 142 217 145.134 217 149C217 152.866 220.134 156 224 156Z" className={styles.svgElem3}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M251 149C251 163.912 238.912 176 224 176C209.088 176 197 163.912 197 149C197 134.088 209.088 122 224 122C238.912 122 251 134.088 251 149ZM247 149C247 161.703 236.703 172 224 172C211.297 172 201 161.703 201 149C201 136.297 211.297 126 224 126C236.703 126 247 136.297 247 149Z" className={styles.svgElem4}></path>
      <path d="M130 112C126.134 112 123 108.866 123 105C123 101.134 126.134 98 130 98C133.866 98 137 101.134 137 105C137 108.866 133.866 112 130 112Z" className={styles.svgElem5}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M103 105C103 119.912 115.088 132 130 132C144.912 132 157 119.912 157 105C157 90.0883 144.912 78 130 78C115.088 78 103 90.0883 103 105ZM107 105C107 117.703 117.297 128 130 128C142.703 128 153 117.703 153 105C153 92.2975 142.703 82 130 82C117.297 82 107 92.2975 107 105Z" className={styles.svgElem6}></path>
      <path d="M318 112C321.866 112 325 108.866 325 105C325 101.134 321.866 98 318 98C314.134 98 311 101.134 311 105C311 108.866 314.134 112 318 112Z" className={styles.svgElem7}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M345 105C345 119.912 332.912 132 318 132C303.088 132 291 119.912 291 105C291 90.0883 303.088 78 318 78C332.912 78 345 90.0883 345 105ZM341 105C341 117.703 330.703 128 318 128C305.297 128 295 117.703 295 105C295 92.2975 305.297 82 318 82C330.703 82 341 92.2975 341 105Z" className={styles.svgElem8}></path>
      <line x1="223" y1="64" x2="223" y2="108" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem9}></line>
      <line x1="2" y1="-2" x2="46" y2="-2" transform="matrix(0.764291 0.644871 0.644871 -0.764291 252 48)" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem10}></line>
      <line x1="195.761" y1="50.8183" x2="162.132" y2="79.1926" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem11}></line>
      <path d="M421 161C424.866 161 428 157.866 428 154C428 150.134 424.866 147 421 147C417.134 147 414 150.134 414 154C414 157.866 417.134 161 421 161Z" className={styles.svgElem12}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M448 154C448 168.912 435.912 181 421 181C406.088 181 394 168.912 394 154C394 139.088 406.088 127 421 127C435.912 127 448 139.088 448 154ZM444 154C444 166.703 433.703 177 421 177C408.297 177 398 166.703 398 154C398 141.297 408.297 131 421 131C433.703 131 444 141.297 444 154Z" className={styles.svgElem13}></path>
      <path d="M27 161C23.134 161 20 157.866 20 154C20 150.134 23.134 147 27 147C30.866 147 34 150.134 34 154C34 157.866 30.866 161 27 161Z" className={styles.svgElem14}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 154C0 168.912 12.0883 181 27 181C41.9117 181 54 168.912 54 154C54 139.088 41.9117 127 27 127C12.0883 127 0 139.088 0 154ZM4 154C4 166.703 14.2975 177 27 177C39.7025 177 50 166.703 50 154C50 141.297 39.7025 131 27 131C14.2975 131 4 141.297 4 154Z" className={styles.svgElem15}></path>
      <path d="M360 222C363.866 222 367 218.866 367 215C367 211.134 363.866 208 360 208C356.134 208 353 211.134 353 215C353 218.866 356.134 222 360 222Z" className={styles.svgElem16}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M387 215C387 229.912 374.912 242 360 242C345.088 242 333 229.912 333 215C333 200.088 345.088 188 360 188C374.912 188 387 200.088 387 215ZM383 215C383 227.703 372.703 238 360 238C347.297 238 337 227.703 337 215C337 202.297 347.297 192 360 192C372.703 192 383 202.297 383 215Z" className={styles.svgElem17}></path>
      <path d="M88 222C84.134 222 81 218.866 81 215C81 211.134 84.134 208 88 208C91.866 208 95 211.134 95 215C95 218.866 91.866 222 88 222Z" className={styles.svgElem18}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M61 215C61 229.912 73.0883 242 88 242C102.912 242 115 229.912 115 215C115 200.088 102.912 188 88 188C73.0883 188 61 200.088 61 215ZM65 215C65 227.703 75.2975 238 88 238C100.703 238 111 227.703 111 215C111 202.297 100.703 192 88 192C75.2975 192 65 202.297 65 215Z" className={styles.svgElem19}></path>
      <path d="M271 265C274.866 265 278 261.866 278 258C278 254.134 274.866 251 271 251C267.134 251 264 254.134 264 258C264 261.866 267.134 265 271 265Z" className={styles.svgElem20}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M298 258C298 272.912 285.912 285 271 285C256.088 285 244 272.912 244 258C244 243.088 256.088 231 271 231C285.912 231 298 243.088 298 258ZM294 258C294 270.703 283.703 281 271 281C258.297 281 248 270.703 248 258C248 245.297 258.297 235 271 235C283.703 235 294 245.297 294 258Z" className={styles.svgElem21}></path>
      <path d="M177 265C173.134 265 170 261.866 170 258C170 254.134 173.134 251 177 251C180.866 251 184 254.134 184 258C184 261.866 180.866 265 177 265Z" className={styles.svgElem22}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M150 258C150 272.912 162.088 285 177 285C191.912 285 204 272.912 204 258C204 243.088 191.912 231 177 231C162.088 231 150 243.088 150 258ZM154 258C154 270.703 164.297 281 177 281C189.703 281 200 270.703 200 258C200 245.297 189.703 235 177 235C164.297 235 154 245.297 154 258Z" className={styles.svgElem23}></path>
      <line x1="2" y1="-2" x2="46" y2="-2" transform="matrix(0.898385 0.43921 0.43921 -0.898385 348.544 116)" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem24}></line>
      <line x1="98.5377" y1="118.675" x2="59.0088" y2="138" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem25}></line>
      <line x1="2" y1="-2" x2="46" y2="-2" transform="matrix(0.333728 0.942669 0.942669 -0.333728 332 136.853)" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem26}></line>
      <line x1="117.218" y1="139.406" x2="102.534" y2="180.883" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem27}></line>
      <line x1="2" y1="-2" x2="46" y2="-2" transform="matrix(0.407679 0.913125 0.913125 -0.407679 239 181)" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem28}></line>
      <line x1="210.011" y1="183.642" x2="192.073" y2="223.819" stroke="#FFCD83" strokeWidth="4" strokeLinecap="round" className={styles.svgElem29}></line>
    </svg>
  )
}