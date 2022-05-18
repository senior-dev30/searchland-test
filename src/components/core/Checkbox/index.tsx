import { Checkbox as MuiCheckbox, SxProps, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  sx?: SxProps;
};

const Checkbox = ({ label, checked, onChange, disabled, sx }: Props) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          sx={{ padding: 0 }}
        />
      }
      label={
        <Typography variant="subtitle1" pl="10px">
          {label}
        </Typography>
      }
      sx={sx}
    />
  );
};

export default Checkbox;
