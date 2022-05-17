import React from 'react';

import { Box, Typography } from '@mui/material';

import Card from 'components/common/Card';

import CardMediaImg from 'common/assets/images/CardMedia.png';

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={3}>
        <Typography variant="h2" color="primary">
          Testing
        </Typography>
      </Box>
      <Box>
        <Card label="Flood zone 3" image={CardMediaImg} checked={checked} onChange={onChange} />
      </Box>
    </Box>
  );
};

export default App;
