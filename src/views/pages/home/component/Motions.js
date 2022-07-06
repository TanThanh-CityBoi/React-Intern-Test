import * as React from 'react'
import { MotionCard } from '../../../Component/MotionCard'
import { Box, MenuItem, Menu, IconButton} from '@mui/material'
import { BiMenuAltLeft } from 'react-icons/bi'
import './Motions.scss'


function Motions(props) {
    function handleSort(type) {
        props.setSort(type);
    }
    const motionItem = {
        thumnail: './logo192.png',
        avt: './logo512.png',
        views: 18,
        likes: 20,
        username: 'tanthanh'
    }

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };;
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>Motion trend pick</p>
            </MenuItem>
            <MenuItem>
                <p>Latest</p>
            </MenuItem>
            <MenuItem>
                <p>Recommended</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className="motion-list">
            <div className="filter-group">
                <Box className="nav-bar" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <button className={(props.sort === 0 ? 'btn-action' : '') + ' btn0'} onClick={() => handleSort(0)}>
                        Motion trend pick
                    </button>
                    <button className={(props.sort === 1 ? 'btn-action' : '') + ' btn1'} onClick={() => handleSort(1)}>
                        Latest
                    </button>
                    <button className={(props.sort === 2 ? 'btn-action' : '') + ' btn2'} onClick={() => handleSort(2)}>
                        Recommended
                    </button>
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
                        <BiMenuAltLeft />
                    </IconButton>
                </Box>

                <div className="selection">
                    <p>Selection criteria</p>
                </div>
            </div>

            <div className='motion-list-item'>
                {Array.from({ length: 15 }).map((_, idx) => (
                    <div key={idx} className='card-item' >
                        <MotionCard motion={motionItem} />
                    </div>
                ))}
            </div>

            {renderMobileMenu}
        </div>
    )
}

export { Motions }