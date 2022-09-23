const Wrapper = (
    Component: any,
    idName: string,
    classNames: string | undefined = ''
) =>
    function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <div className='app__wrapper app__flex'>
                    <Component />
                </div>
            </div>
        );
    };

export default Wrapper;
