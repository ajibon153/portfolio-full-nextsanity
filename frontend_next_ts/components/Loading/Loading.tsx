import style from './Loading.module.scss';

const LoadingRoller = () => {
    return (
        <div className={style.lds__roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export { LoadingRoller };
