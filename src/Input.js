import React from 'react';

function Input({ label, type, name, value, error, onChange }) {
return (
<div>
<label>
{label}
<input type={type} name={name} value={value} onChange={onChange} />
</label>
{error && <span>{error}</span>}
</div>
);
}

export default Input;