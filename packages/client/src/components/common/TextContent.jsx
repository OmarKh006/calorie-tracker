import styles from "./TextContent.module.css";

const TextContent = (props) => {
  return <div className={styles.placeholder}>{props.value}</div>;
};

export default TextContent;
