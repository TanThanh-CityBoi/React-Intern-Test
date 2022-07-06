import * as React from 'react';
import { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    MenuItem,
    IconButton,
    Drawer,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { GrCaretNext } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './TheHeader.scss'

function TheHeader() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [enableSearch, setEnableSearch] = useState(false)
    const handleSearch = () => {
        if (!enableSearch) {
            setEnableSearch(true);
        }
        else {
            setEnableSearch(false)
        }
    }
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <React.Fragment key={'left'}>
            <Drawer
                anchor={'left'}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <Box>
                    <ListItemButton className='mobile-item'>
                        <ListItemIcon>
                            <GrCaretNext />
                        </ListItemIcon>
                        <ListItemText primary={'Discover'} />
                    </ListItemButton>

                    <ListItemButton className='mobile-item'>
                        <ListItemIcon>
                            <GrCaretNext />
                        </ListItemIcon>
                        <ListItemText primary={'Job'} />
                    </ListItemButton>

                    <ListItemButton className='mobile-item'>
                        <ListItemIcon>
                            <GrCaretNext />
                        </ListItemIcon>
                        <ListItemText primary={'Login'} />
                    </ListItemButton>

                    <ListItemButton className='mobile-item'>
                        <ListItemIcon>
                            <GrCaretNext />
                        </ListItemIcon>
                        <ListItemText primary={'Sign up'} />
                    </ListItemButton>
                </Box>

            </Drawer>
        </React.Fragment>
    );

    return (
        <Container className='header-wrapper'>
            <AppBar position="static" className='app-bar'>
                <Toolbar className='tool-bar'>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className='logo-icon'
                        sx={{ display: { xs: enableSearch ? 'none' : 'block', sm: 'block' } }}
                    >
                        <img src='./logo-icon.png' alt='MOTIONTREND'></img>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem className='menu-item'>
                            <NavLink to={'/'}>Discover</NavLink>
                        </MenuItem>
                        <MenuItem className='menu-item'>
                            <NavLink to={'/'}>Job</NavLink>
                        </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box className='search-box' sx={{ width: { xs: '60%', lg: '600px' }, display: { xs: enableSearch ? 'block' : 'none', sm: 'block' } }}>
                        <input
                            placeholder="Search for motion trend......"
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box className='btn-search'>
                        <button onClick={() => handleSearch()}><AiOutlineSearch /></button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} className='authen-group'>
                        <NavLink to={'/'} className='authen-item'>Login</NavLink>
                        <NavLink to={'/'} className='authen-item'>Sign up</NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <AiOutlineMenu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Container>
    )
}

export default TheHeader;