import styled from 'styled-components';

export const PageTitle = styled.div`
  color: #ebebeb;
  font-size: 2em;
  float: left;
  width: 100%;
  text-align: left;
`;

export const FlexChild = styled.div`
  &:hover{
    border-color: #edec51;
  }
  width: 20%;
  float: left;
  border: 1px solid #404040;
  border-radius: 7px 3px 7px 3px;
  padding: 10px 10px 10px 10px;
  margin: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 50%,#404040 50%,#404040 100%);
`;

export const FlexItem = styled.div`
  color: #edec51;
  font-weight: 200;
`;

export const FlexItemDetail = styled.div`
  width: 100%;
  float: left;
  text-align: left;
  color: #edec51;
  margin-top: 20px;
  font-weight: 500;
`;