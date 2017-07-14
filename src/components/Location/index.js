import styled from 'styled-components';

const Location = styled.span`
    color: ${props => props.dark ? '#000' : '#FFF'};
    text-transform: uppercase;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #000;
`;

export default Location;