import './style.scss';
export const ShowMessErr = ({ title, refs, err, name, type = 'text' }) => {
  return (
    <>
      <p className="title">
        {title} <span className="reuqired">*</span>
      </p>
      <input
        name={name}
        ref={refs}
        placeholder="please input title"
        type={type}
        style={{ border: err ? '1px solid red' : '1px solid black' }}
        className={'input-valid'}
      />
      {err ? <span className="reuqired fz-10">{err}</span> : null}
    </>
  );
};
