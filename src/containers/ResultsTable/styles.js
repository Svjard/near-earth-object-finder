import styled from 'styled-components';

export const Table = styled.table`
  display: block;
  width: 1010px;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 10px;
  table-layout: fixed;
`;

export const HeaderRow = styled.tr`
  display: block;
`;

export const HeaderColumn = styled.th`
  border: 1px solid rgba(0,0,0,0.3);
  padding: 5px;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: left;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
`;


export const TableBody = styled.tbody`
  display: block;
  overflow: auto;
  height: 200px;
  width: 100%;
`;

export const TableColumn = styled.td`
  border: 1px solid rgba(0,0,0,0.3);
  padding: 5px;
  font-family: 'Playfair Display', serif;
  font-weight: regular;
  letter-spacing: 1px;
  text-align: left;
`;

export const EmptyColumn = styled(TableColumn)`
  font-style: italic;
  width: 1010px;
`;

export const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterColumn = styled(TableColumn)`
  font-weight: bold;
`;
