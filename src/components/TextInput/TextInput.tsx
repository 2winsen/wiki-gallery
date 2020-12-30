import React from 'react';
import { joinStyles } from '../../utils/utils';
import styles from './TextInput.module.css';
import { IconX } from '../Icon/Icon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

function TextInput(props: Props) {
  return (
    <div className={styles.container}>
      <input className={joinStyles(props.className, styles.inputElement)} type="text" placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
      <span className={joinStyles(styles.clearButton, 'iconButton')} onClick={props.onClear}><IconX /></span>
    </div >
  )
}

export default TextInput;
