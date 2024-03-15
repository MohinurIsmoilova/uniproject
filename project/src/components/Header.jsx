import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const imgs = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Header = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  /////

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [personImg, setPersonImg] = React.useState([]);
  const [personFull, setPersonFull] = React.useState([]);
  const [personSelect, setPersonSelect] = React.useState([]);
  const [personLife, setPersonLife] = React.useState([]);
  const [personDay, setPersonDay] = React.useState([]);
  const [personLike, setPersonLike] = React.useState([]);
  const [personHello, setPersonHello] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonImg(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonFull(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLife(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange6 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonDay(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange7 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLike(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange8 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonHello(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <div className="container">
        <div className="flex space-x-6">
          <div className="mt-4">
            <h2 className="text-2xl">Если</h2>
          </div>

          {/* ////// */}

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Атр
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personName}
                label="Age"
                onChange={handleChange}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Знач
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personImg}
                label="Age"
                onChange={handleChange2}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex space-x-6 ml-8">
          <div className="mt-4">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Атр</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personFull}
                onChange={handleChange3}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personFull, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Знач</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personSelect}
                onChange={handleChange4}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {imgs.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personSelect, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex space-x-6 ml-8">
          <div className="mt-4">
            <h2 className="text-2xl">И</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Атр</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personLife}
                onChange={handleChange5}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personLife, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Знач</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personDay}
                onChange={handleChange6}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {imgs.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personDay, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex space-x-6 relative right-3">
          <div className="mt-4">
            <h2 className="text-2xl">Тогда</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Атр</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personLike}
                onChange={handleChange7}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personLike, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Знач</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personHello}
                onChange={handleChange8}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {imgs.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personHello, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="mt-10 ml-20">
          <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-lg ">
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};
