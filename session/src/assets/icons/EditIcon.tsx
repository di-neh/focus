import type {FC} from "react";

interface EditIcon{
        onOpen: () => void
}

const EditIcon: FC<EditIcon> = ({onOpen}) => (
    <svg
        onClick={onOpen}
        style={{cursor: 'pointer'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00002 14.6667C3.6464 14.6667 3.30726 14.5262 3.05721 14.2762C2.80716 14.0261 2.66669 13.687 2.66669 13.3334V2.66671C2.66669 2.31309 2.80716 1.97395 3.05721 1.7239C3.30726 1.47385 3.6464 1.33338 4.00002 1.33338H9.33335C9.54439 1.33303 9.75341 1.37444 9.94837 1.45522C10.1433 1.536 10.3204 1.65455 10.4694 1.80404L12.8614 4.19604C13.0112 4.34505 13.1301 4.52227 13.2111 4.71748C13.2922 4.91269 13.3337 5.12202 13.3334 5.33338V13.3334C13.3334 13.687 13.1929 14.0261 12.9428 14.2762C12.6928 14.5262 12.3536 14.6667 12 14.6667H4.00002Z" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.33331 1.33337V4.66671C9.33331 4.84352 9.40355 5.01309 9.52858 5.13811C9.6536 5.26314 9.82317 5.33337 9.99998 5.33337H13.3333" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66665 6H5.33331" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.6666 8.66663H5.33331" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.6666 11.3334H5.33331" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

)
export default EditIcon