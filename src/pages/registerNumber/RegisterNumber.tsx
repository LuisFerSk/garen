import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import { GenerateNumber } from './components';
import { useOnSnapshot } from '../../hooks';
import { Accountant } from '../../models';
import { createAccountantAdapter } from '../../adapters';
import { generateNewReferralSlipNumber, generateNewTradeNumber, getReferralSlipNumber, getTradeNumber } from '../../services';
import { formatDigits } from '../../util';

export default function RegisterNumber(): JSX.Element {
    const [trade, setTrade] = useState<Accountant>({ amount: 0 })
    const [referralSlip, setReferralSlip] = useState<Accountant>({ amount: 0 })

    useOnSnapshot(getTradeNumber, (doc) => {
        setTrade(createAccountantAdapter(doc.data()))
    })

    useOnSnapshot(getReferralSlipNumber, (doc) => {
        setReferralSlip(createAccountantAdapter(doc.data()))
    })

    return (
        <>
            <Grid container spacing={2} >
                <Grid md={6} xs={12}>
                    <GenerateNumber
                        title='Número de oficio'
                        value={formatDigits(4, trade.amount)}
                        setValue={() => {
                            generateNewTradeNumber()
                                .then(() => { })
                                .catch(err => console.log(err))
                        }}
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <GenerateNumber
                        title='Número de boleta de remisión'
                        value={formatDigits(3, referralSlip.amount)}
                        setValue={() => {
                            generateNewReferralSlipNumber()
                                .then(() => { })
                                .catch(err => console.log(err))
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}