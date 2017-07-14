import styled from 'styled-components';

const Length = styled.span`
    color: ${props => props.dark ? '#000' : '#FFF'};
    text-transform: uppercase;

    &:after {
        content: 'MIN'
    }
`;

export default Length;