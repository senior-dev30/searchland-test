import React from 'react';

import { Box } from '@mui/system';

import Checkbox from 'components/core/Checkbox';

type Props = {
  image: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Card = ({ image, label, checked = false, onChange }: Props) => {
  return (
    <Box
      width={229}
      display="flex"
      flexDirection="column"
      sx={{
        '&:hover': {
          boxShadow: '0px 0px 0px 2px #65E9D9',
          border: 'none',
        },
        border: !checked ? '1px solid #EFEFEF' : 'none',
        boxShadow: checked ? '0px 0px 0px 2px #65E9D9' : 'none',
        borderRadius: '10px',
      }}
    >
      <img
        src={image}
        alt="card-media"
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <Box
        px="18px"
        py="15px"
        width="100%"
        sx={{
          background: '#fff',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          '& label': { margin: 0 },
        }}
      >
        {label && <Checkbox label={label} checked={checked} onChange={onChange} />}
      </Box>
    </Box>
  );
};

export default Card;
