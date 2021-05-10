interface TodoProps {
  title: string;
}

const Todo = ({ title }: TodoProps) => {
  return <div>{title}</div>;
};

export default Todo;
