import React from 'react';
import { Icon } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import './EtherscanLink.css';

const EtherscanLink = ({
    address,
    network = 'ethereum' // default network is ethereum
}) => {

    const getUrl = (network, address) => {
        switch (network) {
            case 'optimism':
                return `https://optimistic.etherscan.io/address/${address}`;
            case 'arbitrum':
                return `https://arbiscan.io/address/${address}`;
            case 'gnosis':
                return `https://gnosisscan.io/address/${address}`;
            case 'ethereum':
            default:
                return `https://etherscan.io/address/${address}`;
        }
    };

    const url = getUrl(network, address);

    return (
        <div className='etherscan-link'>
            <a 
                href={url} 
                className='no-underline'
                target="_blank"
                rel="noopener noreferrer"
            >
                {address}
                <Tooltip2
                    content={`View on ${network === 'optimism' ? 'Optimistic Etherscan' : 'Etherscan'}`}
                    placement='top'
                >
                    <Icon 
                        style={{
                            marginLeft: 4,
                            position: 'relative',
                            top: -2
                        }}
                        icon='link' 
                        size={10}
                    />
                </Tooltip2>
            </a>
        </div>
    );
};

export default EtherscanLink;