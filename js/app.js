import { render } from "react-dom";
import { Button } from "./components/Button";
import {
  faCheck,
  faClose,
  faPlus,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./components/Icon";
import { Container } from "./components/Container";
import { ItemList, List } from "./components/List";
import { Select } from "./components/Select";
import { Input } from "./components/Input";
import { useState } from "react";
import { Text } from "./components/Text";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Row } from "./components/Row";
import { Divider } from "./components/Divider";
import { Chip } from "./components/Chip";

const options = [
  {
    value: "+",
  },
  {
    value: "-",
  },
];

function App() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows((prevRows) => {
      const lastId =
        prevRows.length > 0 ? Math.max(...prevRows.map((row) => row.id)) : 0;
      const newId = lastId + 1;
      return [
        ...prevRows,
        { id: newId, value: null, sign: "plus", disabled: false },
      ];
    });
  };

  const removeRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const manageRow = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, disabled: !row.disabled } : row
      )
    );
  };

  const selectSign = (id, sign) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, sign: sign } : row))
    );
  };

  const changeValue = (id, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, value: value } : row))
    );
  };

  const result = rows
    .filter((row) => !row.disabled)
    .reduce(
      (acc, row) =>
        acc +
        (row.sign === "plus"
          ? parseFloat(row.value) || 0
          : -(parseFloat(row.value) || 0)),
      0
    );

  return (
    <Container>
      <Button
        title="Add Row"
        leftAdornment={<Icon icon={faPlus} size="md" />}
        onClick={addRow}
      />
      {rows.length !== 0 && (
        <List>
          {rows?.map((row, index) => (
            <>
              <ItemList key={row.id}>
                <div className="input-container">
                  <Select
                    options={options}
                    disabled={row.disabled}
                    onChange={(e) => selectSign(row.id, e.target.value)}
                  />
                  <Input
                    placeholder="Enter value..."
                    disabled={row.disabled}
                    type="number"
                    value={row.value}
                    onChange={(e) => changeValue(row.id, e.target.value)}
                  />
                </div>
                <div className="button-container">
                  <Button
                    variant="delete-button"
                    onClick={() => removeRow(row.id)}
                    title="Delete Row"
                    leftAdornment={<Icon icon={faTrashAlt} size="md" />}
                  />
                  <Button
                    onClick={() => manageRow(row.id)}
                    variant={`${row.disabled ? "" : "disable-button"}`}
                    title={`${row.disabled ? "Enable Row" : "Disable Row"}`}
                    leftAdornment={
                      <Icon icon={row.disabled ? faCheck : faClose} size="md" />
                    }
                  />
                  {row.disabled && (
                    <Chip
                      leftAdornment={<Icon size="md" icon={faWarning} />}
                      text="Disabled Row"
                    />
                  )}
                </div>
              </ItemList>
              {index !== rows.length - 1 && <Divider horizontal />}
            </>
          ))}
        </List>
      )}
      <Row gapped>
        <Text fontWeight={600}>Result:</Text>
        <Text>{result}</Text>
      </Row>
    </Container>
  );
}

render(<App />, document.getElementById("app"));
