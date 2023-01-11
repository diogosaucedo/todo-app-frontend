import { Column, Row, Text, Icon } from 'components';

export type ListItemProps = {
  index: number;
  id: string;
  task: string;
  isDone: number;
  onClick: (index: number) => void;
  isActive: boolean;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <Column
      width="100%"
      bg="rgba(0, 0, 0, 0.2)"
      p="20px"
      mb="10px"
      cursor="pointer"
      borderRadius="4px"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor={props.isActive ? '#fff' : 'transparent'}
      onClick={() => props.onClick(props.index)}
    >
      <Row>
        <Text flex={1}>{props.task}</Text>
        {props.isDone === 1 && <Icon variant="done-white" />}
      </Row>
    </Column>
  );
};
