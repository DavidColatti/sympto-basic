import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import styles from '../index.module.scss'
import services from '../database/services.json'

const ServicesTable = () => {
    return (
        <div className={styles.servicesTableWrapper}>
            <TableContainer component={Paper}>
                <MuiTable aria-label="Services Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Services Offered</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service.id} >
                                <TableCell>{service.label}</TableCell>
                                <TableCell align='right'>{`$${service.cost}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </div >
    )
}

export default ServicesTable