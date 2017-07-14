import styled from 'styled-components';

const Lead = styled.p`
    color: ${props => props.dark ? '#000' : '#FFF'};
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200;
`;

export default Lead;