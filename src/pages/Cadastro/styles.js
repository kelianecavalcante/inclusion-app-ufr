import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: '#000';
    flex: 1;
    padding: 4px 0;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 38px 15px;
    margin-bottom: 8px;
`;

export const SearchButton = styled.TouchableOpacity` 
    width: 15%;
    height: 50px;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    color: #000;
`;
