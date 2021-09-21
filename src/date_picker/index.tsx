import { useState } from "react";
import {
  Wrapper,
  Show,
  DateDisplayer,
  Subtitle,
  IconButton,
  Month,
  Divider,
  SwitchContainer,
  Label,
  Switch
} from "../styles";
import { getDate, getMonth, getNext } from "../helpers";
import { ChevronLeft, ChevronRight } from "../icons";

export const DatePicker = () => {
  const [start, setStart] = useState(getDate());
  const [time, setTime] = useState(false);

  let fullMonth = getMonth(Number(start.year), start.month.numeric);

  const onNext = (past: boolean = false) => {
    let temp = getNext(start, past);
    console.log({ temp });
    setStart(temp);
  };

  console.log(start.hour);

  return (
    <Wrapper>
      <Show>
        <DateDisplayer
          value={`${start.month.short} ${start.day}, ${start.year}`}
        />
        {time && (
          <DateDisplayer
            value={`${start.hour < 10 ? "0" + start.hour : start.hour}:${
              start.minute < 10 ? "0" + start.minute : start.minute
            }`}
          />
        )}
      </Show>

      {/* Month Year */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "20px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Subtitle>
            {start.month.long} {start.year}
          </Subtitle>

          <div>
            <IconButton onClick={() => onNext(true)}>
              <ChevronLeft />
            </IconButton>
            <IconButton onClick={() => onNext()}>
              <ChevronRight />
            </IconButton>
          </div>
        </div>

        {/* Month */}
        <Month>
          <thead>
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (title, index) => (
                  <th key={index}>{title}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {fullMonth.map((week, index) => (
              <tr key={index}>
                {week.map((item, idx) => (
                  <td
                    key={idx}
                    className={`${
                      index === 0 && item - Math.min(...week) > 7
                        ? "inactive"
                        : index === fullMonth.length - 1 &&
                          item - Math.min(...week) < 7
                        ? "inactive"
                        : ""
                    } ${+start.day === item ? "today" : ""}`}
                    onClick={() => setStart({ ...start, day: item })}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Month>
      </div>

      <Divider />
      {/* Add end date */}
      <SwitchContainer>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Label>End Date</Label>
          <Switch />
        </div>
      </SwitchContainer>

      {/* Add time */}
      <SwitchContainer>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Label>Include Time</Label>
          <Switch onClick={() => setTime(!time)} />
        </div>
      </SwitchContainer>

      <Divider />
    </Wrapper>
  );
};
