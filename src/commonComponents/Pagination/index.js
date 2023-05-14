import MaterialPagination from '@mui/material/Pagination'

const Pagination = ({page, handlePageChange}) => {
    return <MaterialPagination page={page} onChange={handlePageChange} count={25}/>
};

export default Pagination;