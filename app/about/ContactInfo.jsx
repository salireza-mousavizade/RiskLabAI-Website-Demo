import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";


function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ContactInfoTabs() {
    const [value, setValue] = React.useState(
        0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}} className={'bg-transparent'}>
                <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                    <Tab label="Location" className={'text-primary-500'} icon={<LocationOnIcon fontSize="large"/>} {...a11yProps(0)} />
                    <Tab label="Mail" className={'text-primary-500'} icon={<LocalPhoneIcon fontSize="large" />} {...a11yProps(1)} />
                    <Tab label="Address" className={'text-primary-500'} icon={<MailIcon fontSize="large" />} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Card hidden={value !== 0}>
                <CardContent>
                    <Typography
                        sx={{textAlign: 'center', marginY: 1.5}}
                        variant="h5"
                        gutterBottom
                    >
                        Location
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="h6"
                        gutterBottom
                    >
                        [Placeholder for Office Address]
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="body1"
                        gutterBottom
                        color="textSecondary"
                    >
                        RiskLab AI, [Your Office Address]
                    </Typography>
                </CardContent>
            </Card>
            <Card hidden={value !== 1}>
                <CardContent>
                    <Typography
                        sx={{textAlign: 'center', marginY: 1.5}}
                        variant="h5"
                        gutterBottom
                    >

                        Phone
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="h6"
                        gutterBottom
                    >
                        [Placeholder for Phone Number]
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="body1"
                        gutterBottom
                        color="textSecondary"
                    >
                        [Your Phone Number]
                    </Typography>
                </CardContent>
            </Card>

            <Card hidden={value !== 2}>
                <CardContent>
                    <Typography
                        sx={{textAlign: 'center', marginY: 1.5}}
                        variant="h5"
                        gutterBottom
                    >

                        Email
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="h6"
                        gutterBottom
                    >
                        [Placeholder for Email Address]
                    </Typography>
                    <Typography
                        sx={{textAlign: 'center', marginY: 0.5}}
                        variant="body1"
                        gutterBottom
                        color="textSecondary"
                    >
                        [Your Email Address]
                    </Typography>
                </CardContent>
            </Card>

        </Box>
    );
}


