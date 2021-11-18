import { useCallback } from "react";
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Paper } from "@mui/material"
import { AddTask } from '@mui/icons-material';
import useLocalStorage from '../hooks/useLocalStorage'
import styles from '../index.module.scss'
import { PATIENTS } from "../constants";

const PatientsList = () => {
    const [patients, setPatients] = useLocalStorage(PATIENTS, [])

    const handleCreatePatients = useCallback(() => {
        setPatients(prev => {
            const id = prev.length + 1
            return [...prev, { id, name: `Patient Number ${id}` }]
        })
    }, [setPatients])

    return (
        <Paper className={styles.patientsListWrapper}>
            <List>
                {patients.map(({ name }, index) => (
                    <ListItem key={index} className={styles.listItem} disablePadding>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton onClick={handleCreatePatients}>
                        <ListItemText primary="New Patient" />
                        <ListItemIcon>
                            <AddTask />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}

export default PatientsList