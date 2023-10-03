import css from "./notification.module.css";
const Notification = ({ children }) => {
  return (
    <p className={css.notification}>
      <>{children}</>
    </p>
  );
};
export default Notification;
