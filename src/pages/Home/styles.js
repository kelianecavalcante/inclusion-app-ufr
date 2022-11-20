import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: rgba(255, 255, 255, 0.4);
    flex: 1;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#fff', 
`;
export const BellButton = styled.TouchableOpacity`
    height: 60px;
    align-items: center;
    flex-direction: row;
    margin-left: 600px;
    margin-top: -50px;
`;

