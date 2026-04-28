import CalorieRecord from "./CalorieRecord";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ListItem = styled.li`
  margin: 10px;
`;

export default function RecordList(props) {
  return (
    <List>
      {props.records.map((record) => {
        return (
          <ListItem key={record.id}>
            <CalorieRecord record={record}></CalorieRecord>
          </ListItem>
        );
      })}
    </List>
  );
}
