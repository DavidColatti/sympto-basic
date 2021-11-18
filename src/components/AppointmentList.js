import { useCallback } from "react";
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import { Event } from '@mui/icons-material';
import useLocalStorage from '../hooks/useLocalStorage'
import AppointmentAccordion from './AppointmentAccordion'
import styles from '../index.module.scss'
import { APPOINTMENTS } from "../constants";

const AppointmentList = () => {
    const [appointments, setAppointments] = useLocalStorage(APPOINTMENTS, [])

    const handleCreateAppointment = useCallback(() => {
        setAppointments(prev => {
            const id = prev.length + 1
            return [...prev, { id, label: `Appointment Number ${id}` }]
        })
    }, [setAppointments])

    return (
        <div className={styles.appointmentListWrapper}>
            <List>
                {appointments.map((appointment, index) => (
                    <AppointmentAccordion key={index} appointment={appointment} />
                ))}
                <ListItem disablePadding className={styles.newApptButton}>
                    <ListItemButton onClick={handleCreateAppointment}>
                        <ListItemText primary="New Appointment" />
                        <ListItemIcon>
                            <Event />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default AppointmentList