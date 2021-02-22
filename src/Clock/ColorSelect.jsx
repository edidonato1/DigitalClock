import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { SelectStyles } from './ClockStyles';

export default function ColorSelect({clockColor, setClockColor}) {
  const [showColors, setShowColors] = useState(false);

  const colorArray = [ '#35a3a3', '#DB686F', '#f0ebeb', '#296CF2', '#ECAFEE', '#B3FFD2', '#FCFC14', '#FC5314', '#77ff41'];

  return (
    <SelectStyles showColors={showColors}>
      <FontAwesomeIcon
        icon={faPalette}
        className="color-picker"
        onClick={() => setShowColors(!showColors)}
      />
      {colorArray.map(c =>
        <FontAwesomeIcon
          key={c}
          icon={faPalette}
          className="color-picker"
          style={{color: c,zIndex: clockColor === c ? "1" : "0"}} // selected color always on top
          onClick={() => {
            setShowColors(true);
            setClockColor(c);
          }}
        />
      )}
    </SelectStyles>
  );
};
