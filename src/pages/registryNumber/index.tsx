import Grid from '@mui/material/Unstable_Grid2';
import GenerateNumber from '../../components/generateNumber';

export default function RegistryNumber() {
    return (
        <>
            <Grid container spacing={2} >
                <Grid md={6} xs={12}>
                    <GenerateNumber
                        title='Número de oficio'
                        value='0001'
                        setValue={() => { }}
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <GenerateNumber
                        title='Número de boleta de remisión'
                        value='001'
                        setValue={() => { }}
                    />
                </Grid>
            </Grid>
        </>
    )
}