import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: '#000';
    flex: 1;
    padding: 4px 0;
`;

export const SearchContainer = styled.View`
    width: 96%;
    height: 22%;
    align-items: center;
    margin-bottom: 38px;
    justify-content: center;
    margin-left: 15px;
    border-radius: 5px;
    border-color: #fff;
    shadow-color: #000;

`;

export const SearchButton = styled.TouchableOpacity` 
    width: 15%;
    height: 80px;
    margin-top: 35px;
    margin-left: 40px;
    align-items: center;
    justify-content: center;
    color: #000;
`;
