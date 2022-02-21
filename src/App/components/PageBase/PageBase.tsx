import React from 'react';
import Spinner from '../Spinner/Spinner';
import './PageBase.scss';

interface IPageBaseProps {
    id?: string;
    loading?: boolean;
}

const PageBase: React.FC<IPageBaseProps> = (props) => {
    return (
        <div className='page-base' id={props.id}>
            {props.children}
            {props.loading && (
                <div className='loading-container'>
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default PageBase;