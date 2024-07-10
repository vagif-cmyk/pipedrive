import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutSide";
import styles from "./select.module.css";

function Select({ options, name }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div className={styles.select} ref={ref}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className={styles.name}>{name}</span>
        <div className={styles.icons}>
          <span className={styles.line}></span>
          <svg className={`${styles.svg} ${open ? styles.open : ""}`} viewBox="0 0 16 16">
            <path d="M4.22314 10.5786L3.52002 9.85983L7.99658 5.51999L12.4692 9.85983L11.7739 10.5786L7.99658 6.91843L4.22314 10.5786Z"></path>
          </svg>
        </div>
      </button>
      <ul className={`${styles.list} ${open ? styles.open : ""}`}>
        {options.map((item, i) => (
          <li className={styles.item} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
