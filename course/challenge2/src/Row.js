import Cell from "./Cell";

const Row = ({ item }) => {
  console.log(Object.entries(item));
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default Row;
