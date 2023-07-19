const Wrapper = (
  Component: any,
  idName: string,
  classNames: string | undefined = ''
) =>
  function HOC(props: any) {
    // console.log('HOC wrapper', props);
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper app__flex'>
          <Component {...props} />
        </div>
      </div>
    );
  };

export default Wrapper;
