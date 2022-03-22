export const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="custom-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((item, index) => (
          <option key={index} value={item + 1}>
            {name}- {item + 1}
          </option>
        ))}
      </select>
    </div>
  );
};
