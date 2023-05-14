import styles from "../Layout/styles.module.scss";

const StatItem = ({statValue, picture}) => {
    return (
        <div className={styles.wrapper}>
            <img src={picture} alt="" width={50} height={50}/>
            <div>{statValue}</div>
        </div>
    );
};

export default StatItem;