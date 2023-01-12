import { Button, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

interface GenerateNumberProps {
    title: string
    value?: string
    setValue: Function
}

export default function GenerateNumber(props: GenerateNumberProps): JSX.Element {
    const { title, value, setValue } = props;

    return (
        <Grid textAlign='center'>
            <Paper elevation={3}>
                <Typography variant="h4" component="h2">
                    {title}
                </Typography>
                <Typography variant="h2" component="h2" minHeight="4.5rem">
                    {value}
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setValue()}
                >
                    Generar
                </Button>
            </Paper >
        </Grid>
    )
}