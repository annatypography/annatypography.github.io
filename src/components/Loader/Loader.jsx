import cls from "./Loader.module.scss";

export default function Loader({ loading }) {
  return (
    <div className={`${cls.body}`}>
      <span className={cls.loader}></span>
    </div>
  );
}
