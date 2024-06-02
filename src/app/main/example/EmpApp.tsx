import FusePageSimple from '@fuse/core/FusePageSimple';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import EmpHeader from './EmpHeader';
import EmpList from './EmpList';
import { employees } from './models/empModel';
import EmpNavbar from './empNavbar/EmpNavbar';
import { EmpSidebarContent } from './EmpSidebarContent';
import { useTranslation } from 'react-i18next';
import { Layout1ConfigDefaultsType } from 'app/theme-layouts/layout1/Layout1Config';
import { useAppSelector } from 'app/store/hooks';
import { selectFuseCurrentLayoutConfig } from '@fuse/core/FuseSettings/fuseSettingsSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper
    }
}));

/**
 * The ContactsApp page.
 */
function EmpApp() {
	const { t } = useTranslation('empPage');

    const config = useAppSelector(selectFuseCurrentLayoutConfig) as Layout1ConfigDefaultsType;

    const pageLayout = useRef(null);
    const routeParams = useParams();
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    useEffect(() => {
        setRightSidebarOpen(Boolean(routeParams.id));
    }, [routeParams]);

    return (
        <>
            {/* config.toolbar.style 적용 */}
            <div>
                <EmpNavbar />
            </div>
            <Root
                header={<EmpHeader employees={employees} />}
                content={<EmpList employees={employees} />}
                ref={pageLayout}
                rightSidebarContent={<EmpSidebarContent />}
                rightSidebarOpen={rightSidebarOpen}
                rightSidebarOnClose={() => setRightSidebarOpen(false)}
                rightSidebarWidth={640}
                rightSidebarVariant="temporary"
                scroll={isMobile ? 'normal' : 'content'}
            >

            </Root>
        </>
    );
}

export default EmpApp;
