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
          border: 'solid 2px #65E9D9',
        },
        border: checked ? 'solid 2px #65E9D9' : '1px solid #EFEFEF',
        borderRadius: '10px',
      }}
    >
      <img
        src={image}
        alt="card-media"
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <Box
        p={2}
        width="100%"
        sx={{ background: '#fff', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
      >
        {label && <Checkbox label={label} checked={checked} onChange={onChange} />}
      </Box>
    </Box>
  );
};

export default Card;
